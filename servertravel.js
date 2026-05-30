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

    res.send(`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to SoloSafar</title>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Space+Grotesk:wght@300;400;500;600&family=Bebas+Neue&display=swap" rel="stylesheet">
        <style>
          :root {
            --cream: #f4efe6;
            --warm-black: #1a1208;
            --rust: #c44b2a;
            --gold: #d4a853;
          }

          * { margin: 0; padding: 0; box-sizing: border-box; }
          html, body { height: 100%; }

          body {
            font-family: 'Space Grotesk', sans-serif;
            background: linear-gradient(135deg, rgba(196, 75, 42, 0.16) 0%, rgba(212, 168, 83, 0.16) 100%),
                        url('/india-background.jpg');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            overflow: hidden;
            padding: 20px;
          }

          .container {
            text-align: center;
            max-width: 460px;
            background: rgba(244, 239, 230, 0.96);
            padding: 46px 36px;
            border-radius: 30px;
            box-shadow: 0 24px 80px rgba(26, 18, 8, 0.24);
            backdrop-filter: blur(14px);
            border: 1px solid rgba(196, 75, 42, 0.12);
            animation: slideUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          }

          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(35px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .success-icon {
            width: 96px;
            height: 96px;
            margin: 0 auto 24px;
            background: linear-gradient(135deg, var(--rust), #d4a853);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 48px;
            box-shadow: 0 14px 34px rgba(196, 75, 42, 0.24);
            animation: bounce 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          }

          @keyframes bounce {
            0% { transform: scale(0.3); opacity: 0; }
            60% { transform: scale(1.08); }
            100% { transform: scale(1); opacity: 1; }
          }

          h1 {
            font-family: 'Playfair Display', serif;
            font-size: 2.3rem;
            font-weight: 900;
            color: var(--warm-black);
            margin-bottom: 16px;
            line-height: 1.15;
          }

          .subtitle {
            font-size: 1rem;
            color: rgba(26, 18, 8, 0.75);
            margin-bottom: 14px;
            line-height: 1.6;
          }

          .welcome-text {
            font-size: 0.95rem;
            color: rgba(26, 18, 8, 0.6);
            margin-bottom: 32px;
            line-height: 1.7;
          }

          .status {
            font-size: 0.85rem;
            letter-spacing: 1.8px;
            text-transform: uppercase;
            color: var(--rust);
            font-weight: 700;
            margin-bottom: 28px;
            animation: pulse 2.2s ease-in-out infinite;
          }

          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.65; }
          }

          .btn {
            display: inline-block;
            padding: 16px 46px;
            background: linear-gradient(135deg, var(--rust), #b83d1f);
            color: var(--cream);
            text-decoration: none;
            border-radius: 14px;
            font-weight: 700;
            font-size: 1rem;
            letter-spacing: 1.2px;
            text-transform: uppercase;
            transition: transform 0.28s ease, box-shadow 0.28s ease;
            box-shadow: 0 10px 28px rgba(196, 75, 42, 0.28);
            cursor: pointer;
          }

          .btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 16px 38px rgba(196, 75, 42, 0.36);
          }

          .timer-wrap {
            font-size: 0.88rem;
            color: rgba(26, 18, 8, 0.5);
            margin-top: 24px;
            letter-spacing: 0.3px;
          }

          .timer {
            color: var(--rust);
            font-weight: 800;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="success-icon">✓</div>
          <h1>Registration Complete</h1>
          <p class="subtitle">Your SoloSafar account is ready.</p>
          <p class="welcome-text">Thank you for signing up — we’re taking you to the sign in page so you can start exploring travel options.</p>
          <div class="status">Redirecting in <span class="timer" id="timer">10</span>s</div>
          <a href="/signintravel.html" class="btn">Continue to Sign In</a>
          <p class="timer-wrap">If the redirect does not happen automatically, tap the button above.</p>
        </div>
        <script>
          let count = 10;
          const timerEl = document.getElementById('timer');
          const interval = setInterval(() => {
            count--;
            timerEl.textContent = count;
            if (count === 0) {
              clearInterval(interval);
              window.location.href = '/signintravel.html';
            }
          }, 1000);
        </script>
      </body>
      </html>
    `);
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