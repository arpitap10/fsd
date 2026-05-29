// Server-side code (Node.js + MongoDB)

require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5051;

// If true, the app will use simple in-memory JS stores instead of MongoDB.
let useMemoryStore = false;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

// MongoDB connection: use `MONGO_URI` or fall back to an in-memory DB for demo
(async () => {
  try {
    let mongoUri = process.env.MONGO_URI;

    const tryConnect = async (uri) => {
      try {
        await mongoose.connect(uri);
        console.log('MongoDB connection successful:', uri);
        return true;
      } catch (e) {
        console.warn('Failed to connect to MongoDB at', uri, '-', e.message);
        return false;
      }
    };

    if (mongoUri) {
      const ok = await tryConnect(mongoUri);
      if (ok) return;
      console.log('Configured MONGO_URI failed. Falling back to in-memory MongoDB.');
    } else {
      console.log('No MONGO_URI provided — using in-memory MongoDB');
    }

    const { MongoMemoryServer } = require('mongodb-memory-server');
    const mongod = await MongoMemoryServer.create();
    mongoUri = mongod.getUri();
    await mongoose.connect(mongoUri);
    console.log('Connected to in-memory MongoDB at', mongoUri);
  } catch (err) {
    console.error('MongoDB connection error:', err);
    console.log('Proceeding without a MongoDB backend — using in-memory JS stores.');
    useMemoryStore = true;
  }
})();

// ================= MODELS =================

// User
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
const User = mongoose.model("User", userSchema);

// Generic travel schema (reused)
const travelSchema = new mongoose.Schema({
  name: String,
  age: Number,
  days: Number,
  travelDate: Date,
});

// Models
const GoaTravel = mongoose.model("GoaTravel", travelSchema);
const SikkimTravel = mongoose.model("SikkimTravel", travelSchema);
const ManaliTravel = mongoose.model("ManaliTravel", travelSchema);
const RannTravel = mongoose.model("RannTravel", travelSchema);
const KeralaTravel = mongoose.model("KeralaTravel", travelSchema);
const UdaipurTravel = mongoose.model("UdaipurTravel", travelSchema);
const NagalandTravel = mongoose.model("NagalandTravel", travelSchema);
const LehLadakhTravel = mongoose.model("LehLadakhTravel", travelSchema);

const tripSchema = new mongoose.Schema({
  destination: String,
  startDate: Date,
  endDate: Date,
  style: String,
  notes: String,
  days: Number,
  budget: String,
  plan: Array,
  createdAt: { type: Date, default: Date.now }
});
const Trip = mongoose.model("Trip", tripSchema);

// ================= ROUTES =================

// Pages
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "signintravel.html"));
});

app.get("/get", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "signuptravel.html"));
});

app.get("/homepage.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "homepage.html"));
});

// ================= AUTH =================

// Signup
app.post("/signup", async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).send("Passwords do not match");
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send("Email already in use");
    }

    const newUser = new User({ username, email, password });
    await newUser.save();

    res.send(`<h1>Registration successful!</h1><a href='/signintravel.html'>Sign In</a>`);
  } catch (err) {
    res.status(500).send("Error during registration");
  }
});

// Signin
app.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).send("Invalid credentials");
    }

    res.redirect("/homepage.html");
  } catch (err) {
    res.status(500).send("Error during login");
  }
});

// ================= TRAVEL ROUTES =================

// Simple in-memory stores used when MongoDB is unavailable
const memoryStores = {};

// Helper function (clean code)
const createRoutes = (model, name) => {
  memoryStores[name] = memoryStores[name] || [];

  app.post(`/save-${name}`, async (req, res) => {
    try {
      if (useMemoryStore) {
        const entry = Object.assign({}, req.body);
        entry._id = entry._id || (Date.now().toString() + Math.random().toString(36).slice(2));
        memoryStores[name].push(entry);
        return res.json({ success: true });
      }

      const data = new model(req.body);
      await data.save();
      res.json({ success: true });
    } catch {
      res.json({ success: false });
    }
  });

  app.get(`/view-${name}`, async (req, res) => {
    try {
      if (useMemoryStore) {
        return res.json(memoryStores[name]);
      }
      const data = await model.find();
      res.json(data);
    } catch {
      res.status(500).json({ success: false });
    }
  });
};

// Create all routes
createRoutes(GoaTravel, "goa-travel");
createRoutes(SikkimTravel, "sikkim-travel");
createRoutes(ManaliTravel, "manali-travel");
createRoutes(RannTravel, "rann-travel");
createRoutes(KeralaTravel, "kerala-travel");
createRoutes(UdaipurTravel, "udaipur-travel");
createRoutes(NagalandTravel, "nagaland-travel");

// Leh routes (special names)
memoryStores['leh-ladakh-travel'] = memoryStores['leh-ladakh-travel'] || [];
app.post("/save-leh-ladakh-travel", async (req, res) => {
  try {
    if (useMemoryStore) {
      const entry = Object.assign({}, req.body);
      entry._id = entry._id || (Date.now().toString() + Math.random().toString(36).slice(2));
      memoryStores['leh-ladakh-travel'].push(entry);
      return res.json({ success: true });
    }

    const data = new LehLadakhTravel(req.body);
    await data.save();
    res.json({ success: true });
  } catch {
    res.json({ success: false });
  }
});

app.get("/view-leh-travel", async (req, res) => {
  try {
    if (useMemoryStore) {
      return res.json(memoryStores['leh-ladakh-travel']);
    }
    const data = await LehLadakhTravel.find(); // ✅ FIXED
    res.json(data);
  } catch {
    res.status(500).json({ success: false });
  }
});

memoryStores['trips'] = memoryStores['trips'] || [];
app.post('/save-trip', async (req, res) => {
  try {
    const trip = req.body;
    if (useMemoryStore) {
      const entry = Object.assign({}, trip, { _id: trip._id || (Date.now().toString() + Math.random().toString(36).slice(2)) });
      memoryStores['trips'].push(entry);
      return res.json({ success: true });
    }
    const data = new Trip(trip);
    await data.save();
    res.json({ success: true });
  } catch {
    res.json({ success: false });
  }
});

app.get('/saved-trips', async (req, res) => {
  try {
    if (useMemoryStore) {
      return res.json(memoryStores['trips']);
    }
    const data = await Trip.find().sort({ createdAt: -1 });
    res.json(data);
  } catch {
    res.status(500).json({ success: false });
  }
});

// ================= START SERVER =================
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});