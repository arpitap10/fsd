const LANGUAGE_KEY = 'soloSafarLanguage';
const DEFAULT_LANGUAGE = 'en';

const TRANSLATIONS = {
  en: {
    'nav.languageLabel': 'Language',
    'nav.destinations': 'Destinations',
    'nav.feedback': 'Feedback',
    'nav.chat': 'Chat',
    'nav.signOut': 'Sign Out',
    'nav.back': 'Back to Home',
    'hero.title': 'Where Will<br>You <span>Go?</span>',
    'hero.quote': '“Travel far enough to meet yourself.”',
    'marquee.tagline': 'SoloSafar — every view is a story.',
    'hero.tagline': 'Discover India — solo travel made strikingly simple.',
    'section.count': '08 destinations',
    'feature1.title': 'Tailored for Solo Travelers',
    'feature1.text': 'Budget calculators, safety tips, and emergency contacts curated specifically for solo travel in India.',
    'feature2.title': 'Real Local Experiences',
    'feature2.text': 'Authentic food, hidden stays, and cultural experiences beyond the tourist trail. Real India.',
    'feature3.title': 'Plan, Save & Go',
    'feature3.text': 'Enter your travel dates, get an instant budget estimate, and save your trip details.',
    'dashboard.title': 'Everything you need. All in one place.',
    'dashboard.copy': 'Interactive tools designed for the modern traveler.',
    'tools.plan.desc': 'Plan routes, build itineraries and discover amazing destinations.',
    'tools.find.desc': 'Connect with solo travelers and find travel buddies.',
    'tools.budget.desc': 'Keep track of your expenses and travel smartly.',
    'tools.journal.desc': 'Write your stories, save moments and relive your journey.',
    'tools.safety.desc': 'Stay safe with verified tips, emergency contacts and travel alerts.',
    'tools.footer': 'All tools work together seamlessly. Plan, connect, track, document and stay safe — your entire journey, simplified.',
    'tools.howItWorks': 'How it works',
    'dashboard.ai.title': 'AI Recommendations',
    'dashboard.ai.text': 'Get personalized destination suggestions',
    'dashboard.plan.title': 'Plan a Trip',
    'dashboard.plan.text': 'Create your next itinerary',
    'dashboard.find.title': 'Find Travelers',
    'dashboard.find.text': 'Connect with fellow adventurers',
    'dashboard.journal.title': 'Travel Journal',
    'dashboard.journal.text': 'Document your adventures',
    'dashboard.budget.title': 'Track Budget',
    'dashboard.budget.text': 'Monitor your expenses',
    'dashboard.safety.title': 'Safety Tools',
    'dashboard.safety.text': 'Manage emergency contacts',
    'dashboard.card.action': 'Explore',
    'dashboard.note': 'Tap a card to preview the tool.',
    'footer.tagline': 'Discover, plan, and travel solo — effortlessly.',
    'footer.info': 'Info',
    'chat.label': 'Traveller Chat',
    'chat.header': 'Chat with other travellers',
    'chat.text': 'Share local tips, ask about weather, routes, or accommodation, and connect with solo explorers across India.',
    'chat.placeholder': 'Write your message here...',
    'chat.sendButton': 'Send message',
    'chat.note': 'Messages are saved locally in your browser so you can continue the conversation on this device.',
    'planner.title': 'Trip Planner',
    'planner.name': 'Your Name',
    'planner.age': 'Age',
    'planner.days': 'Number of Days',
    'planner.date': 'Travel Date',
    'planner.saveBtn': 'Save My Trip →',
    'planner.badge': 'Trip Planner',
    'planner.modalTitle': 'Build your next itinerary',
    'planner.intro': 'Choose your destination, travel dates and style. Get an instant day plan, budget estimate and save it for later.',
    'planner.destinationLabel': 'Destination',
    'planner.startDateLabel': 'Start Date',
    'planner.endDateLabel': 'End Date',
    'planner.styleLabel': 'Travel Style',
    'planner.notesLabel': 'Notes',
    'planner.generateBtn': 'Generate Plan',
    'planner.viewSavedBtn': 'View Saved Trips',
    'planner.shareBtn': 'Share',
    'planner.summaryTitle': 'Your trip preview will appear here.',
    'planner.summaryHint': 'Generate a plan to see your destination highlights, budget estimate, and day-by-day itinerary.',
    'find.badge': 'Find Travelers',
    'find.modalTitle': 'Connect with fellow adventurers',
    'find.intro': 'Filter by destination, dates, and interests. Discover travelers ready to meet, share plans, or explore together.',
    'find.destinationLabel': 'Destination',
    'find.startDateLabel': 'Travel from',
    'find.endDateLabel': 'Travel to',
    'find.interestLabel': 'Interest',
    'journal.badge': 'Travel Journal',
    'journal.modalTitle': 'Document your adventures',
    'journal.intro': 'Capture your journey notes, moods, and memories in one place.',
    'journal.dateLabel': 'Date',
    'journal.titleLabel': 'Entry title',
    'journal.moodLabel': 'Mood',
    'journal.entryLabel': 'Entry',
    'journal.visibilityLabel': 'Visibility',
    'journal.authorLabel': 'Author name',
    'journal.locationLabel': 'Location',
    'journal.searchLabel': 'Search entries',
    'journal.saveBtn': 'Save Entry',
    'journal.viewBtn': 'View Entries',
    'journal.exportBtn': 'Export',
    'journal.clearBtn': 'Clear All',
    'journal.summaryTitle': 'Journal at a glance',
    'journal.summaryHint': 'Save your reflections and browse your latest entries.',
    'budget.badge': 'Track Budget',
    'budget.modalTitle': 'Monitor your expenses',
    'budget.intro': 'Log costs, compare categories, and keep the budget on track while you travel.',
    'budget.dateLabel': 'Date',
    'budget.categoryLabel': 'Category',
    'budget.amountLabel': 'Amount',
    'budget.goalLabel': 'Budget Goal',
    'budget.filterLabel': 'Filter by',
    'budget.noteLabel': 'Note',
    'budget.setGoalBtn': 'Set Goal',
    'budget.addBtn': 'Add Expense',
    'budget.exportBtn': 'Export',
    'budget.resetBtn': 'Reset',
    'budget.clearBtn': 'Clear All',
    'budget.summaryTitle': 'Budget Summary',
    'budget.summaryHint': 'Track your spending and see where your money goes.',
    'budget.expenseDateLabel': 'Expense date',
    'budget.amountInrLabel': 'Amount (INR)',
    'budget.tripGoalLabel': 'Trip budget goal (INR)',
    'budget.filterCategoryLabel': 'Filter by category',
    'budget.amountPlaceholder': 'Enter amount',
    'budget.goalPlaceholder': 'Set your target budget',
    'budget.notePlaceholder': 'Taxi, meal, souvenir, etc.',
    'budget.exportCsvBtn': 'Export CSV',
    'planner.notesPlaceholder': 'Add preferences, must-see spots, or special notes',
    'safety.namePlaceholder': 'Friend, family, local contact',
    'safety.relationPlaceholder': 'Relation or role',
    'ui.transport': 'Transport',
    'ui.food': 'Food',
    'ui.stay': 'Stay',
    'ui.activities': 'Activities',
    'ui.shopping': 'Shopping',
    'ui.all': 'All',
    'ui.comfort': 'Comfort',
    'ui.luxury': 'Luxury',
    'ui.budget': 'Budget',
    'ui.day': 'day',
    'ui.days': 'days',
    'safety.badge': 'Safety Tools',
    'safety.modalTitle': 'Manage emergency contacts',
    'safety.intro': 'Keep your vital contacts close and review key safety checks for your trip.',
    'safety.nameLabel': 'Contact Name',
    'safety.phoneLabel': 'Phone Number',
    'safety.relationLabel': 'Relation',
    'safety.saveBtn': 'Save Contact',
    'safety.tipsBtn': 'Safety Tips',
    'safety.callPoliceBtn': 'Call Police',
    'safety.callAmbulanceBtn': 'Call Ambulance',
    'safety.sosBtn': 'Emergency SOS',
    'safety.summaryTitle': 'Safety Checklist',
    'safety.summaryHint': 'Keep these tips in mind while traveling.',
    'safety.checklistTitle': 'Pre-Trip Checklist',
    'safety.check1': 'Share your itinerary with family',
    'safety.check2': 'Register with your embassy (if traveling abroad)',
    'safety.check3': 'Save emergency contact numbers',
    'safety.check4': 'Get travel insurance',
    'nav.tools': 'Tools',
    'nav.blog': 'Blog',
    'dashboard.label': 'Tools for your journey',
    'footer.destinations': 'Destinations',
    'footer.copyright': '© 2024 SoloSafar. All rights reserved.',
    'footer.soloNote': 'Travel solo. Travel safe. Travel smart.',
    'review.shareHeading': 'Share Your Story',
    'review.placeholder': 'What was your experience like?',
    'review.button': 'Post Review →',
    'weather.label': 'Weather Report',
    'weather.title': 'This week in',
    'safety.label': 'Stay Safe, Travel Smart',
    'goa.hero.eyebrow': 'Sun & Sand · Western Coast',
    'goa.hero.destination': 'Sun-Kissed<br>Goa',
    'goa.hero.tagline': 'Where the Arabian Sea meets Portuguese charm — beaches, basilicas, and unforgettable sunsets.',
    'goa.hero.stat.beaches': 'Beaches',
    'goa.hero.stat.perDay': 'Per Day',
    'goa.hero.stat.bestSeason': 'Best Season',
    'goa.section.intro.label': 'Coastal Jewel of India',
    'goa.section.intro.heading': 'Goa: More Than Just <em>Beaches</em>',
    'goa.section.intro.p1': "Nestled along the Arabian Sea, Goa is India's smallest state with the biggest soul. Colonial Portuguese architecture meets vibrant beach culture in a heady blend of history, spice, and surf.",
    'goa.section.intro.p2': 'From the shimmering sands of Baga to the sacred Basilica of Bom Jesus, every corner of Goa tells a layered story. The perfect canvas for the solo traveller.',
    'goa.places.label': 'Places to Discover',
    'goa.place.baga': 'Baga Beach',
    'goa.place.anjuna': 'Anjuna Beach',
    'goa.place.dudhsagar': 'Dudhsagar Falls',
    'goa.place.basilica': 'Basilica of Bom Jesus',
    'goa.place.fort': 'Fort Aguada',
    'goa.map.label': 'Getting There',
    'goa.map.heading': 'Reaching Goa',
    'goa.map.p': 'Goa is well connected by air (Dabolim / Mopa Airport), rail (Madgaon & Thivim stations), and road via NH66. Internal travel is best done by renting a scooter.',
    'goa.budget.label': 'Estimated Budget',
    'goa.budget.sub': 'Based on ₹3000/day average',
    'goa.essentials.localFlavours': 'Local Flavours',
    'goa.essentials.whatToEat': 'What to Eat',
    'goa.food.fish.title': 'Goan Fish Curry',
    'goa.food.fish.desc': 'Coconut milk curry with local spices — the soul of Goan cuisine.',
    'goa.food.prawn.title': 'Prawn Balchão',
    'goa.food.prawn.desc': 'Fiery, tangy prawn pickle unique to Goan kitchens.',
    'goa.food.dessert.title': 'Bebinca',
    'goa.food.dessert.desc': 'Classic Goan layered dessert — rich, golden, irresistible.',
    'goa.stay.label': 'Where to Rest',
    'goa.stay.heading': 'Places to Stay',
    'goa.stay.zostel.title': 'Zostel Goa',
    'goa.stay.zostel.desc': 'Vibrant backpacker hostel with pool, great for meeting fellow solo travelers.',
    'goa.stay.beachside.title': 'Beachside Inn (Calangute)',
    'goa.stay.beachside.desc': 'Budget stay steps from the beach with all essential amenities.',
    'goa.review.item1': 'Goa solo was life-changing. The sunsets at Vagator are something else — met so many amazing people!',
    'goa.review.item2': 'Rented a scooter and explored every beach in 5 days. Budget-friendly if you eat local.',
    'goa.safety.title': 'Stay Safe, Travel Smart',
    'goa.safety.card1.title': 'Emergency Contacts',
    'goa.safety.card1.item1': 'Goa Police: +91-832-2424001',
    'goa.safety.card1.item2': 'Ambulance: 108',
    'goa.safety.card1.item3': 'Tourist Helpline: 1363',
    'goa.safety.card2.title': 'Beach Safety',
    'goa.safety.card2.item1': 'Swim only at flagged zones',
    'goa.safety.card2.item2': 'Avoid isolated beaches after dark',
    'goa.safety.card2.item3': 'Watch out for rip currents',
    'goa.safety.card3.title': 'Travel Tips',
    'goa.safety.card3.item1': 'Always lock your scooter',
    'goa.safety.card3.item2': 'Keep copies of your documents',
    'goa.safety.card3.item3': 'Stay hydrated — it gets very hot',
    'footer.allDestinations': 'All Destinations',
    'footer.contact': 'Contact',
    'footer.copyright': '© 2024 SoloSafar. All rights reserved.',
    'footer.soloNote': 'Made with ♥ for solo explorers of India',
    'English': 'English',
    'SoloSafar': 'SoloSafar',
    'What to Eat': 'What to Eat',
    'Estimated Budget': 'Estimated Budget',
    'Places to Stay': 'Places to Stay',
    'Per Day': 'Per Day',
    'Emergency Contacts': 'Emergency Contacts',
    'Best Season': 'Best Season',
    'Weather Tips': 'Weather Tips',
    'Travel Tips': 'Travel Tips',
    'Sign In - SoloSafar': 'Sign In - SoloSafar',
    'Sign In to SoloSafar': 'Sign In to SoloSafar',
    'Sign Up - Solo Traveler': 'Sign Up - Solo Traveler',
    'Sign Up to Solo Traveler': 'Sign Up to Solo Traveler',
    'Email': 'Email',
    'Password': 'Password',
    'Confirm Password': 'Confirm Password',
    'Username': 'Username',
    'Submit': 'Submit',
    'signin.pageTitle': 'Sign In - SoloSafar',
    'signin.heading': 'Sign In to SoloSafar',
    'signin.emailLabel': 'Email',
    'signin.passwordLabel': 'Password',
    'signin.submit': 'Sign In',
    'signin.signupLink': "Don't have an account? Sign up here",
    'signup.pageTitle': 'Sign Up - Solo Traveler',
    'signup.heading': 'Sign Up to Solo Traveler',
    'signup.usernameLabel': 'Username',
    'signup.emailLabel': 'Email',
    'signup.passwordLabel': 'Password',
    'signup.confirmPasswordLabel': 'Confirm Password',
    'signup.submit': 'Sign Up',
    'signup.backToSignIn': 'Back to Sign in here',
    'feedback.pageTitle': 'Feedback',
    'feedback.heading': 'Feedback',
    'feedback.namePlaceholder': 'Your Name',
    'feedback.feedbackPlaceholder': 'Your feedback',
    'feedback.submit': 'Submit',
    'Sign In': 'Sign In',
    'Sign Up': 'Sign Up',
    'Your feedback': 'Your feedback',
    "Don't have an account? Sign up here": "Don't have an account? Sign up here",
    'Back to Sign in here': 'Back to Sign in here',
    'Coastal Jewel of India': 'Coastal Jewel of India',
    'Places to Discover': 'Places to Discover',
    'Getting There': 'Getting There',
    'Trip Planner': 'Trip Planner',
    'Local Flavours': 'Local Flavours',
    'Where to Rest': 'Where to Rest',
    'Traveller Stories': 'Traveller Stories',
    'Stay Safe, Travel Smart': 'Stay Safe, Travel Smart',
    'dest.tag.1': 'Sun · Sand · Sea',
    'dest.tag.2': 'High Altitude · Monasteries',
    'dest.tag.3': 'Snow · Adventure · Valleys',
    'dest.tag.4': 'Backwaters · Spice · Serenity',
    'dest.tag.5': 'Palaces · Lakes · Royalty',
    'dest.tag.6': 'Mountains · Monasteries · Mist',
    'dest.tag.7': 'Salt Desert · Folk Art · Festivals',
    'dest.tag.8': 'Tribes · Valleys · Hornbill',
    'dest.name.1': 'Goa',
    'dest.name.2': 'Leh Ladakh',
    'dest.name.3': 'Manali',
    'dest.name.4': 'Kerala',
    'dest.name.5': 'Udaipur',
    'dest.name.6': 'Sikkim',
    'dest.name.7': 'Kutch',
    'dest.name.8': 'Nagaland',
    'udaipur.hero.destination': '<em>Royal</em><br>Udaipur',
    'page.title': 'SoloSafar — India Awaits',
    'Chat — SoloSafar': 'Chat — SoloSafar',
    'Welcome to the chat! Ask about the best time to visit any destination.': 'Welcome to the chat! Ask about the best time to visit any destination.',
    'I loved the peaceful mornings in Udaipur — the lakes are magical before sunrise.': 'I loved the peaceful mornings in Udaipur — the lakes are magical before sunrise.',
    'If you are going to Goa, rent a scooter and explore the quieter north beaches.': 'If you are going to Goa, rent a scooter and explore the quieter north beaches.',
    'Just now': 'Just now',
    'gallery.title': 'SoloSafar Gallery',
    'gallery.meta': 'No. 01 · India Vol. 1',
    'gallery.credit': 'Designed by',
    'manifesto.one': 'Go Offbeat',
    'manifesto.two': 'Travel Fearless',
    'manifesto.three': 'Discover India',
    'manifesto.four': 'Solo but Never Alone',
    'manifesto.five': '8 Destinations',
    'manifesto.six': 'Bolo Toh Solo'
  },
  hi: {
    'nav.languageLabel': 'भाषा',
    'nav.destinations': 'गंतव्य',
    'nav.feedback': 'प्रतिक्रिया',
    'nav.chat': 'चैट',
    'nav.signOut': 'साइन आउट',
    'nav.back': 'घर वापस',
    'hero.title': 'तुम कहाँ जाओगे? <br><span>भारत का सफर</span>',
    'hero.quote': '“इतना दूर यात्रा करो कि खुद से मिलो।”',
    'marquee.tagline': 'सोलो सफ़र हर नज़ारा कहानी ऐ।',
    'hero.tagline': 'इंडिया की खोज करें — सोलो ट्रैवल और भी आसान।',
    'section.count': '08 गंतव्य',
    'feature1.title': 'सोलो यात्रियों के लिए',
    'feature1.text': 'बजट, सुरक्षा और संपर्क — भारत में अकेले यात्रा के लिए तैयार।',
    'feature2.title': 'असली अनुभव',
    'feature2.text': 'प्रामाणिक भोजन, छुपे ठिकाने, और स्थानीय भारत का अनुभव।',
    'feature3.title': 'योजना बनाएं, बचत करें, चलें',
    'feature3.text': 'यात्रा तिथियाँ डालें, बजट पाएं, और अपनी योजना बचाएं।',
    'dashboard.title': 'आपकी सोलो यात्रा के लिए टूल्स',
    'dashboard.copy': 'सड़क पर योजना बनाने, जोड़ने और सुरक्षित रहने के लिए सब कुछ।',
    'dashboard.ai.title': 'AI सुझाव',
    'dashboard.ai.text': 'व्यक्तिगत गंतव्य सुझाव पाएं',
    'dashboard.plan.title': 'यात्रा योजना बनाएं',
    'dashboard.plan.text': 'अपना अगला यात्रा कार्यक्रम बनाएं',
    'dashboard.find.title': 'यात्रियों को खोजें',
    'dashboard.find.text': 'साथी यात्रियों से जुड़ें',
    'dashboard.journal.title': 'यात्रा डायरी',
    'dashboard.journal.text': 'अपने अनुभव दर्ज करें',
    'dashboard.budget.title': 'बजट ट्रैक करें',
    'dashboard.budget.text': 'अपने खर्चों की निगरानी करें',
    'dashboard.safety.title': 'सुरक्षा उपकरण',
    'dashboard.safety.text': 'आपातकालीन संपर्क प्रबंधित करें',
    'dashboard.card.action': 'खोजें',
    'dashboard.note': 'उपकरण का पूर्वावलोकन करने के लिए कार्ड टैप करें।',
    'footer.tagline': 'अकेले यात्रा करें, फिर भी आसान तरीके से।',
    'footer.info': 'जानकारी',
    'chat.label': 'यात्रियों की बातचीत',
    'chat.header': 'अन्य यात्रियों से चैट करें',
    'chat.text': 'स्थानीय सुझाव साझा करें, मौसम पूछें, और भारत में यात्रा के अनुभव शेयर करें।',
    'chat.placeholder': 'अपना संदेश यहाँ लिखें...',
    'chat.sendButton': 'संदेश भेजें',
    'chat.note': 'यहाँ संदेश ब्राउज़र में स्थानीय रूप से सेव रहते हैं।',
    'planner.title': 'यात्रा योजनाकार',
    'planner.name': 'आपका नाम',
    'planner.age': 'आयु',
    'planner.days': 'दिनों की संख्या',
    'planner.date': 'यात्रा तिथि',
    'planner.saveBtn': 'मेरी यात्रा सहेजें →',
    'review.shareHeading': 'अपनी कहानी साझा करें',
    'review.placeholder': 'अनुभव कैसा रहा?',
    'review.button': 'समीक्षा भेजें →',
    'weather.label': 'मौसम रिपोर्ट',
    'weather.title': 'इस सप्ताह',
    'safety.label': 'सुरक्षित रहें, समझदारी से यात्रा करें',
    'goa.hero.eyebrow': 'सूरज और रेत · पश्चिमी तट',
    'goa.hero.destination': 'सन-किन्ड<br>गोवा',
    'goa.hero.tagline': 'अरब सागर पुर्तगाली आकर्षण से मिलता है — समुद्र तट, बेसिलिका, और अविस्मरणीय सूर्यास्त।',
    'goa.hero.stat.beaches': 'बीच',
    'goa.hero.stat.perDay': 'प्रति दिन',
    'goa.hero.stat.bestSeason': 'सबसे अच्छा मौसम',
    'goa.section.intro.label': 'भारत का तटीय रत्न',
    'goa.section.intro.heading': 'गोवा: केवल समुद्र तटों से भी अधिक',
    'goa.section.intro.p1': 'अरब सागर के किनारे बसा गोवा भारत का सबसे छोटा राज्य है, लेकिन सबसे बड़ी आत्मा के साथ। उपनिवेशीय पुर्तगाली वास्तुकला जीवंत समुद्र तट संस्कृति से मिलती है, जो इतिहास, मसाले और सर्फ़ का सिर चढ़ा मिश्रण है।',
    'goa.section.intro.p2': 'बागा की चमकदार रेत से लेकर बासिलिका ऑफ बॉम जीसस तक, गोवा का हर कोना एक परतदार कहानी कहता है। अकेले यात्री के लिए यह आदर्श कैनवास है।',
    'goa.places.label': 'खोजने के स्थान',
    'goa.place.baga': 'बागा बीच',
    'goa.place.anjuna': 'अंजुना बीच',
    'goa.place.dudhsagar': 'दुधसागर झरना',
    'goa.place.basilica': 'बासिलिका ऑफ बॉम जीसस',
    'goa.place.fort': 'किला अगोडा',
    'goa.map.label': 'कैसे पहुंचें',
    'goa.map.heading': 'गोवा कैसे पहुंचें',
    'goa.map.p': 'गोवा वायु मार्ग (दाभोलिम / मोपा एयरपोर्ट), रेल मार्ग (मडगांव और थीविम स्टेशन), और एनएच66 के मार्ग से अच्छी तरह जुड़ा हुआ है। आंतरिक यात्रा के लिए स्कूटर किराए पर लेना सबसे अच्छा है।',
    'goa.budget.label': 'अनुमानित बजट',
    'goa.budget.sub': '₹3000/दिन औसत पर आधारित',
    'goa.essentials.localFlavours': 'स्थानीय स्वाद',
    'goa.essentials.whatToEat': 'क्या खाना है',
    'goa.food.fish.title': 'गोआन फ़िश करी',
    'goa.food.fish.desc': 'नारियल का दूध करी स्थानीय मसालों के साथ — गोवा की रसोई की आत्मा।',
    'goa.food.prawn.title': 'प्रॉन बालचाओ',
    'goa.food.prawn.desc': 'तीखा, खट्टा प्रॉन अचार जो गोवा के रसोईघर के लिए विशिष्ट है।',
    'goa.food.dessert.title': 'बेबिंका',
    'goa.food.dessert.desc': 'क्लासिक गोआन परतदार मिठाई — समृद्ध, सुनहरी, लाजवाब।',
    'goa.stay.label': 'आराम कहाँ करें',
    'goa.stay.heading': 'रहने के स्थान',
    'goa.stay.zostel.title': 'ज़ोस्टेल गोवा',
    'goa.stay.zostel.desc': 'पूल के साथ जीवंत बैकपैकर हॉस्टल, साथी एकल यात्रियों से मिलने के लिए शानदार।',
    'goa.stay.beachside.title': 'बीचसाइड इन (कालंगुटे)',
    'goa.stay.beachside.desc': 'समुद्र तट से कदमों की दूरी पर बजट ठहराव, सभी आवश्यक सुविधाओं के साथ।',
    'goa.review.item1': 'गोवा अकेले यात्रा करने के लिए जीवन बदलने वाला था। वागाटर में सूर्यास्त कुछ अलग था — इतनी सारी अद्भुत लोगों से मिला!',
    'goa.review.item2': 'स्कूटर किराए पर लेकर 5 दिनों में हर बीच की यात्रा की। स्थानीय भोजन खाने पर बजट अनुकूल।',
    'goa.safety.title': 'सुरक्षित रहें, समझदारी से यात्रा करें',
    'goa.safety.card1.title': 'आपातकालीन संपर्क',
    'goa.safety.card1.item1': 'गोवा पुलिस: +91-832-2424001',
    'goa.safety.card1.item2': 'एम्बुलेंस: 108',
    'goa.safety.card1.item3': 'टूरिस्ट हेल्पलाइन: 1363',
    'goa.safety.card2.title': 'बीच सुरक्षा',
    'goa.safety.card2.item1': 'केवल झंडे वाले क्षेत्रों में तैरें',
    'goa.safety.card2.item2': 'अँधेरे के बाद अकेले समुद्र तटों से बचें',
    'goa.safety.card2.item3': 'रिप करंट्स का ध्यान रखें',
    'goa.safety.card3.title': 'यात्रा सुझाव',
    'goa.safety.card3.item1': 'हमेशा अपने स्कूटर को लॉक करें',
    'goa.safety.card3.item2': 'अपने दस्तावेज़ों की प्रतियाँ रखें',
    'goa.safety.card3.item3': 'हाइड्रेटेड रहें — यहाँ बहुत गर्मी होती है',
    'footer.allDestinations': 'सभी गंतव्य',
    'footer.contact': 'संपर्क',

    'footer.copyright': '© 2024 SoloSafar। सर्वाधिकार सुरक्षित।',
    'footer.soloNote': 'सोलो खोजियों के लिए ♥ से तैयार',
    'English': 'अंग्रेज़ी',
    'SoloSafar': 'SoloSafar',
    'What to Eat': 'क्या खाना है',
    'Estimated Budget': 'अनुमानित बजट',
    'Places to Stay': 'रहने की जगहें',
    'Per Day': 'प्रति दिन',
    'Emergency Contacts': 'आपातकालीन संपर्क',
    'Best Season': 'सबसे अच्छा मौसम',
    'Weather Tips': 'मौसम टिप्स',
    'Travel Tips': 'यात्रा सुझाव',
    'Sign In - SoloSafar': 'साइन इन - SoloSafar',
    'Sign In to SoloSafar': 'SoloSafar में साइन इन करें',
    'Sign Up - Solo Traveler': 'साइन अप - Solo Traveler',
    'Sign Up to Solo Traveler': 'Solo Traveler पर साइन अप करें',
    'Email': 'ईमेल',
    'Password': 'पासवर्ड',
    'Confirm Password': 'पासवर्ड की पुष्टि करें',
    'Username': 'उपयोगकर्ता नाम',
    'Submit': 'जमा करें',
    'signin.pageTitle': 'साइन इन - SoloSafar',
    'signin.heading': 'SoloSafar में साइन इन करें',
    'signin.emailLabel': 'ईमेल',
    'signin.passwordLabel': 'पासवर्ड',
    'signin.submit': 'साइन इन',
    'signin.signupLink': 'खाता नहीं है? यहाँ साइन अप करें',
    'signup.pageTitle': 'साइन अप - Solo Traveler',
    'signup.heading': 'Solo Traveler पर साइन अप करें',
    'signup.usernameLabel': 'उपयोगकर्ता नाम',
    'signup.emailLabel': 'ईमेल',
    'signup.passwordLabel': 'पासवर्ड',
    'signup.confirmPasswordLabel': 'पासवर्ड की पुष्टि करें',
    'signup.submit': 'साइन अप',
    'signup.backToSignIn': 'यहाँ साइन इन पर वापस जाएँ',
    'feedback.pageTitle': 'प्रतिक्रिया',
    'feedback.heading': 'प्रतिक्रिया',
    'feedback.namePlaceholder': 'आपका नाम',
    'feedback.feedbackPlaceholder': 'आपका फीडबैक',
    'feedback.submit': 'जमा करें',
    "Don't have an account? Sign up here": 'खाता नहीं है? यहाँ साइन अप करें',
    'Back to Sign in here': 'यहाँ साइन इन पर वापस जाएँ',
    'Coastal Jewel of India': 'भारत का तटीय रत्न',
    'Places to Discover': 'खोजने के स्थान',
    'Getting There': 'कैसे पहुंचें',
    'Trip Planner': 'यात्रा योजनाकार',
    'Local Flavours': 'स्थानीय स्वाद',
    'Where to Rest': 'आराम कहाँ करें',
    'Traveller Stories': 'यात्रियों की कहानियां',
    'Stay Safe, Travel Smart': 'सुरक्षित रहें, समझदारी से यात्रा करें',
    'dest.tag.1': 'सूरज · रेत · समुद्र',
    'dest.tag.2': 'ऊँची चोटियाँ · मठ',
    'dest.tag.3': 'बर्फ · साहसिक · घाटियाँ',
    'dest.tag.4': 'बैकवाटर · मसाला · शांति',
    'dest.tag.5': 'महल · झील · शाहीपन',
    'dest.tag.6': 'पर्वत · मठ · धुंध',
    'dest.tag.7': 'नमक मरुस्थल · लोक कला · उत्सव',
    'dest.tag.8': 'जनजातियाँ · घाटियाँ · हॉर्नबिल',
    'dest.name.1': 'गोवा',
    'dest.name.2': 'लेह लद्दाख',
    'dest.name.3': 'मनाली',
    'dest.name.4': 'केरल',
    'dest.name.5': 'उदयपुर',
    'dest.name.6': 'सिक्किम',
    'dest.name.7': 'कच्छ',
    'dest.name.8': 'नगालैंड',
    'udaipur.hero.destination': '<em>शाही</em><br>उदयपुर',
    'page.title': 'SoloSafar — भारत आपका इंतजार कर रहा है',
    'Chat — SoloSafar': 'चैट — SoloSafar',
    'Welcome to the chat! Ask about the best time to visit any destination.': 'चैट में आपका स्वागत है! किसी भी गंतव्य पर जाने का सबसे अच्छा समय पूछें।',
    'I loved the peaceful mornings in Udaipur — the lakes are magical before sunrise.': 'मुझे उदयपुर की शांत सुबह बहुत पसंद आई — सूर्योदय से पहले झीलें जादुई लगती हैं।',
    'If you are going to Goa, rent a scooter and explore the quieter north beaches.': 'अगर आप गोवा जा रहे हैं, तो स्कूटर लें और उत्तर के शांत समुद्र तटों का अन्वेषण करें।',
    'Just now': 'अभी अभी',
    'gallery.title': 'SoloSafar Gallery',
    'gallery.meta': 'No. 01 · India Vol. 1',
    'gallery.credit': 'डिज़ाइन किया गया',
    'manifesto.one': 'अलग रास्ता अपनाएँ',
    'manifesto.two': 'निर्भय होकर यात्रा करें',
    'manifesto.three': 'भारत की खोज करें',
    'manifesto.four': 'अकेला पर कभी अकेला नहीं',
    'manifesto.five': '08 गंतव्य',
    'manifesto.six': 'बोलो तो सोलो',
  
    'dashboard.label': 'का सोलो डैशबोर्ड',
    'nav.tools': 'उपकरण',
    'nav.blog': 'ब्लॉग',
    'footer.destinations': 'गंतव्य',
    'planner.badge': 'यात्रा योजनाकार',
    'planner.modalTitle': 'अपना अगला यात्रा कार्यक्रम बनाएं',
    'planner.intro': 'अपना गंतव्य, यात्रा तिथियां और शैली चुनें। तुरंत दिन की योजना, बजट अनुमान पाएं और बाद के लिए सहेजें।',
    'planner.destinationLabel': 'गंतव्य',
    'planner.startDateLabel': 'शुरुआत की तारीख',
    'planner.endDateLabel': 'समाप्ति तारीख',
    'planner.styleLabel': 'यात्रा शैली',
    'planner.notesLabel': 'नोट्स',
    'planner.generateBtn': 'योजना बनाएं',
    'planner.viewSavedBtn': 'सहेजी यात्राएं देखें',
    'planner.shareBtn': 'साझा करें',
    'planner.summaryTitle': 'आपका यात्रा पूर्वावलोकन यहाँ दिखेगा।',
    'planner.summaryHint': 'गंतव्य की मुख्य बातें, बजट और दिन-दर-दिन यात्रा देखने के लिए योजना बनाएं।',
    'find.badge': 'यात्री खोजें',
    'find.modalTitle': 'साथी यात्रियों से जुड़ें',
    'find.intro': 'गंतव्य, तारीखों और रुचियों के अनुसार फ़िल्टर करें। मिलने, योजनाएं साझा करने या एक साथ यात्रा करने के लिए तैयार यात्रियों को खोजें।',
    'find.destinationLabel': 'गंतव्य',
    'find.startDateLabel': 'यात्रा से',
    'find.endDateLabel': 'यात्रा तक',
    'find.interestLabel': 'रुचि',
    'journal.badge': 'यात्रा डायरी',
    'journal.modalTitle': 'अपने अनुभव दर्ज करें',
    'journal.intro': 'एक जगह अपनी यात्रा के नोट्स, मूड और यादें सहेजें।',
    'journal.dateLabel': 'तारीख',
    'journal.titleLabel': 'प्रविष्टि शीर्षक',
    'journal.moodLabel': 'मनोदशा',
    'journal.entryLabel': 'प्रविष्टि',
    'journal.visibilityLabel': 'दृश्यता',
    'journal.authorLabel': 'लेखक नाम',
    'journal.locationLabel': 'स्थान',
    'journal.searchLabel': 'प्रविष्टियां खोजें',
    'journal.saveBtn': 'प्रविष्टि सहेजें',
    'journal.viewBtn': 'प्रविष्टियां देखें',
    'journal.exportBtn': 'निर्यात करें',
    'journal.clearBtn': 'सभी हटाएं',
    'journal.summaryTitle': 'डायरी का अवलोकन',
    'journal.summaryHint': 'अपने विचार सहेजें और नवीनतम प्रविष्टियां देखें।',
    'budget.badge': 'बजट ट्रैक करें',
    'budget.modalTitle': 'अपने खर्चों की निगरानी करें',
    'budget.intro': 'लागत दर्ज करें, श्रेणियों की तुलना करें और यात्रा के दौरान बजट पर नजर रखें।',
    'budget.dateLabel': 'तारीख',
    'budget.categoryLabel': 'श्रेणी',
    'budget.amountLabel': 'राशि',
    'budget.goalLabel': 'बजट लक्ष्य',
    'budget.filterLabel': 'फ़िल्टर करें',
    'budget.noteLabel': 'नोट',
    'budget.setGoalBtn': 'लक्ष्य निर्धारित करें',
    'budget.addBtn': 'खर्च जोड़ें',
    'budget.exportBtn': 'निर्यात करें',
    'budget.resetBtn': 'रीसेट करें',
    'budget.clearBtn': 'सभी हटाएं',
    'budget.summaryTitle': 'बजट सारांश',
    'budget.summaryHint': 'अपने खर्चों को ट्रैक करें और देखें कि पैसा कहां जा रहा है।',
    'budget.expenseDateLabel': 'खर्च की तारीख',
    'budget.amountInrLabel': 'राशि (INR)',
    'budget.tripGoalLabel': 'यात्रा बजट लक्ष्य (INR)',
    'budget.filterCategoryLabel': 'श्रेणी से फ़िल्टर',
    'budget.amountPlaceholder': 'राशि दर्ज करें',
    'budget.goalPlaceholder': 'अपना लक्ष्य बजट सेट करें',
    'budget.notePlaceholder': 'टैक्सी, भोजन, स्मृति चिन्ह, आदि',
    'budget.exportCsvBtn': 'CSV निर्यात',
    'planner.notesPlaceholder': 'प्राथमिकताएँ, दर्शनीय स्थान या विशेष नोट्स जोड़ें',
    'safety.namePlaceholder': 'मित्र, परिवार, स्थानीय संपर्क',
    'safety.relationPlaceholder': 'संबंध या भूमिका',
    'ui.transport': 'यातायात',
    'ui.food': 'भोजन',
    'ui.stay': 'ठहराव',
    'ui.activities': 'गतिविधियाँ',
    'ui.shopping': 'खरीदारी',
    'ui.all': 'सभी',
    'ui.comfort': 'आराम',
    'ui.luxury': 'लक्ज़री',
    'ui.budget': 'बजट',
    'ui.day': 'दिन',
    'ui.days': 'दिन',
    'safety.badge': 'सुरक्षा उपकरण',
    'safety.modalTitle': 'आपातकालीन संपर्क प्रबंधित करें',
    'safety.intro': 'अपने महत्वपूर्ण संपर्क पास रखें और यात्रा के लिए सुरक्षा जांच सूची देखें।',
    'safety.nameLabel': 'संपर्क नाम',
    'safety.phoneLabel': 'फ़ोन नंबर',
    'safety.relationLabel': 'संबंध',
    'safety.saveBtn': 'संपर्क सहेजें',
    'safety.tipsBtn': 'सुरक्षा सुझाव',
    'safety.callPoliceBtn': 'पुलिस को कॉल करें',
    'safety.callAmbulanceBtn': 'एम्बुलेंस को कॉल करें',
    'safety.sosBtn': 'आपातकालीन SOS',
    'safety.summaryTitle': 'सुरक्षा चेकलिस्ट',
    'safety.summaryHint': 'यात्रा के दौरान इन सुझावों को याद रखें।',
    'safety.checklistTitle': 'यात्रा पूर्व चेकलिस्ट',
    'safety.check1': 'परिवार के साथ अपना यात्रा कार्यक्रम साझा करें',
    'safety.check2': 'अपने दूतावास में पंजीकरण करें (विदेश यात्रा पर)',
    'safety.check3': 'आपातकालीन नंबर सहेजें',
    'safety.check4': 'यात्रा बीमा लें',
  },
  kn: {
    'nav.languageLabel': 'ಭಾಷೆ',
    'nav.destinations': 'ಗಮ್ಯಸ್ಥಾನಗಳು',
    'nav.feedback': 'ಪ್ರತಿಕ್ರಿಯೆ',
    'nav.chat': 'ಚಾಟ್',
    'nav.signOut': 'ಸೈನ್ ಔಟ್',
    'nav.back': 'ಹೋಂಗೆ ಮರಳಿ',
    'hero.title': 'ನೀವು ಎಲ್ಲಿಗೆ ಹೋಗುತ್ತೀರಿ? <br><span>ಭಾರತವನ್ನು ಅನ್ವೇಷಿಸಿ</span>',
    'hero.quote': '“ನಿಮ್ಮನ್ನು ಭೇಟಿಯಾಗಲು ಸಾಕಷ್ಟು ದೂರ ಪ್ರಯಾಣ ಮಾಡಿ.”',
    'marquee.tagline': 'ಸೋಲೋ ಸಫಾರ್ — ಪ್ರತಿ ನೋಟವೂ ಒಂದು ಕಥೆ.',
    'hero.tagline': 'ಒಬ್ಬೊಬ್ಬರಿಗಾಗಿ ಭಾರತವನ್ನು ಸುಲಭವಾಗಿ ಅನ್ವೇಷಿಸಿ.',
    'section.count': '08 ಗಮ್ಯಸ್ಥಾನಗಳು',
    'feature1.title': 'ಒಬ್ಬರಿಗಾಗಿ ರೂಪಿಸಲಾಗಿದೆ',
    'feature1.text': 'ಭಾರತದ ಸოლო ಪ್ರಯಾಣಕ್ಕೆ ಆರ್ಥಿಕತೆ, ಭದ್ರತೆ ಮತ್ತು ಸಂಪರ್ಕ.',
    'feature2.title': 'ನಿಜವಾದ ಅನುಭವಗಳು',
    'feature2.text': 'ಸ್ಥಳೀಯ ಆಹಾರ, ಗುಪ್ತ ತಾಣಗಳು, ಮತ್ತು असಲೀ ಭಾರತ.',
    'feature3.title': 'ಯೋಜನೆ ಮಾಡಿ, ಉಳಿಸಿ, ಹೊರಟಿರಿ',
    'feature3.text': 'ಪ್ರಯಾಣ ದಿನಾಂಕ ಬರೆಯಿರಿ, ತಕ್ಷಣದ ಬಜೆಟ್ ಪಡೆಯಿರಿ, ಮತ್ತು ಸೇವ್ ಮಾಡಿ.',
    'dashboard.title': 'ನಿಮ್ಮ ಸೋಲೋ ಪ್ರಯಾಣಕ್ಕಾಗಿ ಸಾಧನಗಳು',
    'dashboard.copy': 'ರಸ್ತೆಯಲ್ಲಿ ಯೋಜಿಸಲು, ಸಂಪರ್ಕಿಸಲು ಮತ್ತು ಸುರಕ್ಷಿತವಾಗಿ ಇರಲು ಅಗತ್ಯವಾದ ಎಲ್ಲವೂ.',
    'dashboard.ai.title': 'AI ಶಿಫಾರಸುಗಳು',
    'dashboard.ai.text': 'ವೈಯಕ್ತಿಕ ಗಮ್ಯಸ್ಥಾನ ಸಲಹೆಗಳನ್ನು ಪಡೆಯಿರಿ',
    'dashboard.plan.title': 'ಪ್ರವಾಸ ಯೋಜಿಸಿ',
    'dashboard.plan.text': 'ನಿಮ್ಮ ಮುಂದಿನ ಕಾರ್ಯಕ್ರಮ ರಚಿಸಿ',
    'dashboard.find.title': 'ಪ್ರಯಾಣಿಕರನ್ನು ಹುಡುಕಿ',
    'dashboard.find.text': 'ಸಹ ಸಾಹಸಿಗರೊಂದಿಗೆ ಸಂಪರ್ಕಿಸಿ',
    'dashboard.journal.title': 'ಪ್ರಯಾಣ ಡೈರಿ',
    'dashboard.journal.text': 'ನಿಮ್ಮ ಸಾಹಸಗಳನ್ನು ದಾಖಲಿಸಿ',
    'dashboard.budget.title': 'ಬಜೆಟ್ ಟ್ರ್ಯಾಕ್ ಮಾಡಿ',
    'dashboard.budget.text': 'ನಿಮ್ಮ ವೆಚ್ಚಗಳನ್ನು ನಿಗರಾನಿ ಮಾಡಿ',
    'dashboard.safety.title': 'ಸುರಕ್ಷತಾ ಸಾಧನಗಳು',
    'dashboard.safety.text': 'ತುರ್ತು ಸಂಪರ್ಕಗಳನ್ನು ನಿರ್ವಹಿಸಿ',
    'dashboard.card.action': 'ಅನ್ವೇಷಿಸಿ',
    'dashboard.note': 'ಸಾಧನ ಪೂರ್ವವೀಕ್ಷಣೆಗಾಗಿ ಕಾರ್ಡ್ ಟ್ಯಾಪ್ ಮಾಡಿ.',
    'footer.tagline': 'ಒೊಬ್ಬೊಳ್ಳುವುದಿಲ್ಲದೆ ಒಂದು ಸುಲಭ ಪ್ರಯಾಣ.',
    'footer.info': 'ಮಾಹಿತಿ',
    'chat.label': 'ಪ್ರಯಾಣಿಕರ ಚಾಟು',
    'chat.header': 'ಇತರ ಪ್ರವಾಸಿಗಳೊಂದಿಗೆ ಚಾಟ್ ಮಾಡಿ',
    'chat.text': 'ಸ್ಥಳೀಯ ಸಲಹೆಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಿ, ಹವಾಮಾನವನ್ನು ಕೇಳಿ, ಮತ್ತು ಭಾರತವನ್ನು ತಿಳಿದಿರಿ.',
    'chat.placeholder': 'ನಿಮ್ಮ ಸಂದೇಶವನ್ನು ಇಲ್ಲಿ ಬರೆಯಿರಿ...',
    'chat.sendButton': 'ಸಂದೇಶ ಕಳುಹಿಸಿ',
    'chat.note': 'ಸಂದೇಶಗಳು ನಿಮ್ಮ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಸ್ಥಳೀಯವಾಗಿ ಉಳಿಯುತ್ತವೆ.',
    'planner.title': 'ಪ್ರಯಾಣ ಯೋಜಕ',
    'planner.name': 'ನಿಮ್ಮ ಹೆಸರು',
    'planner.age': 'ವಯಸ್ಸು',
    'planner.days': 'ದಿನಗಳ ಸಂಖ್ಯೆ',
    'planner.date': 'ಪ್ರಯಾಣದ ದಿನಾಂಕ',
    'planner.saveBtn': 'ನನ್ನ ಟ್ರಿಪ್ ಸೇವ್ ಮಾಡಿ →',
    'review.shareHeading': 'ನಿಮ್ಮ ಕಥೆಯನ್ನು ಹಂಚಿಕೊಳ್ಳಿ',
    'review.placeholder': 'ನಿಮ್ಮ ಅನುಭವ ಹೇಗಿತ್ತು?',
    'review.button': 'ಸಮೀಕ್ಷೆ ಪೋಸ್ಟ್ ಮಾಡಿ →',
    'weather.label': 'ಹವಾಮಾನ ವರದಿ',
    'weather.title': 'ಈ ವಾರ',
    'safety.label': 'ಸುರಕ್ಷಿತವಾಗಿ ಇರಿಸಿಕೊಳ್ಳಿ, ಸ್ಮಾರ್ಟ್ ಆಗಿ ಪ್ರವಾಸ ಮಾಡಿರಿ',
    'goa.hero.eyebrow': 'Sun & Sand · Western Coast',
    'goa.hero.destination': 'ಸೂರ್ಯ ಕುಂಬನ<br>ಗೋವಾ',
    'goa.hero.tagline': 'ಆರೆಬಿಯನ್ ಸಮುದ್ರವು ಪೋರ್ಚುಗೀಸ್ ಮೋಡಿಯನ್ನು ಭೇಟಿ ಮಾಡುವ ಸ್ಥಳ — ಕಡಲತೀರಗಳು, ಬೆಸಿಲಿಕಾಗಳು ಮತ್ತು ಮರೆಯಲಾಗದ ಸೂರ್ಯಾಸ್ತಗಳು.',
    'goa.hero.stat.beaches': 'Beaches',
    'goa.hero.stat.perDay': 'Per Day',
    'goa.hero.stat.bestSeason': 'Best Season',
    'goa.section.intro.label': 'Coastal Jewel of India',
    'goa.section.intro.heading': 'ಗೋವಾ: ಕೇವಲ ಕಡಲತೀರಗಳಿಗಿಂತ ಹೆಚ್ಚು',
    'goa.section.intro.p1': 'ಅರೇಬಿಯನ್ ಸಮುದ್ರದ ಉದ್ದಕ್ಕೆ ನೆಲಗೊಂಡಿರುವ ಗೋವಾ, ಅತ್ಯದ್ಭುತ ಆತ್ಮವನ್ನು ಹೊಂದಿರುವ ಭಾರತದ ಸಿಕ್ಕ ರಾಜ್ಯವಾಗಿದೆ. ವಸಾಹತುಳಾದ ಪೋರ್ಚುಗೀಸ್ ವಾಸ್ತುಶಿಲ್ಪವು ಇತಿಹಾಸ, ಮಸಾಲೆ ಮತ್ತು ಸರ್ಫ್‌ನ ಆಕರ್ಷಕ ಮಿಶ್ರಣದಲ್ಲಿ ರೋಮಾಂಚಕ ದಿನಗಳನ್ನು ಪೂರೈಸುತ್ತದೆ.',
    'goa.section.intro.p2': 'ಬಾಗಾದ ಮಿನುಗುವ ಮರಳಿನಿಂದ ಹಿಡಿದು ಪವಿತ್ರ ಬೊಂ ಜೀಸಸ್ ಬಾಸಿಲಿಕದವರೆಗೆ, ಗೋವಾದ ಪ್ರತಿಯೊಂದು ಮೂಲೆಯೂ ಒಂದು ಬಹುಪರಿಮಾಣ ಕಥೆಯನ್ನು ಹೇಳುತ್ತದೆ. ಏಕಾಂಗಿಯ ಪ್ರಯಾಣಿಕರಿಗೆ ಇದು ಒಂದು ಸಂಪೂರ್ಣ ಕ್ಯಾನ್ವಸ್.',
    'goa.places.label': 'Places to Discover',
    'goa.place.baga': 'Baga Beach',
    'goa.place.anjuna': 'Anjuna Beach',
    'goa.place.dudhsagar': 'Dudhsagar Falls',
    'goa.place.basilica': 'Basilica of Bom Jesus',
    'goa.place.fort': 'Fort Aguada',
    'goa.map.label': 'Getting There',
    'goa.map.heading': 'Reaching Goa',
    'goa.map.p': 'Goa is well connected by air (Dabolim / Mopa Airport), rail (Madgaon & Thivim stations), and road via NH66. Internal travel is best done by renting a scooter.',
    'goa.budget.label': 'Estimated Budget',
    'goa.budget.sub': 'Based on ₹3000/day average',
    'goa.essentials.localFlavours': 'Local Flavours',
    'goa.essentials.whatToEat': 'What to Eat',
    'goa.food.fish.title': 'Goan Fish Curry',
    'goa.food.fish.desc': 'Coconut milk curry with local spices — the soul of Goan cuisine.',
    'goa.food.prawn.title': 'Prawn Balchão',
    'goa.food.prawn.desc': 'Fiery, tangy prawn pickle unique to Goan kitchens.',
    'goa.food.dessert.title': 'Bebinca',
    'goa.food.dessert.desc': 'Classic Goan layered dessert — rich, golden, irresistible.',
    'goa.stay.label': 'Where to Rest',
    'goa.stay.heading': 'Places to Stay',
    'goa.stay.zostel.title': 'Zostel Goa',
    'goa.stay.zostel.desc': 'Vibrant backpacker hostel with pool, great for meeting fellow solo travelers.',
    'goa.stay.beachside.title': 'Beachside Inn (Calangute)',
    'goa.stay.beachside.desc': 'Budget stay steps from the beach with all essential amenities.',
    'goa.review.item1': 'Goa solo was life-changing. The sunsets at Vagator are something else — met so many amazing people!',
    'goa.review.item2': 'Rented a scooter and explored every beach in 5 days. Budget-friendly if you eat local.',
    'goa.safety.title': 'Stay Safe, Travel Smart',
    'goa.safety.card1.title': 'Emergency Contacts',
    'goa.safety.card1.item1': 'Goa Police: +91-832-2424001',
    'goa.safety.card1.item2': 'Ambulance: 108',
    'goa.safety.card1.item3': 'Tourist Helpline: 1363',
    'goa.safety.card2.title': 'Beach Safety',
    'goa.safety.card2.item1': 'Swim only at flagged zones',
    'goa.safety.card2.item2': 'Avoid isolated beaches after dark',
    'goa.safety.card2.item3': 'Watch out for rip currents',
    'goa.safety.card3.title': 'Travel Tips',
    'goa.safety.card3.item1': 'Always lock your scooter',
    'goa.safety.card3.item2': 'Keep copies of your documents',
    'goa.safety.card3.item3': 'Stay hydrated — it gets very hot',
    'footer.allDestinations': 'All Destinations',
    'footer.contact': 'Contact',
    'footer.copyright': '© 2024 SoloSafar. ಎಲ್ಲಾ ಹಕ್ಕುಗಳು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.',
    'footer.soloNote': 'ಸೋಲೋ ಅನ್ವೇಷಕರಿಗಾಗಿ ♥ ಮನಸ್ಸಿನಿಂದ ಮಾಡಲಾಗಿದೆ',
    'English': 'ಇಂಗ್ಲಿಷ್',
    'SoloSafar': 'SoloSafar',
    'What to Eat': 'ಏನು ತಿನ್ನಬೇಕು',
    'Estimated Budget': 'ಅಂದಾಜು ಬಜೆಟ್',
    'Places to Stay': 'ನಿಲ್ಲಲು ಸ್ಥಳಗಳು',
    'Per Day': 'ಪ್ರತಿ ದಿನ',
    'Emergency Contacts': 'ತುರ್ತು ಸಂಪರ್ಕಗಳು',
    'Best Season': 'ಉತ್ತಮ ಋತು',
    'Weather Tips': 'ಹವಾಮಾನ ಸಲಹೆಗಳು',
    'Travel Tips': 'ಪ್ರಯಾಣ ಸಲಹೆಗಳು',
    'Sign In - SoloSafar': 'ಸೈನ್ ಇನ್ - SoloSafar',
    'Sign In to SoloSafar': 'SoloSafar ಗೆ ಸೈನ್ ಇನ್ ಮಾಡಿ',
    'Sign Up - Solo Traveler': 'ಸೈನ್ ಅಪ್ - Solo Traveler',
    'Sign Up to Solo Traveler': 'Solo Traveler ಗೆ ಸೈನ್ ಅಪ್ ಮಾಡಿ',
    'Email': 'ಇಮೇಲ್',
    'Password': 'ಪಾಸ್ವರ್ಡ್',
    'Confirm Password': 'ಪಾಸ್‌ವರ್ಡ್ ದೃಢೀಕರಿಸಿ',
    'Username': 'ಬಳಕೆದಾರ ಹೆಸರು',
    'Submit': 'ಸಲ್ಲಿಸು',
    'signin.pageTitle': 'ಸೈನ್ ಇನ್ - SoloSafar',
    'signin.heading': 'SoloSafar ಗೆ ಸೈನ್ ಇನ್ ಮಾಡಿ',
    'signin.emailLabel': 'ಇಮೇಲ್',
    'signin.passwordLabel': 'ಪಾಸ್ವರ್ಡ್',
    'signin.submit': 'ಸೈನ್ ಇನ್',
    'signin.signupLink': 'ಖಾತೆ ಇಲ್ಲವೇ? ಇಲ್ಲಿ ಸೈನ್ ಅಪ್ ಮಾಡಿ',
    'signup.pageTitle': 'ಸೈನ್ ಅಪ್ - Solo Traveler',
    'signup.heading': 'Solo Traveler ಗೆ ಸೈನ್ ಅಪ್ ಮಾಡಿ',
    'signup.usernameLabel': 'ಬಳಕೆದಾರ ಹೆಸರು',
    'signup.emailLabel': 'ಇಮೇಲ್',
    'signup.passwordLabel': 'ಪಾಸ್ವರ್ಡ್',
    'signup.confirmPasswordLabel': 'ಪಾಸ್‌ವರ್ಡ್ ದೃಢೀಕರಿಸಿ',
    'signup.submit': 'ಸೈನ್ ಅಪ್',
    'signup.backToSignIn': 'ಇಲ್ಲಿಂದ ಸೈನ್ ಇನ್‌ಗೆ ಮರಳಿ',
    'feedback.pageTitle': 'ಪ್ರತಿಕ್ರಿಯೆ',
    'feedback.heading': 'ಪ್ರತಿಕ್ರಿಯೆ',
    'feedback.namePlaceholder': 'ನಿಮ್ಮ ಹೆಸರು',
    'feedback.feedbackPlaceholder': 'ನಿಮ್ಮ ಪ್ರತಿಕ್ರಿಯೆ',
    'feedback.submit': 'ಸಲ್ಲಿಸು',
    'Sign In': 'ಸೈನ್ ಇನ್',
    'Sign Up': 'ಸೈನ್ ಅಪ್',
    'Your feedback': 'ನಿಮ್ಮ ಪ್ರತಿಕ್ರಿಯೆ',
    "Don't have an account? Sign up here": 'ಖಾತೆ ಇಲ್ಲವೇ? ಇಲ್ಲಿ ಸೈನ್ ಅಪ್ ಮಾಡಿ',
    'Back to Sign in here': 'ಇಲ್ಲಿಂದ ಸೈನ್ ಇನ್‌ಗೆ ಮರಳಿ',
    'Coastal Jewel of India': 'ಭಾರತದ ತೀರದ ರತ್ನ',
    'Places to Discover': 'ಅನ್ವೇಷಿಸಲು ಸ್ಥಳಗಳು',
    'Getting There': 'ಅಲ್ಲಿ ಹೇಗೆ ತಲುಪುವುದು',
    'Trip Planner': 'ಪ್ರಯಾಣ ಯೋಜಕ',
    'Local Flavours': 'ಸ್ಥಳೀಯ ರುಚಿಗಳು',
    'Where to Rest': 'ವಿಶ್ರಾಂತಿ ಎಲ್ಲಿ',
    'Traveller Stories': 'ಪ್ರಯಾಣಿಕರ ಕಥೆಗಳು',
    'Stay Safe, Travel Smart': 'ಸುರಕ್ಷಿತವಾಗಿರಿ, ಬುದ್ಧಿವಂತಿಕೆಯಿಂದ ಪ್ರಯಾಣ ಮಾಡಿ',
    'dest.tag.1': 'ಸೂರ್ಯ · ಮರಳು · ಸಮುದ್ರ',
    'dest.tag.2': 'ಉತ್ತರದ ಪರ್ವತಗಳು · ಮಠಗಳು',
    'dest.tag.3': 'ಹಿಮ · ಸಾಹಸ · ಕಣಿವೆಗಳು',
    'dest.tag.4': 'ಬ್ಯಾಕ್ವಾಟರ್ · ಮಸಾಲೆ · ಶಾಂತಿ',
    'dest.tag.5': 'ಅರಮನೆಗಳು · ಸರೋವರಗಳು · ರಾಜಕೀಯ',
    'dest.tag.6': 'ಪರ್ವತಗಳು · ಮಠಗಳು · ಹೊಗೆ',
    'dest.tag.7': 'ಉಪ್ಪು ಮರುಭೂಮಿ · ಜನರ ಕಲಾ · ಹಬ್ಬಗಳು',
    'dest.tag.8': 'ಜಾತಿಗಳು · ಕಣಿವೆಗಳು · ಹಾರ್ನ್‌ಬಿಲ್',

    'dest.name.1': 'ಗೋವಾ',
    'dest.name.2': 'ಲೇಹ್ ಲಡಾಕ್',
    'dest.name.3': 'ಮನಾಲಿ',
    'dest.name.4': 'ಕೇರಳ',
    'dest.name.5': 'ಉದಯಪುರ',
    'dest.name.6': 'ಸಿಕ್ಕಿಂ',
    'dest.name.7': 'ಕಚ್ಛ',
    'dest.name.8': 'ನಾಗಾಲ್ಯಾಂಡ್',
    'udaipur.hero.destination': '<em>ರಾಯಲ್</em><br>ಉದಯಪುರ',
    'page.title': 'SoloSafar — ಭಾರತ ಕರೆಗೆ ಕಾಯುತ್ತದೆ',
    'Chat — SoloSafar': 'ಚಾಟ್ — SoloSafar',
    'Welcome to the chat! Ask about the best time to visit any destination.': 'ಚಾಟ್‌ಗೆ ಸ್ವಾಗತ! ಯಾವುದೇ ಗಮ್ಯಸ್ಥಾನದ ಭೇಟಿಗೆ ಉತ್ತಮ ಸಮಯ ಯಾವುದು ಎಂದು ಕೇಳಿ.',
    'I loved the peaceful mornings in Udaipur — the lakes are magical before sunrise.': 'ನಾನು ಉದಯಪುರದ ಶಾಂತವಾದ ಬೆಳಗಾಗಲೊಂದರಲ್ಲಿ ಅಚ್ಚರಿಯಾಯಿತು — ಸರೋವರಗಳು ಸೂರ್ಯಾಸ್ತಕ್ಕೂ ಮೊದಲು ಮಂತ್ರಮುಗ್ಧವಾಗಿವೆ.',
    'If you are going to Goa, rent a scooter and explore the quieter north beaches.': 'ನೀವು ಗೋವಾ ಹೋಗುತ್ತಿರುವರೆ, ಸ್ಕೂಟರ್ ಬಾಡಿಗೆಗೆ ಪಡೆದು ಶಾಂತ ಉತ್ತರ ಕಡಲತೀರಗಳನ್ನು ಅನ್ವೇಷಿಸಿ.',
    'Just now': 'ಇದೀಗ',
    'gallery.title': 'SoloSafar Gallery',
    'gallery.meta': 'No. 01 · India Vol. 1',
    'gallery.credit': 'ರಚನೆ ಮಾಡಿದವರು',
    'manifesto.one': 'ಅಲಭ್ಯ ಮಾರ್ಗಕ್ಕೆ ಹೋಗಿ',
    'manifesto.two': 'ಭಯವಿಲ್ಲದೆ ಪ್ರಯಾಣಿಸಿ',
    'manifesto.three': 'ಭಾರತವನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ',
    'manifesto.four': 'ಒಂಟಿಯಾಗಿದ್ದರೂ ಒಂಟಿರೋದು ಇಲ್ಲ',
    'manifesto.five': '08 ಗಮ್ಯಸ್ಥಾನಗಳು',
    'manifesto.six': 'ಬೋಲೋ ಹೊ ಮಾತನಾಡಿ ಸೋಲೋ',
  
    'dashboard.label': 'ನಿಮ್ಮ ಸೋಲೋ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
    'nav.tools': 'ಸಾಧನಗಳು',
    'nav.blog': 'ಬ್ಲಾಗ್',
    'footer.destinations': 'ಗಮ್ಯಸ್ಥಾನಗಳು',
    'planner.badge': 'ಪ್ರಯಾಣ ಯೋಜಕ',
    'planner.modalTitle': 'ನಿಮ್ಮ ಮುಂದಿನ ಕಾರ್ಯಕ್ರಮ ರಚಿಸಿ',
    'planner.intro': 'ನಿಮ್ಮ ಗಮ್ಯಸ್ಥಾನ, ಪ್ರಯಾಣ ದಿನಾಂಕ ಮತ್ತು ಶೈಲಿ ಆರಿಸಿ. ತಕ್ಷಣದ ದಿನ ಯೋಜನೆ ಮತ್ತು ಬಜೆಟ್ ಅಂದಾಜು ಪಡೆಯಿರಿ.',
    'planner.destinationLabel': 'ಗಮ್ಯಸ್ಥಾನ',
    'planner.startDateLabel': 'ಆರಂಭ ದಿನಾಂಕ',
    'planner.endDateLabel': 'ಅಂತ್ಯ ದಿನಾಂಕ',
    'planner.styleLabel': 'ಪ್ರಯಾಣ ಶೈಲಿ',
    'planner.notesLabel': 'ಟಿಪ್ಪಣಿಗಳು',
    'planner.generateBtn': 'ಯೋಜನೆ ರಚಿಸಿ',
    'planner.viewSavedBtn': 'ಉಳಿಸಿದ ಪ್ರಯಾಣಗಳನ್ನು ನೋಡಿ',
    'planner.shareBtn': 'ಹಂಚಿಕೊಳ್ಳಿ',
    'planner.summaryTitle': 'ನಿಮ್ಮ ಪ್ರಯಾಣ ಪೂರ್ವವೀಕ್ಷಣೆ ಇಲ್ಲಿ ಕಾಣಿಸುತ್ತದೆ.',
    'planner.summaryHint': 'ಗಮ್ಯಸ್ಥಾನದ ಮುಖ್ಯಾಂಶಗಳು, ಬಜೆಟ್ ಮತ್ತು ದಿನ-ದಿನದ ಯೋಜನೆ ನೋಡಲು ಯೋಜನೆ ರಚಿಸಿ.',
    'find.badge': 'ಪ್ರಯಾಣಿಕರನ್ನು ಹುಡುಕಿ',
    'find.modalTitle': 'ಸಹ ಸಾಹಸಿಗರೊಂದಿಗೆ ಸಂಪರ್ಕಿಸಿ',
    'find.intro': 'ಗಮ್ಯಸ್ಥಾನ, ದಿನಾಂಕ ಮತ್ತು ಆಸಕ್ತಿಗಳ ಮೂಲಕ ಫಿಲ್ಟರ್ ಮಾಡಿ.',
    'find.destinationLabel': 'ಗಮ್ಯಸ್ಥಾನ',
    'find.startDateLabel': 'ಪ್ರಯಾಣ ಆರಂಭ',
    'find.endDateLabel': 'ಪ್ರಯಾಣ ಅಂತ್ಯ',
    'find.interestLabel': 'ಆಸಕ್ತಿ',
    'journal.badge': 'ಪ್ರಯಾಣ ಡೈರಿ',
    'journal.modalTitle': 'ನಿಮ್ಮ ಸಾಹಸಗಳನ್ನು ದಾಖಲಿಸಿ',
    'journal.intro': 'ನಿಮ್ಮ ಯಾತ್ರೆಯ ಟಿಪ್ಪಣಿಗಳು, ಮನೋಭಾವ ಮತ್ತು ನೆನಪುಗಳನ್ನು ಒಂದೆಡೆ ಉಳಿಸಿ.',
    'journal.dateLabel': 'ದಿನಾಂಕ',
    'journal.titleLabel': 'ಶೀರ್ಷಿಕೆ',
    'journal.moodLabel': 'ಮನೋಭಾವ',
    'journal.entryLabel': 'ನಮೂದು',
    'journal.visibilityLabel': 'ಗೋಚರತೆ',
    'journal.authorLabel': 'ಲೇಖಕ ಹೆಸರು',
    'journal.locationLabel': 'ಸ್ಥಳ',
    'journal.searchLabel': 'ನಮೂದುಗಳನ್ನು ಹುಡುಕಿ',
    'journal.saveBtn': 'ನಮೂದು ಉಳಿಸಿ',
    'journal.viewBtn': 'ನಮೂದುಗಳನ್ನು ನೋಡಿ',
    'journal.exportBtn': 'ರಫ್ತು ಮಾಡಿ',
    'journal.clearBtn': 'ಎಲ್ಲ ಅಳಿಸಿ',
    'journal.summaryTitle': 'ಡೈರಿ ಸಾರಾಂಶ',
    'journal.summaryHint': 'ನಿಮ್ಮ ಆಲೋಚನೆಗಳನ್ನು ಉಳಿಸಿ ಮತ್ತು ಇತ್ತೀಚಿನ ನಮೂದುಗಳನ್ನು ನೋಡಿ.',
    'budget.badge': 'ಬಜೆಟ್ ಟ್ರ್ಯಾಕ್',
    'budget.modalTitle': 'ನಿಮ್ಮ ವೆಚ್ಚಗಳನ್ನು ನಿಗರಾನಿ ಮಾಡಿ',
    'budget.intro': 'ವೆಚ್ಚ ದಾಖಲಿಸಿ, ವಿಭಾಗಗಳನ್ನು ಹೋಲಿಸಿ ಮತ್ತು ಪ್ರಯಾಣದ ಸಮಯ ಬಜೆಟ್ ಮೇಲ್ವಿಚಾರಿಸಿ.',
    'budget.dateLabel': 'ದಿನಾಂಕ',
    'budget.categoryLabel': 'ವಿಭಾಗ',
    'budget.amountLabel': 'ಮೊತ್ತ',
    'budget.goalLabel': 'ಬಜೆಟ್ ಗುರಿ',
    'budget.filterLabel': 'ಫಿಲ್ಟರ್ ಮಾಡಿ',
    'budget.noteLabel': 'ಟಿಪ್ಪಣಿ',
    'budget.setGoalBtn': 'ಗುರಿ ಹೊಂದಿಸಿ',
    'budget.addBtn': 'ವೆಚ್ಚ ಸೇರಿಸಿ',
    'budget.exportBtn': 'ರಫ್ತು ಮಾಡಿ',
    'budget.resetBtn': 'ಮರುಹೊಂದಿಸಿ',
    'budget.clearBtn': 'ಎಲ್ಲ ಅಳಿಸಿ',
    'budget.summaryTitle': 'ಬಜೆಟ್ ಸಾರಾಂಶ',
    'budget.summaryHint': 'ನಿಮ್ಮ ಖರ್ಚನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ ಮತ್ತು ಹಣ ಎಲ್ಲಿ ಹೋಗುತ್ತಿದೆ ನೋಡಿ.',
    'safety.badge': 'ಸುರಕ್ಷತಾ ಸಾಧನಗಳು',
    'safety.modalTitle': 'ತುರ್ತು ಸಂಪರ್ಕಗಳನ್ನು ನಿರ್ವಹಿಸಿ',
    'safety.intro': 'ನಿಮ್ಮ ಮುಖ್ಯ ಸಂಪರ್ಕಗಳನ್ನು ಹತ್ತಿರ ಇಟ್ಟುಕೊಳ್ಳಿ ಮತ್ತು ಪ್ರಮುಖ ಸುರಕ್ಷತಾ ತಪಾಸಣೆಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.',
    'safety.nameLabel': 'ಸಂಪರ್ಕ ಹೆಸರು',
    'safety.phoneLabel': 'ಫೋನ್ ಸಂಖ್ಯೆ',
    'safety.relationLabel': 'ಸಂಬಂಧ',
    'safety.saveBtn': 'ಸಂಪರ್ಕ ಉಳಿಸಿ',
    'safety.tipsBtn': 'ಸುರಕ್ಷತಾ ಸಲಹೆಗಳು',
    'safety.callPoliceBtn': 'ಪೊಲೀಸ್ ಕರೆ ಮಾಡಿ',
    'safety.callAmbulanceBtn': 'ಅಂಬ್ಯುಲೆನ್ಸ್ ಕರೆ ಮಾಡಿ',
    'safety.sosBtn': 'ತುರ್ತು SOS',
    'safety.summaryTitle': 'ಸುರಕ್ಷತಾ ಪರಿಶೀಲನಾ ಪಟ್ಟಿ',
    'safety.summaryHint': 'ಪ್ರಯಾಣದ ಸಮಯ ಈ ಸಲಹೆಗಳನ್ನು ನೆನಪಿನಲ್ಲಿ ಇಟ್ಟುಕೊಳ್ಳಿ.',
    'safety.checklistTitle': 'ಪ್ರಯಾಣ ಪೂರ್ವ ಪರಿಶೀಲನಾ ಪಟ್ಟಿ',
    'safety.check1': 'ಕುಟುಂಬದೊಂದಿಗೆ ನಿಮ್ಮ ಕಾರ್ಯಕ್ರಮ ಹಂಚಿಕೊಳ್ಳಿ',
    'safety.check2': 'ನಿಮ್ಮ ರಾಯಭಾರ ಕಚೇರಿಯಲ್ಲಿ ನೋಂದಣಿ ಮಾಡಿ (ವಿದೇಶ ಪ್ರಯಾಣದಲ್ಲಿ)',
    'safety.check3': 'ತುರ್ತು ಸಂಖ್ಯೆಗಳನ್ನು ಉಳಿಸಿ',
    'safety.check4': 'ಪ್ರಯಾಣ ವಿಮೆ ಪಡೆಯಿರಿ',
  },
  ta: {
    'nav.languageLabel': 'மொழி',
    'nav.destinations': 'இடங்கள்',
    'nav.feedback': 'கருத்து',
    'nav.chat': 'அரட்டை',
    'nav.signOut': 'வெளியேறு',
    'nav.back': 'மீண்டும் வீடு',
    'hero.title': 'நீங்கள் எங்கு செல்லப்போகிறீர்கள்? <br><span>இந்தியாவை கண்டறியவும்</span>',
    'hero.quote': '“உங்களை சந்திக்க போதுமான தூரம் பயணம் செய்யுங்கள்.”',
    'marquee.tagline': 'சோலோ சஃபார் — ஒவ்வொரு பார்வையும் ஒரு கதை.',
    'hero.tagline': 'தனியாக பயணிக்க இந்தியாவை எளிமையாக அனுபவியுங்கள்.',
    'section.count': '08 இடங்கள்',
    'feature1.title': 'தனியர் பயணிகளுக்காக',
    'feature1.text': 'பட்ஜெட், பாதுகாப்பு, தொடர்புகள் — இந்தியா சோலோ பயணத்திற்கு.',
    'feature2.title': 'உண்மை அனுபவங்கள்',
    'feature2.text': 'உள்ளூரின உணவு, மறைந்த தளங்கள் மற்றும் உண்மையான இந்தியா.',
    'feature3.title': 'திட்டமிடவும், சேமிக்கவும், செல்லவும்',
    'feature3.text': 'பயண தேதிகளை உள்ளிடுங்கள், உடனடி பட்ஜெட்டை பெறுங்கள், பயணத்தை சேமிக்கவும்.',
    'dashboard.title': 'உங்கள் சோலோ பயணத்திற்கான கருவிகள்',
    'dashboard.copy': 'திட்டமிட, இணைக்க, பாதுகாப்பாக இருக்க வேண்டியதெல்லாம்.',
    'dashboard.ai.title': 'AI பரிந்துரைகள்',
    'dashboard.ai.text': 'தனிப்பட்ட இடப் பரிந்துரைகளை பெறுங்கள்',
    'dashboard.plan.title': 'பயணம் திட்டமிடுங்கள்',
    'dashboard.plan.text': 'உங்கள் அடுத்த பயண அட்டவணையை உருவாக்குங்கள்',
    'dashboard.find.title': 'பயணிகளை கண்டறியுங்கள்',
    'dashboard.find.text': 'சக சாகசர்களுடன் இணையுங்கள்',
    'dashboard.journal.title': 'பயண நாட்குறிப்பு',
    'dashboard.journal.text': 'உங்கள் சாகசங்களை பதிவு செய்யுங்கள்',
    'dashboard.budget.title': 'பட்ஜெட் கண்காணிக்கவும்',
    'dashboard.budget.text': 'உங்கள் செலவுகளை கண்காணிக்கவும்',
    'dashboard.safety.title': 'பாதுகாப்பு கருவிகள்',
    'dashboard.safety.text': 'அவசர தொடர்புகளை நிர்வகிக்கவும்',
    'dashboard.card.action': 'ஆராயுங்கள்',
    'dashboard.note': 'கருவியை முன்னோட்டமிட கார்டை தட்டவும்.',
    'footer.tagline': 'தனியாகவும், எளிதாகவும் பயணம் செய்யுங்கள்.',
    'chat.label': 'பயணிகள் வாய்மொழி',
    'chat.header': 'மற்ற பயணிகளுடன் உரையாடவும்',
    'chat.text': 'உள்ளூரான ஆலோசனைகளை பகிரவும், காலநிலையை கேளுங்கள், இந்தியா பற்றி பகிரவும்.',
    'chat.placeholder': 'உங்கள் செய்தியை இங்கே எழுதவும்...',
    'chat.sendButton': 'செய்தியை அனுப்பவும்',
    'chat.note': 'செய்திகள் உங்கள் உலாவியில் உள்ளூர் முறையில் சேமிக்கப்படும்.',
    'planner.title': 'பயண திட்டம்',
    'planner.name': 'உங்கள் பெயர்',
    'planner.age': 'வயது',
    'planner.days': 'நாட்கள் எண்ணிக்கை',
    'planner.date': 'பயண தேதி',
    'planner.saveBtn': 'என் பயணத்தை சேமிக்கவும் →',
    'review.shareHeading': 'உங்கள் கதை பகிரவும்',
    'review.placeholder': 'உங்கள் அனுபவம் எப்படி இருந்தது?',
    'review.button': 'விமர்சனத்தை இடுகை செய்யவும் →',
    'weather.label': 'வருவாய் அறிக்கை',
    'weather.title': 'இந்த வாரம்',
    'safety.label': 'பாதுகாப்பாக இரு, புத்தியாக பயணம் செய்',
    'goa.hero.eyebrow': 'Sun & Sand · Western Coast',
    'goa.hero.destination': 'சூரிய முத்தமிட்ட கோவா',
    'goa.hero.tagline': 'அரேபியக் கடல் போர்த்துகீஸ் அழகோடு சங்கமிக்கும் இடம் — கடற்கரைகள், பேராலயங்கள் மற்றும் மறக்க முடியாத சூரியாஸ்தமங்கள்.',
    'goa.hero.stat.beaches': 'Beaches',
    'goa.hero.stat.perDay': 'Per Day',
    'goa.hero.stat.bestSeason': 'Best Season',
    'goa.section.intro.label': 'Coastal Jewel of India',
    'goa.section.intro.heading': 'கோவா: வெறும் கடற்கரைகள் மட்டுமல்ல',
    'goa.section.intro.p1': 'அரேபியக் கடலோரத்தில் அமைந்துள்ள கோவா, மிகப்பெரிய ஆன்மாவைக் கொண்ட இந்தியாவின் மிகச்சிறிய மாநிலமாகும். காலனித்துவ போர்த்துகீஸ் வாஸ்துகலை, வரலாறு, மசாலா மற்றும் சுற்றுலா கலந்த அமைப்பில் வாழ்க்கையை ஒரு சாகசமான அனுபவமாக மாற்றுகிறது.',
    'goa.section.intro.p2': 'பாகாவின் மின்னும் மணல் முதல் பாம் ஜீசஸ் பாசிலிக்காவுவரை, கோவாவின் ஒவ்வொரு மூளையும் ஒரு பல பரிமாணக் கதையை சொல்கிறது. ஒரே பயணிகளுக்க இது ஒரு சரியான கான்வாஸ்.',
    'goa.places.label': 'Places to Discover',
    'goa.place.baga': 'Baga Beach',
    'goa.place.anjuna': 'Anjuna Beach',
    'goa.place.dudhsagar': 'Dudhsagar Falls',
    'goa.place.basilica': 'Basilica of Bom Jesus',
    'goa.place.fort': 'Fort Aguada',
    'goa.map.label': 'Getting There',
    'goa.map.heading': 'Reaching Goa',
    'goa.map.p': 'Goa is well connected by air (Dabolim / Mopa Airport), rail (Madgaon & Thivim stations), and road via NH66. Internal travel is best done by renting a scooter.',
    'goa.budget.label': 'Estimated Budget',
    'goa.budget.sub': 'Based on ₹3000/day average',
    'goa.essentials.localFlavours': 'Local Flavours',
    'goa.essentials.whatToEat': 'What to Eat',
    'goa.food.fish.title': 'Goan Fish Curry',
    'goa.food.fish.desc': 'Coconut milk curry with local spices — the soul of Goan cuisine.',
    'goa.food.prawn.title': 'Prawn Balchão',
    'goa.food.prawn.desc': 'Fiery, tangy prawn pickle unique to Goan kitchens.',
    'goa.food.dessert.title': 'Bebinca',
    'goa.food.dessert.desc': 'Classic Goan layered dessert — rich, golden, irresistible.',
    'goa.stay.label': 'Where to Rest',
    'goa.stay.heading': 'Places to Stay',
    'goa.stay.zostel.title': 'Zostel Goa',
    'goa.stay.zostel.desc': 'Vibrant backpacker hostel with pool, great for meeting fellow solo travelers.',
    'goa.stay.beachside.title': 'Beachside Inn (Calangute)',
    'goa.stay.beachside.desc': 'Budget stay steps from the beach with all essential amenities.',
    'goa.review.item1': 'Goa solo was life-changing. The sunsets at Vagator are something else — met so many amazing people!',
    'goa.review.item2': 'Rented a scooter and explored every beach in 5 days. Budget-friendly if you eat local.',
    'goa.safety.title': 'Stay Safe, Travel Smart',
    'goa.safety.card1.title': 'Emergency Contacts',
    'goa.safety.card1.item1': 'Goa Police: +91-832-2424001',
    'goa.safety.card1.item2': 'Ambulance: 108',
    'goa.safety.card1.item3': 'Tourist Helpline: 1363',
    'goa.safety.card2.title': 'Beach Safety',
    'goa.safety.card2.item1': 'Swim only at flagged zones',
    'goa.safety.card2.item2': 'Avoid isolated beaches after dark',
    'goa.safety.card2.item3': 'Watch out for rip currents',
    'goa.safety.card3.title': 'Travel Tips',
    'goa.safety.card3.item1': 'Always lock your scooter',
    'goa.safety.card3.item2': 'Keep copies of your documents',
    'goa.safety.card3.item3': 'Stay hydrated — it gets very hot',
    'footer.allDestinations': 'All Destinations',
    'footer.contact': 'Contact',
    'footer.copyright': '© 2024 SoloSafar. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
    'footer.soloNote': 'ஒருகோன்று ஆராய்ச்சியாளர்களுக்காக ♥ கொண்டுள்ளது',
    'English': 'ஆங்கிலம்',
    'SoloSafar': 'SoloSafar',
    'What to Eat': 'என்ன சாப்பிடுவது',
    'Estimated Budget': 'அனுமதிக்கப்பட்ட பட்ஜெட்',
    'Places to Stay': 'தங்கும் இடங்கள்',
    'Per Day': 'ஒரு நாளுக்கு',
    'Emergency Contacts': 'அவசர தொடர்புகள்',
    'Best Season': 'சிறந்த பருவம்',
    'Weather Tips': 'காலநிலை குறிப்புகள்',
    'Travel Tips': 'பயண குறிப்புகள்',
    'Sign In - SoloSafar': 'உள்நுழைய - SoloSafar',
    'Sign In to SoloSafar': 'SoloSafar-க்கு உள்நுழையவும்',
    'Sign Up - Solo Traveler': 'பதிவு செய் - Solo Traveler',
    'Sign Up to Solo Traveler': 'Solo Traveler-க்கு பதிவு செய்க',
    'Email': 'மின்னஞ்சல்',
    'Password': 'கடவுச்சொல்',
    'Confirm Password': 'கடவுச்சொல்லை உறுதி செய்க',
    'Username': 'பயனர் பெயர்',
    'Submit': 'சமர்ப்பிக்கவும்',
    'signin.pageTitle': 'உள்நுழைய - SoloSafar',
    'signin.heading': 'SoloSafar-க்கு உள்நுழையவும்',
    'signin.emailLabel': 'மின்னஞ்சல்',
    'signin.passwordLabel': 'கடவுச்சொல்',
    'signin.submit': 'உள்நுழை',
    'signin.signupLink': 'கணக்கு இல்லைவா? இங்கு பதிவு செய்யவும்',
    'signup.pageTitle': 'பதிவு செய் - Solo Traveler',
    'signup.heading': 'Solo Traveler-க்கு பதிவு செய்க',
    'signup.usernameLabel': 'பயனர் பெயர்',
    'signup.emailLabel': 'மின்னஞ்சல்',
    'signup.passwordLabel': 'கடவுச்சொல்',
    'signup.confirmPasswordLabel': 'கடவுச்சொல்லை உறுதி செய்க',
    'signup.submit': 'பதிவு செய்',
    'signup.backToSignIn': 'இங்கிருந்து உள்நுழைவுக்கு திரும்பவும்',
    'feedback.pageTitle': 'கருத்துக்களைப் பகிர்',
    'feedback.heading': 'கருத்துக்களைப் பகிர்',
    'feedback.namePlaceholder': 'உங்கள் பெயர்',
    'feedback.feedbackPlaceholder': 'உங்கள் கருத்து',
    'feedback.submit': 'சமர்ப்பிக்கவும்',
    'Sign In': 'உள்நுழை',
    'Sign Up': 'பதிவு செய்',
    'Your feedback': 'உங்கள் கருத்து',
    "Don't have an account? Sign up here": 'கணக்கு இல்லைவா? இங்கு பதிவு செய்யவும்',
    'Back to Sign in here': 'இங்கிருந்து உள்நுழைவுக்கு திரும்பவும்',
    'Coastal Jewel of India': 'இந்தியாவின் கடற்கரை ரத்தினம்',
    'Places to Discover': 'கண்டறிய வேண்டிய இடங்கள்',
    'Getting There': 'அங்கே எப்படி செல்லவும்',
    'Trip Planner': 'பயண திட்டம்',
    'Local Flavours': 'உள்ளூரின் சுவைகள்',
    'Where to Rest': 'எங்கே ஓய்வெடுக்கலாம்',
    'Traveller Stories': 'பயணிகள் கதைகள்',
    'Stay Safe, Travel Smart': 'பாதுகாப்பாக இருங்கள், புத்திசாலித்தனமாக பயணம் செய்யுங்கள்',
    'dest.tag.1': 'சூரியன் · மணல் · கடல்',
    'dest.tag.2': 'உயரமான மலைகள் · மடங்கள்',
    'dest.tag.3': 'பனி · சாகசம் · பள்ளத்தாக்குகள்',
    'dest.tag.4': 'பின்வெள்ளங்கள் · மசாலா · அமைதி',
    'dest.tag.5': 'அரண்மனை · ஏரிகள் · ராஜோபமன்',
    'dest.tag.6': 'மலைகள் · மடங்கள் · மூடுபனி',
    'dest.tag.7': 'உப்பு மருதனம் · மக்கள் கலை · திருவிழாக்கள்',
    'dest.tag.8': 'குலங்கள் · பள்ளத்தாக்குகள் · ஹார்ன்பில்',

    'dest.name.1': 'கோவா',
    'dest.name.2': 'லே லடாக்',
    'dest.name.3': 'மணாலி',
    'dest.name.4': 'கேரளா',
    'dest.name.5': 'உதய்பூர்',
    'dest.name.6': 'சிக்கிம்',
    'dest.name.7': 'கச்சு',
    'dest.name.8': 'நாகாலாந்து',
    'udaipur.hero.destination': '<em>ராயல்</em><br>உதய்பூர்',
    'page.title': 'SoloSafar — இந்தியா காத்துக் கொண்டிருக்கிறது',
    'Chat — SoloSafar': 'அரட்டை — SoloSafar',
    'Welcome to the chat! Ask about the best time to visit any destination.': 'அரட்டையில் வரவேற்கிறோம்! எந்த இடத்தைப் பற்றி எப்போது செல்ல வேண்டும் என்று கேளுங்கள்.',
    'I loved the peaceful mornings in Udaipur — the lakes are magical before sunrise.': 'உதயபுருவின் அமைதியான காலை அனைத்தும் நான் விரும்பினேன் — சூரிய உதயம் முன்னதாக ஏரிகள் மாயமானவை.',
    'If you are going to Goa, rent a scooter and explore the quieter north beaches.': 'நீங்கள் கோவாவுக்கு செல்கிறீர்கள் என்றால், ஒரு ஸ்கூட்டரை வாடகைக்கு எடுத்துக் கொண்டு அமைதியான வடக்கு கடற்கரை பகுதிகளை ஆராயுங்கள்.',
    'Just now': 'இப்போது',
    'gallery.title': 'SoloSafar Gallery',
    'gallery.meta': 'No. 01 · India Vol. 1',
    'gallery.credit': 'வடிவமைத்தவர்',
    'manifesto.one': 'பாதையைவிடிச் செலு',
    'manifesto.two': 'பயப்படாமல் பயணம் செய்',
    'manifesto.three': 'இந்தியாவை கண்டறி',
    'manifesto.four': 'தனியாக் போகினாலும் ஒரை இல்ல',
    'manifesto.five': '08 இடங்கள்',
    'manifesto.six': 'போலோ தோ சோலோ',
    'dashboard.label': 'உங்கள் சோலோ டாஷ்போர்டு',
    'nav.tools': 'கருவிகள்',
    'nav.blog': 'வலைப்பதிவு',
    'footer.destinations': 'இடங்கள்',
    'planner.badge': 'பயண திட்டமிடுபவர்',
    'planner.modalTitle': 'உங்கள் அடுத்த பயண அட்டவணையை உருவாக்குங்கள்',
    'planner.intro': 'உங்கள் இடம், பயண தேதிகள் மற்றும் பாணியை தேர்ந்தெடுங்கள். உடனடி தினசரி திட்டம் மற்றும் பட்ஜெட் மதிப்பீடு பெறுங்கள்.',
    'planner.destinationLabel': 'இடம்',
    'planner.startDateLabel': 'தொடக்க தேதி',
    'planner.endDateLabel': 'முடிவு தேதி',
    'planner.styleLabel': 'பயண பாணி',
    'planner.notesLabel': 'குறிப்புகள்',
    'planner.generateBtn': 'திட்டம் உருவாக்கவும்',
    'planner.viewSavedBtn': 'சேமித்த பயணங்களை பார்க்கவும்',
    'planner.shareBtn': 'பகிர்வு',
    'planner.summaryTitle': 'உங்கள் பயண முன்னோட்டம் இங்கே தோன்றும்.',
    'planner.summaryHint': 'இடத்தின் முக்கிய அம்சங்கள், பட்ஜெட் மற்றும் தினசரி பயணத்தை பார்க்க திட்டம் உருவாக்கவும்.',
    'find.badge': 'பயணிகளை கண்டறியுங்கள்',
    'find.modalTitle': 'சக சாகசர்களுடன் இணையுங்கள்',
    'find.intro': 'இடம், தேதிகள் மற்றும் ஆர்வங்களால் வடிகட்டவும்.',
    'find.destinationLabel': 'இடம்',
    'find.startDateLabel': 'பயணம் தொடங்கும் நாள்',
    'find.endDateLabel': 'பயணம் முடியும் நாள்',
    'find.interestLabel': 'ஆர்வம்',
    'journal.badge': 'பயண நாட்குறிப்பு',
    'journal.modalTitle': 'உங்கள் சாகசங்களை பதிவு செய்யுங்கள்',
    'journal.intro': 'உங்கள் பயண குறிப்புகள், மனநிலை மற்றும் நினைவுகளை ஒரே இடத்தில் பதிவு செய்யுங்கள்.',
    'journal.dateLabel': 'தேதி',
    'journal.titleLabel': 'பதிவின் தலைப்பு',
    'journal.moodLabel': 'மனநிலை',
    'journal.entryLabel': 'பதிவு',
    'journal.visibilityLabel': 'காட்சி',
    'journal.authorLabel': 'ஆசிரியர் பெயர்',
    'journal.locationLabel': 'இடம்',
    'journal.searchLabel': 'பதிவுகளை தேடவும்',
    'journal.saveBtn': 'பதிவு சேமிக்கவும்',
    'journal.viewBtn': 'பதிவுகளை பார்க்கவும்',
    'journal.exportBtn': 'ஏற்றுமதி',
    'journal.clearBtn': 'அனைத்தையும் அழிக்கவும்',
    'journal.summaryTitle': 'நாட்குறிப்பு சுருக்கம்',
    'journal.summaryHint': 'உங்கள் சிந்தனைகளை சேமித்து சமீபத்திய பதிவுகளை பாருங்கள்.',
    'budget.badge': 'பட்ஜெட் கண்காணிப்பு',
    'budget.modalTitle': 'உங்கள் செலவுகளை கண்காணிக்கவும்',
    'budget.intro': 'செலவுகளை பதிவு செய்யுங்கள், பிரிவுகளை ஒப்பிடுங்கள்.',
    'budget.dateLabel': 'தேதி',
    'budget.categoryLabel': 'பிரிவு',
    'budget.amountLabel': 'தொகை',
    'budget.goalLabel': 'பட்ஜெட் இலக்கு',
    'budget.filterLabel': 'வடிகட்டவும்',
    'budget.noteLabel': 'குறிப்பு',
    'budget.setGoalBtn': 'இலக்கு நிர்ணயிக்கவும்',
    'budget.addBtn': 'செலவு சேர்க்கவும்',
    'budget.exportBtn': 'ஏற்றுமதி',
    'budget.resetBtn': 'மீட்டமைக்கவும்',
    'budget.clearBtn': 'அனைத்தையும் அழிக்கவும்',
    'budget.summaryTitle': 'பட்ஜெட் சுருக்கம்',
    'budget.summaryHint': 'உங்கள் செலவுகளை கண்காணித்து பணம் எங்கு செல்கிறது என பாருங்கள்.',
    'safety.badge': 'பாதுகாப்பு கருவிகள்',
    'safety.modalTitle': 'அவசர தொடர்புகளை நிர்வகிக்கவும்',
    'safety.intro': 'உங்கள் முக்கியமான தொடர்புகளை அருகில் வையுங்கள்.',
    'safety.nameLabel': 'தொடர்பு பெயர்',
    'safety.phoneLabel': 'தொலைபேசி எண்',
    'safety.relationLabel': 'உறவு',
    'safety.saveBtn': 'தொடர்பை சேமிக்கவும்',
    'safety.tipsBtn': 'பாதுகாப்பு குறிப்புகள்',
    'safety.callPoliceBtn': 'காவல்துறையை அழைக்கவும்',
    'safety.callAmbulanceBtn': 'ஆம்புலன்ஸ் அழைக்கவும்',
    'safety.sosBtn': 'அவசர SOS',
    'safety.summaryTitle': 'பாதுகாப்பு சரிபார்ப்பு பட்டியல்',
    'safety.summaryHint': 'பயணத்தின் போது இந்த குறிப்புகளை மனதில் வையுங்கள்.',
    'safety.checklistTitle': 'பயண முன் சரிபார்ப்பு பட்டியல்',
    'safety.check1': 'குடும்பத்தினரிடம் உங்கள் பயண அட்டவணையை பகிர்ந்து கொள்ளுங்கள்',
    'safety.check2': 'உங்கள் தூதரகத்தில் பதிவு செய்யுங்கள் (வெளிநாட்டில் பயணிக்கும்போது)',
    'safety.check3': 'அவசர தொடர்பு எண்களை சேமிக்கவும்',
    'safety.check4': 'பயண காப்பீடு எடுக்கவும்',
  },
  te: {
    'nav.languageLabel': 'భాష',
    'nav.destinations': 'గమ్యస్థానాలు',
    'nav.feedback': 'ప్రతిస్పందన',
    'nav.chat': 'చాట్',
    'nav.signOut': 'సైన్ అవుట్',
    'nav.back': 'వీరుకి తిరిగి',
    'hero.title': 'మీరు ఎక్కడికి వెళ్తున్నారు? <br><span>భారతాన్ని అన్వేషించండి</span>',
    'hero.quote': '“మిమ్మల్ని కలుసుకోవడానికి చాలా దూరం ప్రయాణించండి.”',
    'marquee.tagline': 'సోలో సఫార్ — ప్రతి దృశ్యం ఒక కథ.',
    'hero.tagline': 'సోలోగా భారతదేశాన్ని సులభంగా అన్వేషించండి.',
    'section.count': '08 గమ్యస్థానాలు',
    'feature1.title': 'సోలో ప్రయాణులకు',
    'feature1.text': 'బడ్జెట్, భద్రత, మరియు సంబంధిత సమాచారం — భారతదేశానికి ప్రత్యేకంగా.',
    'feature2.title': 'నిజమైన అనుభవాలు',
    'feature2.text': 'స్థానిక ఆహారం, దాగిన ప్రదేశాలు, నిజమైన భారత్.',
    'feature3.title': 'తయారు చేసుకోండి, సేవ్ చేయండి, వెళ్లండి',
    'feature3.text': 'మీ ప్రయాణ తేదీలు నమోదు చేసండి, తక్షణ బడ్జెట్ పొందండి.',
    'dashboard.title': 'మీ సోలో ప్రయాణానికి సాధనాలు',
    'dashboard.copy': 'రోడ్‌లో ప్లాన్ చేయడానికి, కనెక్ట్ అవ్వడానికి మరియు సురక్షితంగా ఉండటానికి అవసరమైనదంతా.',
    'dashboard.ai.title': 'AI సిఫారసులు',
    'dashboard.ai.text': 'వ్యక్తిగత గమ్యస్థాన సూచనలు పొందండి',
    'dashboard.plan.title': 'ప్రయాణం ప్లాన్ చేయండి',
    'dashboard.plan.text': 'మీ తదుపరి ఇటినెరరీ రూపొందించండి',
    'dashboard.find.title': 'ప్రయాణికులను వెతకండి',
    'dashboard.find.text': 'సహ సాహసకారులతో కనెక్ట్ అవ్వండి',
    'dashboard.journal.title': 'ప్రయాణ జర్నల్',
    'dashboard.journal.text': 'మీ సాహసాలను నమోదు చేయండి',
    'dashboard.budget.title': 'బడ్జెట్ ట్రాక్ చేయండి',
    'dashboard.budget.text': 'మీ ఖర్చులను పర్యవేక్షించండి',
    'dashboard.safety.title': 'భద్రతా సాధనాలు',
    'dashboard.safety.text': 'అత్యవసర సంప్రదింపులను నిర్వహించండి',
    'dashboard.card.action': 'అన్వేషించండి',
    'dashboard.note': 'సాధనాన్ని ప్రివ్యూ చేయడానికి కార్డ్ ట్యాప్ చేయండి.',
    'footer.tagline': 'సోలోగా సులభంగా ప్రయాణించండి.',
    'footer.info': 'సమాచారం',
    'chat.label': 'ప్రయాణికుల చాట్',
    'chat.header': 'ఇతర ప్రయాణీకులతో చాట్ చేయండి',
    'chat.text': 'స్థానిక టిప్‌లు పంచుకోండి, వాతావరణం గురించి అడగండి.',
    'chat.placeholder': 'మీ సందేశాన్ని ఇక్కడ రాయండి...',
    'chat.sendButton': 'సందేశాన్ని పంపండి',
    'chat.note': 'సందేశాలు మీ బ్రౌజర్‌లో స్థానికంగా నిల్వ ఉంటాయి.',
    'planner.title': 'ప్రయాణ ప్లానర్',
    'planner.name': 'మీ పేరు',
    'planner.age': 'వయస్సు',
    'planner.days': 'రోజుల సంఖ్య',
    'planner.date': 'ప్రయాణ తేదీ',
    'planner.saveBtn': 'నా ప్రయాణాన్ని సేవ్ చేయండి →',
    'review.shareHeading': 'మీ కథను పంచుకోండి',
    'review.placeholder': 'మీ అనుభవం ఎలా ఉంది?',
    'review.button': 'సమీక్ష పోస్ట్ చేయండి →',
    'weather.label': 'వాతావరణ నివేదిక',
    'weather.title': 'ఈ వారంలో',
    'safety.label': 'ధడిమగా ఉండండి, తెలివిగా ప్రయాణించండి',
    'goa.hero.eyebrow': 'Sun & Sand · Western Coast',
    'goa.hero.destination': 'సూర్యకిరణాల సుప్రసంతో నిండిన గోవా',
    'goa.hero.tagline': 'అరేబియా సముద్రం, పోర్చుగీస్ ఆకర్షణ కలిసే చోటు — బీచులు, బాసిలికాలు, మరియు మరపురాని సూర్యాస్తమయాలు.',
    'goa.hero.stat.beaches': 'Beaches',
    'goa.hero.stat.perDay': 'Per Day',
    'goa.hero.stat.bestSeason': 'Best Season',
    'goa.section.intro.label': 'Coastal Jewel of India',
    'goa.section.intro.heading': 'గోవా: బీచులు మాత్రమే కాదు',
    'goa.section.intro.p1': 'అరేబియా సముద్ర తీరంలో ఉన్న గోవా, భారతదేశపు అతి చిన్న రాష్ట్రం అయినప్పటికీ గొప్ప ఆత్మ కలిగిఉంది. కాలనీ పోర్చుగీస్ వాస్తవశిల్పం చరిత్ర, సుగന്ധ ద్రవ్యాలు మరియు సర్ఫింగ్ కలిసిన అద్భుతమైన అనుభవాన్ని పుట్టిస్తుంది.',
    'goa.section.intro.p2': 'బాగాకు మెరుస్తున్న ఇసుక నుండి పవిత్ర బామ్ జీసస్ బాసిలిక వరకు, గోవా ప్రతి మూలా ఒక బహుళ కథను చెబుతుంది. ఒంటరి ప్రయాణికుల కోసం ఇది ఒక సంపూర్ణ కాన్వాస్.',
    'goa.places.label': 'Places to Discover',
    'goa.place.baga': 'Baga Beach',
    'goa.place.anjuna': 'Anjuna Beach',
    'goa.place.dudhsagar': 'Dudhsagar Falls',
    'goa.place.basilica': 'Basilica of Bom Jesus',
    'goa.place.fort': 'Fort Aguada',
    'goa.map.label': 'Getting There',
    'goa.map.heading': 'Reaching Goa',
    'goa.map.p': 'Goa is well connected by air (Dabolim / Mopa Airport), rail (Madgaon & Thivim stations), and road via NH66. Internal travel is best done by renting a scooter.',
    'goa.budget.label': 'Estimated Budget',
    'goa.budget.sub': 'Based on ₹3000/day average',
    'goa.essentials.localFlavours': 'Local Flavours',
    'goa.essentials.whatToEat': 'What to Eat',
    'goa.food.fish.title': 'Goan Fish Curry',
    'goa.food.fish.desc': 'Coconut milk curry with local spices — the soul of Goan cuisine.',
    'goa.food.prawn.title': 'Prawn Balchão',
    'goa.food.prawn.desc': 'Fiery, tangy prawn pickle unique to Goan kitchens.',
    'goa.food.dessert.title': 'Bebinca',
    'goa.food.dessert.desc': 'Classic Goan layered dessert — rich, golden, irresistible.',
    'goa.stay.label': 'Where to Rest',
    'goa.stay.heading': 'Places to Stay',
    'goa.stay.zostel.title': 'Zostel Goa',
    'goa.stay.zostel.desc': 'Vibrant backpacker hostel with pool, great for meeting fellow solo travelers.',
    'goa.stay.beachside.title': 'Beachside Inn (Calangute)',
    'goa.stay.beachside.desc': 'Budget stay steps from the beach with all essential amenities.',
    'goa.review.item1': 'Goa solo was life-changing. The sunsets at Vagator are something else — met so many amazing people!',
    'goa.review.item2': 'Rented a scooter and explored every beach in 5 days. Budget-friendly if you eat local.',
    'goa.safety.title': 'Stay Safe, Travel Smart',
    'goa.safety.card1.title': 'Emergency Contacts',
    'goa.safety.card1.item1': 'Goa Police: +91-832-2424001',
    'goa.safety.card1.item2': 'Ambulance: 108',
    'goa.safety.card1.item3': 'Tourist Helpline: 1363',
    'goa.safety.card2.title': 'Beach Safety',
    'goa.safety.card2.item1': 'Swim only at flagged zones',
    'goa.safety.card2.item2': 'Avoid isolated beaches after dark',
    'goa.safety.card2.item3': 'Watch out for rip currents',
    'goa.safety.card3.title': 'Travel Tips',
    'goa.safety.card3.item1': 'Always lock your scooter',
    'goa.safety.card3.item2': 'Keep copies of your documents',
    'goa.safety.card3.item3': 'Stay hydrated — it gets very hot',
    'footer.allDestinations': 'All Destinations',
    'footer.contact': 'Contact',
    'footer.copyright': '© 2024 SoloSafar. అన్ని హక్కులు పరిరక్షించబడ్డవి.',
    'footer.soloNote': 'సోలో అన్వేషకుల కోసం ♥ తో తయారుచేయబడింది',
    'English': 'ఇంగ్లిష్',
    'SoloSafar': 'SoloSafar',
    'What to Eat': 'ఏం తినాలి',
    'Estimated Budget': 'అంచనా ఖర్చు',
    'Places to Stay': 'నిద్రించడానికి చోటు',
    'Per Day': 'ప్రతి రోజు',
    'Emergency Contacts': 'తప్పనిసరిగా సంప్రదించాల్సినవాళ్లు',
    'Best Season': 'ఉత్తమ కాలం',
    'Weather Tips': 'వాతావరణ సూచనలు',
    'Travel Tips': 'ప్రయాణ సూచనలు',
    'Sign In - SoloSafar': 'సైన్ ఇన్ - SoloSafar',
    'Sign In to SoloSafar': 'SoloSafar లో సైన్ ఇన్ చేయండి',
    'Sign Up - Solo Traveler': 'సైన్ అప్ - Solo Traveler',
    'Sign Up to Solo Traveler': 'Solo Traveler కు సైన్ అప్ చేయండి',
    'Email': 'ఇమెయిల్',
    'Password': 'పాస్‌వర్డ్',
    'Confirm Password': 'పాస్‌వర్డ్ నిర్ధారించండి',
    'Username': 'వాడుకరి పేరు',
    'Submit': 'సదరంచేయండి',
    'signin.pageTitle': 'సైన్ ఇన్ - SoloSafar',
    'signin.heading': 'SoloSafar లో సైన్ ఇన్ చేయండి',
    'signin.emailLabel': 'ఇమెయిల్',
    'signin.passwordLabel': 'పాస్‌వర్డ్',
    'signin.submit': 'సైన్ ఇన్',
    'signin.signupLink': 'ఖాతా లేదు? ఇక్కడ సైన్ అప్ చేయండి',
    'signup.pageTitle': 'సైన్ అప్ - Solo Traveler',
    'signup.heading': 'Solo Traveler కు సైన్ అప్ చేయండి',
    'signup.usernameLabel': 'వాడుకరి పేరు',
    'signup.emailLabel': 'ఇమెయిల్',
    'signup.passwordLabel': 'పాస్‌వర్డ్',
    'signup.confirmPasswordLabel': 'పాస్‌వర్డ్ నిర్ధారించండి',
    'signup.submit': 'సైన్ అప్',
    'signup.backToSignIn': 'ఇక్కడ నుండి సైన్ ఇన్ కు తిరిగి వెళ్ళు',
    'feedback.pageTitle': 'ఫీడ్‌బ్యాక్',
    'feedback.heading': 'ఫీడ్‌బ్యాక్',
    'feedback.namePlaceholder': 'మీ పేరు',
    'feedback.feedbackPlaceholder': 'మీ అభిప్రాయం',
    'feedback.submit': 'సదరంచేయండి',
    'Sign In': 'సైన్ ఇన్',
    'Sign Up': 'సైన్ అప్',
    'Your feedback': 'మీ అభిప్రాయం',
    "Don't have an account? Sign up here": 'ఖాతా లేదు? ఇక్కడ సైన్ అప్ చేయండి',
    'Back to Sign in here': 'ఇక్కడ నుండి సైన్ ఇన్ కు తిరిగి వెళ్ళు',
    'Coastal Jewel of India': 'భారత తీర రత్నం',
    'Places to Discover': 'అన్వేషించాల్సిన చోట్లు',
    'Getting There': 'అక్కడ ఎలా చేరుకోవాలి',
    'Trip Planner': 'ప్రయాణ ప్రణాళిక',
    'Local Flavours': 'స్థానిక రుచులు',
    'Where to Rest': 'ఎక్కడ విశ్రాంతి తీసుకోవాలి',
    'Traveller Stories': 'ప్రయాణికుల కథలు',
    'Stay Safe, Travel Smart': 'సురక్షితంగా ఉండు, తెలివిగా ప్రయాణించు',
    'dest.tag.1': 'సూర్యుడు · ఇసుక · సముద్రం',
    'dest.tag.2': 'ఎత్తైన పర్వతాలు · మఠాలు',
    'dest.tag.3': 'మంచు · సాహసం · లోయలు',
    'dest.tag.4': 'బ్యాక్వాటర్ · మసాలా · ప్రశాంతత',
    'dest.tag.5': 'మహాలయాలు · సరస్సులు · రాజకీయం',
    'dest.tag.6': 'పర్వతాలు · మఠాలు · పొగ',
    'dest.tag.7': 'ఉప్పు వనరులు · ప్రజా కళ · పండగలు',
    'dest.tag.8': 'గిరిజనులు · లోయలు · హార్న్‌బిల్',

    'dest.name.1': 'గోవా',
    'dest.name.2': 'లే లడాఖ్',
    'dest.name.3': 'మనాలి',
    'dest.name.4': 'కేరళ',
    'dest.name.5': 'ఉదయపూర్',
    'dest.name.6': 'సిక్కిం',
    'dest.name.7': 'కచ్ఛ్',
    'dest.name.8': 'నాగాలాండ్',
    'udaipur.hero.destination': '<em>రాయల్</em><br>ఉదయపూర్',
    'page.title': 'SoloSafar — భారత్ ఎదురు చూడటుంది',
    'gallery.title': 'SoloSafar Gallery',
    'gallery.meta': 'No. 01 · India Vol. 1',
    'gallery.credit': 'రూపకల్పన చేసినవారు',
    'manifesto.one': 'ఆఫ్‌బీట్‌కి వెళ్లండి',
    'manifesto.two': 'భయమ లేకుండా ప్రయాణించండి',
    'manifesto.three': 'భారతాన్ని కనుగొనండి',
    'manifesto.four': 'సోలో అయినా ఒంటరిగా లేరు',
    'manifesto.five': '08 గమ్యస్థానాలు',
    'manifesto.six': 'బోలో టో సోలో',
  
    'dashboard.label': 'మీ సోలో డాష్‌బోర్డ్',
    'nav.tools': 'సాధనాలు',
    'nav.blog': 'బ్లాగ్',
    'footer.destinations': 'గమ్యస్థానాలు',
    'planner.badge': 'ప్రయాణ ప్లానర్',
    'planner.modalTitle': 'మీ తదుపరి ఇటినెరరీ రూపొందించండి',
    'planner.intro': 'మీ గమ్యస్థానం, ప్రయాణ తేదీలు మరియు శైలిని ఎంచుకోండి. తక్షణ రోజువారీ ప్లాన్ మరియు బడ్జెట్ అంచనా పొందండి.',
    'planner.destinationLabel': 'గమ్యస్థానం',
    'planner.startDateLabel': 'ప్రారంభ తేదీ',
    'planner.endDateLabel': 'ముగింపు తేదీ',
    'planner.styleLabel': 'ప్రయాణ శైలి',
    'planner.notesLabel': 'నోట్సు',
    'planner.generateBtn': 'ప్లాన్ రూపొందించండి',
    'planner.viewSavedBtn': 'సేవ్ చేసిన ప్రయాణాలు చూడండి',
    'planner.shareBtn': 'షేర్ చేయండి',
    'planner.summaryTitle': 'మీ ప్రయాణ ప్రివ్యూ ఇక్కడ కనిపిస్తుంది.',
    'planner.summaryHint': 'గమ్యస్థాన హైలైట్లు, బడ్జెట్ మరియు రోజువారీ ప్లాన్ చూడటానికి ప్లాన్ రూపొందించండి.',
    'find.badge': 'ప్రయాణికులను వెతకండి',
    'find.modalTitle': 'సహ సాహసకారులతో కనెక్ట్ అవ్వండి',
    'find.intro': 'గమ్యస్థానం, తేదీలు మరియు ఆసక్తుల ద్వారా ఫిల్టర్ చేయండి.',
    'find.destinationLabel': 'గమ్యస్థానం',
    'find.startDateLabel': 'ప్రయాణం నుండి',
    'find.endDateLabel': 'ప్రయాణం వరకు',
    'find.interestLabel': 'ఆసక్తి',
    'journal.badge': 'ప్రయాణ జర్నల్',
    'journal.modalTitle': 'మీ సాహసాలను నమోదు చేయండి',
    'journal.intro': 'మీ ప్రయాణ నోట్సు, మూడ్లు మరియు జ్ఞాపకాలను ఒకే చోట సేవ్ చేయండి.',
    'journal.dateLabel': 'తేదీ',
    'journal.titleLabel': 'ఎంట్రీ శీర్షిక',
    'journal.moodLabel': 'మూడ్',
    'journal.entryLabel': 'ఎంట్రీ',
    'journal.visibilityLabel': 'దృశ్యమానత',
    'journal.authorLabel': 'రచయిత పేరు',
    'journal.locationLabel': 'స్థానం',
    'journal.searchLabel': 'ఎంట్రీలు వెతకండి',
    'journal.saveBtn': 'ఎంట్రీ సేవ్ చేయండి',
    'journal.viewBtn': 'ఎంట్రీలు చూడండి',
    'journal.exportBtn': 'ఎగుమతి',
    'journal.clearBtn': 'అన్నీ తొలగించండి',
    'journal.summaryTitle': 'జర్నల్ సారాంశం',
    'journal.summaryHint': 'మీ ఆలోచనలు సేవ్ చేసి తాజా ఎంట్రీలు చూడండి.',
    'budget.badge': 'బడ్జెట్ ట్రాకర్',
    'budget.modalTitle': 'మీ ఖర్చులను పర్యవేక్షించండి',
    'budget.intro': 'ఖర్చులు నమోదు చేయండి, వర్గాలు పోల్చండి.',
    'budget.dateLabel': 'తేదీ',
    'budget.categoryLabel': 'వర్గం',
    'budget.amountLabel': 'మొత్తం',
    'budget.goalLabel': 'బడ్జెట్ లక్ష్యం',
    'budget.filterLabel': 'ఫిల్టర్ చేయండి',
    'budget.noteLabel': 'నోట్',
    'budget.setGoalBtn': 'లక్ష్యం నిర్ధారించండి',
    'budget.addBtn': 'ఖర్చు జోడించండి',
    'budget.exportBtn': 'ఎగుమతి',
    'budget.resetBtn': 'రీసెట్',
    'budget.clearBtn': 'అన్నీ తొలగించండి',
    'budget.summaryTitle': 'బడ్జెట్ సారాంశం',
    'budget.summaryHint': 'మీ వ్యయాలను ట్రాక్ చేయండి.',
    'safety.badge': 'భద్రతా సాధనాలు',
    'safety.modalTitle': 'అత్యవసర సంప్రదింపులను నిర్వహించండి',
    'safety.intro': 'మీ ముఖ్యమైన సంప్రదింపులు దగ్గర ఉంచండి.',
    'safety.nameLabel': 'సంప్రదింపు పేరు',
    'safety.phoneLabel': 'ఫోన్ నంబర్',
    'safety.relationLabel': 'సంబంధం',
    'safety.saveBtn': 'సంప్రదింపు సేవ్ చేయండి',
    'safety.tipsBtn': 'భద్రతా చిట్కాలు',
    'safety.callPoliceBtn': 'పోలీసులకు కాల్ చేయండి',
    'safety.callAmbulanceBtn': 'అంబులెన్స్ కాల్ చేయండి',
    'safety.sosBtn': 'అత్యవసర SOS',
    'safety.summaryTitle': 'భద్రతా చెక్‌లిస్ట్',
    'safety.summaryHint': 'ప్రయాణంలో ఈ చిట్కాలు మనసులో ఉంచుకోండి.',
    'safety.checklistTitle': 'ప్రయాణ ముందు చెక్‌లిస్ట్',
    'safety.check1': 'కుటుంబంతో మీ ఇటినెరరీ పంచుకోండి',
    'safety.check2': 'మీ రాయబారి కార్యాలయంలో నమోదు చేయండి',
    'safety.check3': 'అత్యవసర నంబర్లు సేవ్ చేయండి',
    'safety.check4': 'ప్రయాణ బీమా తీసుకోండి',
  },
  ml: {
    'nav.languageLabel': 'ഭാഷ',
    'nav.destinations': 'ഗമ്യസ്ഥലങ്ങൾ',
    'nav.feedback': 'പ്രതികരണം',
    'nav.chat': 'ചാറ്റ്',
    'nav.signOut': 'സൈൻ ഔട്ട്',
    'nav.back': 'വീട്ടിലേക്ക് തിരിച്ചുവരിക',
    'hero.title': 'നീ എവിടെ പോകുകയാണ്? <br><span>ഇന്ത്യയെ കണ്ടെത്തൂ</span>',
    'hero.quote': '“നിങ്ങളെ കണ്ടുമുട്ടാൻ മതിയായ ദൂരം യാത്ര ചെയ്യുക.”',
    'marquee.tagline': 'സോളോ സഫാർ — ഓരോ കാഴ്ചയും ഒരു കഥ.',
    'hero.tagline': 'ഒരു യാത്രയിൽ ഇന്ത്യയെ എളുപ്പത്തിൽ അനുഭവിക്കുക.',
    'section.count': '08 ഡെസ്റ്റിനേഷൻ',
    'feature1.title': 'ഒറ്റയാൾ യാത്രക്കാർക്കായി',
    'feature1.text': 'ബഡ്‌ജറ്റ്, സുരക്ഷ, ബന്ധങ്ങൾ — ഇന്ത്യയിലെ സോളോ യാത്രയ്ക്കായി.',
    'feature2.title': 'യാഥാർത്ഥ്യ അനുഭവങ്ങൾ',
    'feature2.text': 'പ്രാദേശിക ഭക്ഷണം, മറഞ്ഞിടങ്ങൾ, സത്യമാർന്ന ഇന്ത്യ.',
    'feature3.title': 'പരിപാടി തയ്യാറാക്കൂ, സേവ് ചെയ്യൂ, പോകൂ',
    'feature3.text': 'യാത്രാ തിയ്യതികൾ നൽകുക, ഉടനെ ബഡ്‌ജറ്റ് നേടുക, സേവ് ചെയ്യുക.',
    'dashboard.title': 'നിങ്ങളുടെ സോളോ യാത്രയ്ക്കുള്ള ഉപകരണങ്ങൾ',
    'dashboard.copy': 'ആസൂത്രണം ചെയ്യാനും ബന്ധം സ്ഥാപിക്കാനും സുരക്ഷിതമായി ഇരിക്കാനും ആവശ്യമായതെല്ലാം.',
    'dashboard.ai.title': 'AI ശുപാർശകൾ',
    'dashboard.ai.text': 'വ്യക്തിഗത ലക്ഷ്യസ്ഥാന നിർദ്ദേശങ്ങൾ നേടുക',
    'dashboard.plan.title': 'യാത്ര ആസൂത്രണം ചെയ്യൂ',
    'dashboard.plan.text': 'നിങ്ങളുടെ അടുത്ത ഇറ്റിനററി ഉണ്ടാക്കൂ',
    'dashboard.find.title': 'യാത്രികരെ കണ്ടെത്തൂ',
    'dashboard.find.text': 'സഹ സാഹസികരുമായി ബന്ധം സ്ഥാപിക്കൂ',
    'dashboard.journal.title': 'യാത്രാ ഡയറി',
    'dashboard.journal.text': 'നിങ്ങളുടെ സാഹസങ്ങൾ രേഖപ്പെടുത്തൂ',
    'dashboard.budget.title': 'ബഡ്ജറ്റ് ട്രാക്ക് ചെയ്യൂ',
    'dashboard.budget.text': 'നിങ്ങളുടെ ചെലവുകൾ നിരീക്ഷിക്കൂ',
    'dashboard.safety.title': 'സുരക്ഷാ ഉപകരണങ്ങൾ',
    'dashboard.safety.text': 'അടിയന്തര ബന്ധങ്ങൾ നിയന്ത്രിക്കൂ',
    'dashboard.card.action': 'അന്വേഷിക്കൂ',
    'dashboard.note': 'ടൂൾ പ്രിവ്യൂ ചെയ്യാൻ കാർഡ് ടാപ്പ് ചെയ്യൂ.',
    'footer.tagline': 'ഒറ്റക്കല്ലാതെ പൊക്കേയും യാത്ര ചെയ്യൂ.',
    'footer.info': 'വിവരം',
    'chat.label': 'യാത്രക്കാരുടെ ചാറ്റ്',
    'chat.header': 'മതിലുകൾക്കൊപ്പം അഭിസംബോധനം ചെയ്യുക',
    'chat.text': 'പ്രാദേശിക ടിപ്പുകൾ പങ്കുവെക്കൂ, കാലാവസ്ഥ ചോദിച്ചോളൂ.',
    'chat.placeholder': 'ഇവിടെ നിങ്ങളുടെ സന്ദേശം എഴുതൂ...',
    'chat.sendButton': 'സന്ദേശം അയക്കൂ',
    'chat.note': 'സന്ദേശങ്ങൾ നിങ്ങളുടെ ബ്രൗസറിലെ അനുബന്ധമായി സംരക്ഷിക്കുന്നു.',
    'planner.title': 'യാത്രാ പദ്ധതിക്കാരി',
    'planner.name': 'നിങ്ങളുടെ പേര്',
    'planner.age': 'പ്രായം',
    'planner.days': 'ദിവസങ്ങളുടെ എണ്ണം',
    'planner.date': 'യാത്രാ തിയതി',
    'planner.saveBtn': 'എന്റെ യാത്ര സംരക്ഷിക്കൂ →',
    'review.shareHeading': 'നിങ്ങളുടെ കഥ പങ്കുവെക്കൂ',
    'review.placeholder': 'നിങ്ങളുടെ അനുഭവം എങ്ങനെയായിരുന്നു?',
    'review.button': 'അഭിപ്രായം പോസ്റ്റ് ചെയ്യൂ →',
    'weather.label': 'ഹവാമാന റിപ്പോർട്ട്',
    'weather.title': 'ഈ ആഴ്ച',
    'safety.label': 'സുരക്ഷിതമായി ഇരുന്ന്, ബുദ്ധിമുട്ടാതെ യാത്ര ചെയ്യൂ',
    'goa.hero.eyebrow': 'Sun & Sand · Western Coast',
    'goa.hero.destination': 'സൂര്യനെ ചുംബിച്ച ഗോവ',
    'goa.hero.tagline': 'അറബിക്കടലും പോർച്ചുഗീസ് മനോഹാരിതയും കണ്ടുമുട്ടുന്ന സ്ഥലം — ബീച്ചുകൾ, ബാസിലിക്കകൾ, മറക്കാനാവാത്ത സൂര്യാസ്ഥമയങ്ങൾ.',
    'goa.hero.stat.beaches': 'Beaches',
    'goa.hero.stat.perDay': 'Per Day',
    'goa.hero.stat.bestSeason': 'Best Season',
    'goa.section.intro.label': 'Coastal Jewel of India',
    'goa.section.intro.heading': 'ഗോവ: വെറും ബീച്ചുകൾ മാത്രം അല്ല',
    'goa.section.intro.p1': 'അറബിക്കടലിനോട് ചേർന്നുകിടന്ന ഗോവ, അതിന്റെ ആത്മാവിൽ വലിയതായ ഭാവനയുള്ള ഇന്ത്യയിലെ ഏറ്റവും ചെറിയ രാജ്യമാണ്. കോളനിയൽ പോർച്ചുഗീസ് വാസ്തുകലയ്ക്കും ചരിത്രത്തിനും മസാലക്കും സർഫ് സംസ്കാരത്തിനും ചേർന്ന് ഈ സ്ഥലത്ത് ഒരു മനോഹരമായ അനുഭവം രൂപപ്പെടുന്നു.',
    'goa.section.intro.p2': 'ബാഗയിലെ മിനുക്കുന്ന മണലിൽ നിന്ന് പരിശുദ്ധ ബോം ജീസസ് ബാസിലിക്കവരെ, ഗോവയുടെ ഓരോ കോണും ഒരു ബഹുനിരയ കഥ പറയുകയാണ്. ഏകപക്ഷ യാത്രികൾക്കായി ഇത് ഒരു പൂർണ്ണമായ കാൻവാസ് ആണ്.',
    'goa.places.label': 'Places to Discover',
    'goa.place.baga': 'Baga Beach',
    'goa.place.anjuna': 'Anjuna Beach',
    'goa.place.dudhsagar': 'Dudhsagar Falls',
    'goa.place.basilica': 'Basilica of Bom Jesus',
    'goa.place.fort': 'Fort Aguada',
    'goa.map.label': 'Getting There',
    'goa.map.heading': 'Reaching Goa',
    'goa.map.p': 'Goa is well connected by air (Dabolim / Mopa Airport), rail (Madgaon & Thivim stations), and road via NH66. Internal travel is best done by renting a scooter.',
    'goa.budget.label': 'Estimated Budget',
    'goa.budget.sub': 'Based on ₹3000/day average',
    'goa.essentials.localFlavours': 'Local Flavours',
    'goa.essentials.whatToEat': 'What to Eat',
    'goa.food.fish.title': 'Goan Fish Curry',
    'goa.food.fish.desc': 'Coconut milk curry with local spices — the soul of Goan cuisine.',
    'goa.food.prawn.title': 'Prawn Balchão',
    'goa.food.prawn.desc': 'Fiery, tangy prawn pickle unique to Goan kitchens.',
    'goa.food.dessert.title': 'Bebinca',
    'goa.food.dessert.desc': 'Classic Goan layered dessert — rich, golden, irresistible.',
    'goa.stay.label': 'Where to Rest',
    'goa.stay.heading': 'Places to Stay',
    'goa.stay.zostel.title': 'Zostel Goa',
    'goa.stay.zostel.desc': 'Vibrant backpacker hostel with pool, great for meeting fellow solo travelers.',
    'goa.stay.beachside.title': 'Beachside Inn (Calangute)',
    'goa.stay.beachside.desc': 'Budget stay steps from the beach with all essential amenities.',
    'goa.review.item1': 'Goa solo was life-changing. The sunsets at Vagator are something else — met so many amazing people!',
    'goa.review.item2': 'Rented a scooter and explored every beach in 5 days. Budget-friendly if you eat local.',
    'goa.safety.title': 'Stay Safe, Travel Smart',
    'goa.safety.card1.title': 'Emergency Contacts',
    'goa.safety.card1.item1': 'Goa Police: +91-832-2424001',
    'goa.safety.card1.item2': 'Ambulance: 108',
    'goa.safety.card1.item3': 'Tourist Helpline: 1363',
    'goa.safety.card2.title': 'Beach Safety',
    'goa.safety.card2.item1': 'Swim only at flagged zones',
    'goa.safety.card2.item2': 'Avoid isolated beaches after dark',
    'goa.safety.card2.item3': 'Watch out for rip currents',
    'goa.safety.card3.title': 'Travel Tips',
    'goa.safety.card3.item1': 'Always lock your scooter',
    'goa.safety.card3.item2': 'Keep copies of your documents',
    'goa.safety.card3.item3': 'Stay hydrated — it gets very hot',
    'footer.allDestinations': 'All Destinations',
    'footer.contact': 'Contact',
    'footer.copyright': '© 2024 SoloSafar. എല്ലാ അവകാശങ്ങളും സംരക്ഷിച്ചിരിക്കുന്നു.',
    'footer.soloNote': 'സോളോ അന്വേക്ഷകര്‍ക്ക് വേണ്ടി ♥ സ്‌നേഹത്തോടെ',
    'English': 'ഇംഗ്ലീഷ്',
    'SoloSafar': 'SoloSafar',
    'What to Eat': 'എന്ത് കഴിക്കും',
    'Estimated Budget': 'ബജറ്റ് കണക്കുകൂട്ടൽ',
    'Places to Stay': 'തങ്ങാനുള്ള സ്ഥലങ്ങൾ',
    'Per Day': 'ദിവസത്തിന്',
    'Emergency Contacts': 'ആപത് ബന്ധപ്പെടൽ',
    'Best Season': 'മികച്ച കാലം',
    'Weather Tips': 'വെയ്ധാവസ്ഥ യോജിച്ച സൂചനകൾ',
    'Travel Tips': 'യാത്രാ നിർദ്ദേശങ്ങൾ',
    'Sign In - SoloSafar': 'സൈൻ ഇൻ - SoloSafar',
    'Sign In to SoloSafar': 'SoloSafar-ലേക്ക് സൈൻ ഇൻ ചെയ്യുക',
    'Sign Up - Solo Traveler': 'സൈൻ അപ്പ് - Solo Traveler',
    'Sign Up to Solo Traveler': 'Solo Traveler-ലേക്ക് സൈൻ അപ്പ് ചെയ്യുക',
    'Email': 'ഇമെയിൽ',
    'Password': 'പാസ്‌വേഡ്',
    'Confirm Password': 'പാസ്‌വേഡ് സ്ഥിരീകരിക്കുക',
    'Username': 'ഉപയോക്തൃനാമം',
    'Submit': 'സമർപ്പിക്കുക',
    'signin.pageTitle': 'സൈൻ ഇൻ - SoloSafar',
    'signin.heading': 'SoloSafar-ലേക്ക് സൈൻ ഇൻ ചെയ്യുക',
    'signin.emailLabel': 'ഇമെയിൽ',
    'signin.passwordLabel': 'പാസ്‌വേഡ്',
    'signin.submit': 'സൈൻ ഇൻ',
    'signin.signupLink': 'അക്കൗണ്ട് ഇല്ലേ? ഇവിടെ സൈൻ അപ്പ് ചെയ്യൂ',
    'signup.pageTitle': 'സൈൻ അപ്പ് - Solo Traveler',
    'signup.heading': 'Solo Traveler-ലേക്ക് സൈൻ അപ്പ് ചെയ്യുക',
    'signup.usernameLabel': 'ഉപയോക്തൃനാമം',
    'signup.emailLabel': 'ഇമെയിൽ',
    'signup.passwordLabel': 'പാസ്‌വേഡ്',
    'signup.confirmPasswordLabel': 'പാസ്‌വേഡ് സ്ഥിരീകരിക്കുക',
    'signup.submit': 'സൈൻ അപ്പ്',
    'signup.backToSignIn': 'ഇവിടെ നിന്ന് സൈൻ ഇൻ ൽ തിരികെ പോവുക',
    'feedback.pageTitle': 'പ്രതികരണം',
    'feedback.heading': 'പ്രതികരണം',
    'feedback.namePlaceholder': 'നിങ്ങളുടെ പേര്',
    'feedback.feedbackPlaceholder': 'നിങ്ങളുടെ ഫീഡ്‌ബാക്ക്',
    'feedback.submit': 'സമർപ്പിക്കുക',
    'Sign In': 'സൈൻ ഇൻ',
    'Sign Up': 'സൈൻ അപ്പ്',
    'Your feedback': 'നിങ്ങളുടെ ഫീഡ്‌ബാക്ക്',
    "Don't have an account? Sign up here": 'അക്കൗണ്ട് ഇല്ലേ? ഇവിടെ സൈൻ അപ്പ് ചെയ്യൂ',
    'Back to Sign in here': 'ഇവിടെ നിന്ന് സൈൻ ഇൻ ൽ തിരികെ പോവുക',
    'Coastal Jewel of India': 'ഇന്ത്യയുടെ തീരത്തിന്റെ രത্নം',
    'Places to Discover': 'കണ്ടെത്തേണ്ട സ്ഥലങ്ങൾ',
    'Getting There': 'അവിടെ എങ്ങനെ എത്താം',
    'Trip Planner': 'യാത്രാ പദ്ധതിയாளர்',
    'Local Flavours': 'പ്രാദേശിക രുചികൾ',
    'Where to Rest': 'വസിക്കാൻ എവിടെ',
    'Traveller Stories': 'യാത്രികരുടെ കഥകൾ',
    'Stay Safe, Travel Smart': 'സുരക്ഷിതമായി ഇരിക്കുക, ബുദ്ധിപൂർവ്വം യാത്ര ചെയ്യുക',
    'dest.tag.1': 'സൂര്യന്‍ · മണല്‍ · കടല്‍',
    'dest.tag.2': 'ഉയര്‍ന്ന മലനിരകള്‍ · പള്ളി',
    'dest.tag.3': 'മഞ്ഞ് · സാഹസികം · താഴ്വരകള്‍',
    'dest.tag.4': 'ബാക്ക്വാട്ടര്‍ · മസാല · ശാന്തി',
    'dest.tag.5': 'കോട്ടകള്‍ · തടാകങ്ങള്‍ · രാജവംശം',
    'dest.tag.6': 'മലയുകള്‍ · പള്ളി · മഞ്ഞുമൂടല്‍',
    'dest.tag.7': 'ഉപ്പ് മരുഭൂമി · ജനകീയ കല · ഉത്സവങ്ങള്‍',
    'dest.tag.8': 'വംശങ്ങള്‍ · താഴ്വരകള്‍ · ഹോര്‍ണ്ബില്‍',

    'dest.name.1': 'ഗോവ',
    'dest.name.2': 'ലേ ലഡാഖ്',
    'dest.name.3': 'മനാലി',
    'dest.name.4': 'കേരളം',
    'dest.name.5': 'ഉദയ്പൂർ',
    'dest.name.6': 'സിക്കിം',
    'dest.name.7': 'കച്ച്',
    'dest.name.8': 'നാഗാലാൻഡ്',
    'udaipur.hero.destination': '<em>റോയൽ</em><br>ഉദയ്പൂർ',
    'page.title': 'SoloSafar — ഇന്ത്യ കാത്തിരിക്കുന്നു',
    'Chat — SoloSafar': 'ചാറ്റ് — SoloSafar',
    'Welcome to the chat! Ask about the best time to visit any destination.': 'ചാറ്റിലേക്ക് സ്വാഗതം! ഏത് സഞ്ചാരസ്ഥലത്തെ സന്ദർശിക്കാൻ ഏറ്റവും നല്ല സമയമെന്ന് ചോദിക്കുക.',
    'I loved the peaceful mornings in Udaipur — the lakes are magical before sunrise.': 'ഉദയപുരിലെ ശാന്തമായ രാവിലെ ഞാൻ വളരെ ഇഷ്ടപ്പെട്ടു — തടാകങ്ങൾ സൂര്യോദയത്തിന് മുമ്പ് മായാജാലമാണ്.',
    'If you are going to Goa, rent a scooter and explore the quieter north beaches.': 'നിങ്ങൾ ഗോവയിലേക്ക് പോകുകയാണെങ്കിൽ, ഒരു സ്കൂട്ടർ വാടകക്ക് എടുത്ത് ശാന്തമായ വടക്കൻ കടൽത്തുറങ്ങൾ അറിയുക.',
    'Just now': 'ഇപ്പൊഴാണ്',
    'gallery.title': 'SoloSafar Gallery',
    'gallery.meta': 'No. 01 · India Vol. 1',
    'gallery.credit': 'രൂപകൽപന ചെയ്തവൻ',
    'manifesto.one': 'ഓഫ്ബീറ്റിലേക്ക് പോവൂ',
    'manifesto.two': 'ഭയമില്ലാതെ യാത്ര ചെയ്യൂ',
    'manifesto.three': 'ഇന്ത്യയെ കണ്ടെത്തൂ',
    'manifesto.four': 'ഒറ്റയ്ക്ക്, പക്ഷേ ഒറ്റക്കല്ല',
    'manifesto.five': '08 ലക്ഷ്യങ്ങൾ',
    'manifesto.six': 'ബോളോ തോ സോളോ',
  
    'dashboard.label': 'നിങ്ങളുടെ സോളോ ഡാഷ്‌ബോർഡ്',
    'nav.tools': 'ഉപകരണങ്ങൾ',
    'nav.blog': 'ബ്ലോഗ്',
    'footer.destinations': 'ലക്ഷ്യസ്ഥലങ്ങൾ',
    'planner.badge': 'യാത്രാ ആസൂത്രകൻ',
    'planner.modalTitle': 'നിങ്ങളുടെ അടുത്ത ഇറ്റിനററി ഉണ്ടാക്കൂ',
    'planner.intro': 'നിങ്ങളുടെ ലക്ഷ്യസ്ഥലം, യാത്രാ തിയ്യതി, ശൈലി തിരഞ്ഞെടുക്കൂ. ഉടനടി ദൈനംദിന ആസൂത്രണവും ബഡ്ജറ്റ് കണക്കുകൂട്ടലും ലഭിക്കൂ.',
    'planner.destinationLabel': 'ലക്ഷ്യസ്ഥലം',
    'planner.startDateLabel': 'ആരംഭ തിയ്യതി',
    'planner.endDateLabel': 'അവസാന തിയ്യതി',
    'planner.styleLabel': 'യാത്രാ ശൈലി',
    'planner.notesLabel': 'കുറിപ്പുകൾ',
    'planner.generateBtn': 'പ്ലാൻ ഉണ്ടാക്കൂ',
    'planner.viewSavedBtn': 'സേവ് ചെയ്ത യാത്രകൾ കാണൂ',
    'planner.shareBtn': 'പങ്കുവെക്കൂ',
    'planner.summaryTitle': 'നിങ്ങളുടെ യാത്രാ പ്രിവ്യൂ ഇവിടെ കാണും.',
    'planner.summaryHint': 'ലക്ഷ്യസ്ഥാന ഹൈലൈറ്റുകൾ, ബഡ്ജറ്റ് കാണാൻ പ്ലാൻ ഉണ്ടാക്കൂ.',
    'find.badge': 'യാത്രികരെ കണ്ടെത്തൂ',
    'find.modalTitle': 'സഹ സാഹസികരുമായി ബന്ധം സ്ഥാപിക്കൂ',
    'find.intro': 'ലക്ഷ്യസ്ഥലം, തിയ്യതി, താൽപ്പര്യങ്ങൾ അനുസരിച്ച് ഫിൽട്ടർ ചെയ്യൂ.',
    'find.destinationLabel': 'ലക്ഷ്യസ്ഥലം',
    'find.startDateLabel': 'യാത്ര ആരംഭം',
    'find.endDateLabel': 'യാത്ര അവസാനം',
    'find.interestLabel': 'താൽപ്പര്യം',
    'journal.badge': 'യാത്രാ ഡയറി',
    'journal.modalTitle': 'നിങ്ങളുടെ സാഹസങ്ങൾ രേഖപ്പെടുത്തൂ',
    'journal.intro': 'നിങ്ങളുടെ യാത്രാ കുറിപ്പുകൾ, മൂഡ്, ഓർമ്മകൾ ഒരിടത്ത് സൂക്ഷിക്കൂ.',
    'journal.dateLabel': 'തിയ്യതി',
    'journal.titleLabel': 'ശീർഷകം',
    'journal.moodLabel': 'മൂഡ്',
    'journal.entryLabel': 'എൻട്രി',
    'journal.visibilityLabel': 'ദൃശ്യത',
    'journal.authorLabel': 'രചയിതാവ്',
    'journal.locationLabel': 'സ്ഥലം',
    'journal.searchLabel': 'എൻട്രികൾ തിരയൂ',
    'journal.saveBtn': 'എൻട്രി സേവ് ചെയ്യൂ',
    'journal.viewBtn': 'എൻട്രികൾ കാണൂ',
    'journal.exportBtn': 'എക്‌സ്‌പോർട്ട്',
    'journal.clearBtn': 'എല്ലാം ഒഴിവാക്കൂ',
    'journal.summaryTitle': 'ഡയറി സംഗ്രഹം',
    'journal.summaryHint': 'നിങ്ങളുടെ ചിന്തകൾ സേവ് ചെയ്ത് ഏറ്റവും പുതിയ എൻട്രികൾ കാണൂ.',
    'budget.badge': 'ബഡ്ജറ്റ് ട്രാക്കർ',
    'budget.modalTitle': 'നിങ്ങളുടെ ചെലവുകൾ നിരീക്ഷിക്കൂ',
    'budget.intro': 'ചെലവ് രേഖപ്പെടുത്തൂ, വിഭാഗങ്ങൾ താരതമ്യം ചെയ്യൂ.',
    'budget.dateLabel': 'തിയ്യതി',
    'budget.categoryLabel': 'വിഭാഗം',
    'budget.amountLabel': 'തുക',
    'budget.goalLabel': 'ബഡ്ജറ്റ് ലക്ഷ്യം',
    'budget.filterLabel': 'ഫിൽട്ടർ ചെയ്യൂ',
    'budget.noteLabel': 'കുറിപ്പ്',
    'budget.setGoalBtn': 'ലക്ഷ്യം സെറ്റ് ചെയ്യൂ',
    'budget.addBtn': 'ചെലവ് ചേർക്കൂ',
    'budget.exportBtn': 'എക്‌സ്‌പോർട്ട്',
    'budget.resetBtn': 'റീസെറ്റ്',
    'budget.clearBtn': 'എല്ലാം ഒഴിവാക്കൂ',
    'budget.summaryTitle': 'ബഡ്ജറ്റ് സംഗ്രഹം',
    'budget.summaryHint': 'ചെലവ് ട്രാക്ക് ചെയ്ത് പണം എങ്ങോട്ട് പോകുന്നു കാണൂ.',
    'safety.badge': 'സുരക്ഷാ ഉപകരണങ്ങൾ',
    'safety.modalTitle': 'അടിയന്തര ബന്ധങ്ങൾ നിയന്ത്രിക്കൂ',
    'safety.intro': 'നിങ്ങളുടെ പ്രധാന ബന്ധങ്ങൾ അടുത്ത് സൂക്ഷിക്കൂ.',
    'safety.nameLabel': 'ബന്ധ നാമം',
    'safety.phoneLabel': 'ഫോൺ നംബർ',
    'safety.relationLabel': 'ബന്ധം',
    'safety.saveBtn': 'ബന്ധം സേവ് ചെയ്യൂ',
    'safety.tipsBtn': 'സുരക്ഷാ ടിപ്‌സ്',
    'safety.callPoliceBtn': 'പോലീസിനെ വിളിക്കൂ',
    'safety.callAmbulanceBtn': 'ആംബുലൻസ് വിളിക്കൂ',
    'safety.sosBtn': 'അടിയന്തര SOS',
    'safety.summaryTitle': 'സുരക്ഷാ ചെക്‌ലിസ്റ്റ്',
    'safety.summaryHint': 'യാത്രയ്ക്കിടെ ഈ ടിപ്‌സ് മനസ്സിൽ ഉണ്ടാവട്ടെ.',
    'safety.checklistTitle': 'യാത്രാ മുൻ ചെക്‌ലിസ്റ്റ്',
    'safety.check1': 'കുടുംബത്തോടൊപ്പം ഇറ്റിനററി പങ്കുവെക്കൂ',
    'safety.check2': 'നിങ്ങളുടെ എംബസ്സിയിൽ രജിസ്റ്റർ ചെയ്യൂ',
    'safety.check3': 'അടിയന്തര നംബറുകൾ സേവ് ചെയ്യൂ',
    'safety.check4': 'യാത്രാ ഇൻഷൂറൻസ് എടുക്കൂ',
  },
  mr: {
    'nav.languageLabel': 'भाषा',
    'nav.destinations': 'स्थळे',
    'nav.feedback': 'अभिप्राय',
    'nav.chat': 'चॅट',
    'nav.signOut': 'साइन आउट',
    'nav.back': 'घरावर परत',
    'hero.title': 'तू कुठे जाणार आहेस? <br><span>भारत शोधा</span>',
    'hero.quote': '“स्वतःला भेटण्यासाठी पुरेशी दूर प्रवास कर.”',
    'marquee.tagline': 'सोलो सफार — प्रत्येक दृश्य एक कथा.',
    'hero.tagline': 'सोलो सफर सोबत भारताची सोपी सफर.',
    'section.count': '08 गंतव्ये',
    'feature1.title': 'सोलो प्रवाशांसाठी',
    'feature1.text': 'बजेट, सुरक्षा, आणि संपर्क — भारतातील एकट्या प्रवासासाठी.',
    'feature2.title': 'खऱ्या अनुभव',
    'feature2.text': 'प्रामाणिक अन्न, लपलेली ठिकाणे आणि खरे भारत.',
    'feature3.title': 'योजना करा, बचत करा, जा',
    'feature3.text': 'तुमची यात्रा तारीख भरा आणि त्वरित अंदाज घ्या.',
    'dashboard.title': 'तुमच्या एकट्या प्रवासासाठी साधने',
    'dashboard.copy': 'योजना करण्यासाठी, जोडण्यासाठी आणि सुरक्षित राहण्यासाठी आवश्यक सर्वकाही.',
    'dashboard.ai.title': 'AI शिफारशी',
    'dashboard.ai.text': 'वैयक्तिक गंतव्य सूचना मिळवा',
    'dashboard.plan.title': 'सहल आखा',
    'dashboard.plan.text': 'तुमचा पुढील कार्यक्रम तयार करा',
    'dashboard.find.title': 'प्रवासी शोधा',
    'dashboard.find.text': 'सहप्रवाशांशी जोडून घ्या',
    'dashboard.journal.title': 'प्रवास डायरी',
    'dashboard.journal.text': 'तुमचे साहस नोंदवा',
    'dashboard.budget.title': 'बजेट ट्रॅक करा',
    'dashboard.budget.text': 'तुमच्या खर्चावर देखरेख ठेवा',
    'dashboard.safety.title': 'सुरक्षा साधने',
    'dashboard.safety.text': 'आपत्कालीन संपर्क व्यवस्थापित करा',
    'dashboard.card.action': 'शोधा',
    'dashboard.note': 'साधनाचे पूर्वावलोकन करण्यासाठी कार्ड टॅप करा.',
    'footer.tagline': 'एकट्याने पण सोपी यात्रा.',
    'footer.info': 'माहिती',
    'chat.label': 'प्रवाश्यांची चॅट',
    'chat.header': 'इतर प्रवाशांशी चॅट करा',
    'chat.text': 'स्थानिक टिप्स शेअर करा, हवामान विचारा, आणि अनुभव सांगा.',
    'chat.placeholder': 'तुमचा संदेश येथे लिहा...',
    'chat.sendButton': 'संदेश पाठवा',
    'chat.note': 'संदेश तुमच्या ब्राउझरमध्ये सुरक्षित राहतात.',
    'planner.title': 'यात्रा नियोजक',
    'planner.name': 'तुझे नाव',
    'planner.age': 'वय',
    'planner.days': 'दिवसांची संख्या',
    'planner.date': 'यात्रेची तारीख',
    'planner.saveBtn': 'माझी यात्रा जतन करा →',
    'review.shareHeading': 'तुझी कथा शेअर कर',
    'review.placeholder': 'तुझा अनुभव कसा होता?',
    'review.button': 'पुनरावलोकन पोस्ट करा →',
    'weather.label': 'हवामान अहवाल',
    'weather.title': 'या आठवड्यात',
    'safety.label': 'सुरक्षित रहा, शहाणपणाने प्रवास करा',
    'goa.hero.eyebrow': 'Sun & Sand · Western Coast',
    'goa.hero.destination': 'सूर्यस्नात गोवा',
    'goa.hero.tagline': 'जिथे अरबी समुद्र पोर्तुगीज मोहिनीशी मिळतो — किनारे, बॅसिलिका आणि अविस्मरणीय सूर्यास्त.',
    'goa.hero.stat.beaches': 'Beaches',
    'goa.hero.stat.perDay': 'Per Day',
    'goa.hero.stat.bestSeason': 'Best Season',
    'goa.section.intro.label': 'Coastal Jewel of India',
    'goa.section.intro.heading': 'गोवा: फक्त किनाऱ्यांपेक्षा अधिक',
    'goa.section.intro.p1': 'अरबी समुद्राच्या किनाऱ्यावर वसलेले गोवा, भारताचे सर्वात लहान राज्य असले तरी सर्वात मोठी आत्मा आहे. वसाहतीच्या पोर्तुगीज वास्तुकलेला इतिहास, मसाला आणि सर्फच्या जीवंत संस्कृतीचा संगम जोडा.',
    'goa.section.intro.p2': 'बागाच्या चमचमीत वाळूमध्येून पवित्र बम जीसस बॅसिलिकापर्यंत, गोवाच्या प्रत्येक कोपऱ्यात एक थरदार कथा आहे. एकट्या प्रवाशांसाठी हे एक परिपूर्ण कॅनव्हास आहे.',
    'footer.allDestinations': 'सर्व ठिकाणे',
    'footer.contact': 'संपर्क',
    'footer.copyright': '© 2024 SoloSafar. सर्व हक्क राखीव.',
    'footer.soloNote': 'सोलो शोधकांसाठी ♥ प्रेमाने बनवले',
    'English': 'इंग्रजी',
    'SoloSafar': 'SoloSafar',
    'What to Eat': 'काय खायचे',
    'Estimated Budget': 'अनुमानित बजेट',
    'Places to Stay': 'रहाण्याची ठिकाणे',
    'Per Day': 'प्रति दिवस',
    'Emergency Contacts': 'अत्यावश्यक संपर्क',
    'Best Season': 'सर्वोत्तम ऋतू',
    'Weather Tips': 'हवामान सूचना',
    'Travel Tips': 'प्रवास सूचना',
    'Sign In - SoloSafar': 'साइन इन - SoloSafar',
    'Sign In to SoloSafar': 'SoloSafar मध्ये साइन इन करा',
    'Sign Up - Solo Traveler': 'साइन अप - Solo Traveler',
    'Sign Up to Solo Traveler': 'Solo Traveler साठी साइन अप करा',
    'Email': 'ईमेल',
    'Password': 'पासवर्ड',
    'Confirm Password': 'पासवर्ड पुष्टी करा',
    'Username': 'वापरकर्तानाव',
    'Submit': 'सबमिट करा',
    'signin.pageTitle': 'साइन इन - SoloSafar',
    'signin.heading': 'SoloSafar मध्ये साइन इन करा',
    'signin.emailLabel': 'ईमेल',
    'signin.passwordLabel': 'पासवर्ड',
    'signin.submit': 'साइन इन',
    'signin.signupLink': 'खाते नाही का? येथे साइन अप करा',
    'signup.pageTitle': 'साइन अप - Solo Traveler',
    'signup.heading': 'Solo Traveler साठी साइन अप करा',
    'signup.usernameLabel': 'वापरकर्तानाव',
    'signup.emailLabel': 'ईमेल',
    'signup.passwordLabel': 'पासवर्ड',
    'signup.confirmPasswordLabel': 'पासवर्ड पुष्टी करा',
    'signup.submit': 'साइन अप',
    'signup.backToSignIn': 'येथे साइन इन कडे परत जा',
    'feedback.pageTitle': 'प्रतिपुष्टी',
    'feedback.heading': 'प्रतिपुष्टी',
    'feedback.namePlaceholder': 'तुमचे नाव',
    'feedback.feedbackPlaceholder': 'तुमचा अभिप्राय',
    'feedback.submit': 'सबमिट करा',
    'Sign In': 'साइन इन',
    'Sign Up': 'साइन अप',
    'Your feedback': 'तुमचा फीडबॅक',
    "Don't have an account? Sign up here": 'खाते नाही का? येथे साइन अप करा',
    'Back to Sign in here': 'येथे साइन इन कडे परत जा',
    'Coastal Jewel of India': 'भारताची किनाऱ्यावरील रत्ने',
    'Places to Discover': 'शोधण्यासाठी ठिकाणे',
    'Getting There': 'तिथे कसे पोहोचायचे',
    'Trip Planner': 'प्रवास नियोजक',
    'Local Flavours': 'स्थानिक चव',
    'Where to Rest': 'कुठे विश्रांती घ्यावी',
    'Traveller Stories': 'प्रवासी कथा',
    'Stay Safe, Travel Smart': 'सुरक्षित रहा, बुद्धीने प्रवास करा',
    'dest.tag.1': 'सूर्य · वाळू · समुद्र',
    'dest.tag.2': 'उंच टेकडी · मठ',
    'dest.tag.3': 'बर्फ · साहस · दऱ्या',
    'dest.tag.4': 'बॅकवॉटर · मसाला · शांतता',
    'dest.tag.5': 'महाल · तलाव · शाहीपणा',
    'dest.tag.6': 'पर्वत · मठ · धुंद',
    'dest.tag.7': 'मीठ वाळवंट · लोककला · सण',
    'dest.tag.8': 'जमाती · दऱ्या · हॉर्नबिल',

    'dest.name.1': 'गोवा',
    'dest.name.2': 'लेह लडाख',
    'dest.name.3': 'मनाली',
    'dest.name.4': 'केरळ',
    'dest.name.5': 'उदयपूर',
    'dest.name.6': 'सिक्कीम',
    'dest.name.7': 'कच्छ',
    'dest.name.8': 'नागालँड',
    'udaipur.hero.destination': '<em>राजेशाही</em><br>उदयपूर',
    'page.title': 'SoloSafar — भारत तुमची वाट पाहत आहे',
    'Chat — SoloSafar': 'चॅट — SoloSafar',
    'Welcome to the chat! Ask about the best time to visit any destination.': 'चॅटमध्ये आपले स्वागत आहे! कोणत्याही गंतव्याला भेट देण्याचा सर्वोत्तम वेळ काय आहे हे विचारा.',
    'I loved the peaceful mornings in Udaipur — the lakes are magical before sunrise.': 'मला उदयपूरमधील शांत सकाळ खूप आवडली — सूर्यउदयापूर्वी तलाव जादूई दिसतात.',
    'If you are going to Goa, rent a scooter and explore the quieter north beaches.': 'तुम्ही गोवाला जात असाल तर स्कूटर भाड्याने घ्या आणि शांत उत्तरेकडील किनारे शोधा.',
    'Just now': 'आता',
    'gallery.title': 'SoloSafar Gallery',
    'gallery.meta': 'No. 01 · India Vol. 1',
    'gallery.credit': 'रचना केली',
    'manifesto.one': 'अभिसरणपथाने बाहेर जा',
    'manifesto.two': 'भीतीने विरहित प्रवास करा',
    'manifesto.three': 'भारत शोधा',
    'manifesto.four': 'एकटा पण एकटी नाही',
    'manifesto.five': '08 ठिकाणे',
    'manifesto.six': 'बोलो तो सोलो',
  
    'dashboard.label': 'तुमचे सोलो डॅशबोर्ड',
    'nav.tools': 'साधने',
    'nav.blog': 'ब्लॉग',
    'footer.destinations': 'स्थळे',
    'planner.badge': 'प्रवास नियोजक',
    'planner.modalTitle': 'तुमचा पुढील कार्यक्रम तयार करा',
    'planner.intro': 'तुमचे गंतव्य, प्रवास तारखा आणि शैली निवडा. तात्काळ दिवसाची योजना आणि बजेट अंदाज मिळवा.',
    'planner.destinationLabel': 'गंतव्य',
    'planner.startDateLabel': 'सुरुवातीची तारीख',
    'planner.endDateLabel': 'शेवटची तारीख',
    'planner.styleLabel': 'प्रवास शैली',
    'planner.notesLabel': 'नोट्स',
    'planner.generateBtn': 'योजना तयार करा',
    'planner.viewSavedBtn': 'जतन केलेल्या सहली पाहा',
    'planner.shareBtn': 'सामायिक करा',
    'planner.summaryTitle': 'तुमचे प्रवास पूर्वावलोकन येथे दिसेल.',
    'planner.summaryHint': 'गंतव्य ठळक मुद्दे, बजेट आणि दिवसेंदिवस कार्यक्रम पाहण्यासाठी योजना तयार करा.',
    'find.badge': 'प्रवासी शोधा',
    'find.modalTitle': 'सहप्रवाशांशी जोडून घ्या',
    'find.intro': 'गंतव्य, तारखा आणि स्वारस्यानुसार फिल्टर करा.',
    'find.destinationLabel': 'गंतव्य',
    'find.startDateLabel': 'प्रवास सुरू',
    'find.endDateLabel': 'प्रवास समाप्त',
    'find.interestLabel': 'स्वारस्य',
    'journal.badge': 'प्रवास डायरी',
    'journal.modalTitle': 'तुमचे साहस नोंदवा',
    'journal.intro': 'तुमच्या प्रवासाच्या नोट्स, मनःस्थिती आणि आठवणी एकाच ठिकाणी साठवा.',
    'journal.dateLabel': 'तारीख',
    'journal.titleLabel': 'नोंदीचे शीर्षक',
    'journal.moodLabel': 'मनःस्थिती',
    'journal.entryLabel': 'नोंद',
    'journal.visibilityLabel': 'दृश्यमानता',
    'journal.authorLabel': 'लेखकाचे नाव',
    'journal.locationLabel': 'ठिकाण',
    'journal.searchLabel': 'नोंदी शोधा',
    'journal.saveBtn': 'नोंद जतन करा',
    'journal.viewBtn': 'नोंदी पाहा',
    'journal.exportBtn': 'निर्यात करा',
    'journal.clearBtn': 'सर्व हटवा',
    'journal.summaryTitle': 'डायरीचा आढावा',
    'journal.summaryHint': 'तुमचे विचार जतन करा आणि ताज्या नोंदी पाहा.',
    'budget.badge': 'बजेट ट्रॅकर',
    'budget.modalTitle': 'तुमच्या खर्चावर देखरेख ठेवा',
    'budget.intro': 'खर्च नोंदवा, श्रेण्या तुलना करा.',
    'budget.dateLabel': 'तारीख',
    'budget.categoryLabel': 'श्रेणी',
    'budget.amountLabel': 'रक्कम',
    'budget.goalLabel': 'बजेट ध्येय',
    'budget.filterLabel': 'फिल्टर करा',
    'budget.noteLabel': 'टीप',
    'budget.setGoalBtn': 'ध्येय ठरवा',
    'budget.addBtn': 'खर्च जोडा',
    'budget.exportBtn': 'निर्यात करा',
    'budget.resetBtn': 'रीसेट',
    'budget.clearBtn': 'सर्व हटवा',
    'budget.summaryTitle': 'बजेट सारांश',
    'budget.summaryHint': 'तुमचा खर्च ट्रॅक करा.',
    'safety.badge': 'सुरक्षा साधने',
    'safety.modalTitle': 'आपत्कालीन संपर्क व्यवस्थापित करा',
    'safety.intro': 'तुमचे महत्त्वाचे संपर्क जवळ ठेवा.',
    'safety.nameLabel': 'संपर्काचे नाव',
    'safety.phoneLabel': 'फोन नंबर',
    'safety.relationLabel': 'नाते',
    'safety.saveBtn': 'संपर्क जतन करा',
    'safety.tipsBtn': 'सुरक्षा टिप्स',
    'safety.callPoliceBtn': 'पोलिसांना कॉल करा',
    'safety.callAmbulanceBtn': 'रुग्णवाहिका कॉल करा',
    'safety.sosBtn': 'आपत्कालीन SOS',
    'safety.summaryTitle': 'सुरक्षा तपासणी यादी',
    'safety.summaryHint': 'प्रवासादरम्यान या टिप्स लक्षात ठेवा.',
    'safety.checklistTitle': 'प्रवासपूर्व तपासणी यादी',
    'safety.check1': 'कुटुंबासह तुमचा कार्यक्रम सामायिक करा',
    'safety.check2': 'तुमच्या दूतावासात नोंदणी करा',
    'safety.check3': 'आपत्कालीन क्रमांक जतन करा',
    'safety.check4': 'प्रवास विमा घ्या',
  },
  bn: {
    'nav.languageLabel': 'ভাষা',
    'nav.destinations': 'গন্তব্য',
    'nav.feedback': 'প্রতিক্রিয়া',
    'nav.chat': 'চ্যাট',
    'nav.signOut': 'সাইন আউট',
    'nav.back': 'বাড়িতে ফিরে যান',
    'hero.title': 'তুমি কোথায় যাবে? <br><span>ভারত আবিষ্কার কর</span>',
    'hero.quote': '“নিজের সাথে দেখা করতে যথেষ্ট দূরে ভ্রমণ করো।”',
    'marquee.tagline': 'সোলো সাফার — প্রতিটি দৃশ্য একটি গল্প।',
    'hero.tagline': 'সোলো ভ্রমণে ভারতকে সহজে আবিষ্কার করুন।',
    'section.count': '০৮ গন্তব্য',
    'feature1.title': 'সোলো ভ্রমণকারীদের জন্য',
    'feature1.text': 'বাজেট, নিরাপত্তা এবং সংযোগ — ভারতের জন্য বিশেষ।',
    'feature2.title': 'বাস্তব অভিজ্ঞতা',
    'feature2.text': 'স্থানীয় খাবার, লুকানো জায়গা, এবং আসল ভারত।',
    'feature3.title': 'পরিকল্পনা করুন, সাশ্রয় করুন, যান',
    'feature3.text': 'আপনার ভ্রমণের তারিখ লিখুন, তাৎক্ষণিক বাজেট পান, এবং সংরক্ষণ করুন।',
    'dashboard.title': 'আপনার সোলো ভ্রমণের জন্য সরঞ্জামসমূহ',
    'dashboard.copy': 'পথে পরিকল্পনা, সংযোগ এবং নিরাপদ থাকার জন্য প্রয়োজনীয় সবকিছু।',
    'dashboard.ai.title': 'AI পরামর্শ',
    'dashboard.ai.text': 'ব্যক্তিগতকৃত গন্তব্য পরামর্শ পান',
    'dashboard.plan.title': 'ভ্রমণ পরিকল্পনা করুন',
    'dashboard.plan.text': 'আপনার পরবর্তী ভ্রমণসূচি তৈরি করুন',
    'dashboard.find.title': 'ভ্রমণকারী খুঁজুন',
    'dashboard.find.text': 'সহ অ্যাডভেঞ্চারারদের সাথে সংযোগ করুন',
    'dashboard.journal.title': 'ভ্রমণ জার্নাল',
    'dashboard.journal.text': 'আপনার অ্যাডভেঞ্চার নথিভুক্ত করুন',
    'dashboard.budget.title': 'বাজেট ট্র্যাক করুন',
    'dashboard.budget.text': 'আপনার ব্যয় পর্যবেক্ষণ করুন',
    'dashboard.safety.title': 'নিরাপত্তা সরঞ্জাম',
    'dashboard.safety.text': 'জরুরি যোগাযোগ পরিচালনা করুন',
    'dashboard.card.action': 'অন্বেষণ করুন',
    'dashboard.note': 'সরঞ্জাম প্রিভিউ করতে কার্ড ট্যাপ করুন।',
    'footer.tagline': 'একা হলেও সহজ ভ্রমণ।',
    'footer.info': 'তথ্য',
    'chat.label': 'ভ্রমণকারীদের চ্যাট',
    'chat.header': 'অন্যান্য পর্যটকদের সাথে চ্যাট করুন',
    'chat.text': 'স্থানীয় টিপস শেয়ার করুন, আবহাওয়া সম্পর্কে জিজ্ঞাসা করুন।',
    'chat.placeholder': 'আপনার বার্তা এখানে লিখুন...',
    'chat.sendButton': 'বার্তা পাঠান',
    'chat.note': 'বার্তাগুলি আপনার ব্রাউজারে স্থানীয়ভাবে সংরক্ষিত হয়।',
    'planner.title': 'ভ্রমণ পরিকল্পক',
    'planner.name': 'আপনার নাম',
    'planner.age': 'বয়স',
    'planner.days': 'দিনের সংখ্যা',
    'planner.date': 'ভ্রমণের তারিখ',
    'planner.saveBtn': 'আমার ট্রিপ সংরক্ষণ করুন →',
    'review.shareHeading': 'আপনার গল্প শেয়ার করুন',
    'review.placeholder': 'আপনার অভিজ্ঞতা কেমন ছিল?',
    'review.button': 'রিভিউ পোস্ট করুন →',
    'weather.label': 'আবহাওয়া রিপোর্ট',
    'weather.title': 'এই সপ্তাহে',
    'safety.label': 'নিরাপদ থাকুন, বুদ্ধিমানের মতো ভ্রমণ করুন',
    'goa.hero.eyebrow': 'Sun & Sand · Western Coast',
    'goa.hero.destination': 'সূর্যস্নাত গোয়া',
    'goa.hero.tagline': 'যেখানে আরব সাগরের সাথে পর্তুগিজ সৌন্দর্যের মিলন ঘটে — সৈকত, ব্যাসিলিকা এবং অবিস্মরণীয় সূর্যাস্ত।',
    'goa.hero.stat.beaches': 'Beaches',
    'goa.hero.stat.perDay': 'Per Day',
    'goa.hero.stat.bestSeason': 'Best Season',
    'goa.section.intro.label': 'Coastal Jewel of India',
    'goa.section.intro.heading': 'গোয়া: শুধু সৈকত নয়',
    'goa.section.intro.p1': 'আরব সাগরের তীরে অবস্থিত গোয়া ভারতের ছোট্ট রাজ্য হলেও এর আত্মা বিশাল। ঔপনিবেশিক পর্তুগিজ স্থাপত্য ও প্রাণবন্ত সৈকত সংস্কৃতির মেলবন্ধনে ইতিহাস, মশলা এবং সার্ফিংয়ের এক মনোমুগ্ধকর মিশ্রণ গড়ে ওঠে।',
    'goa.section.intro.p2': 'বাগার ঝলমলে বালু থেকে পবিত্র বম জিশুসের বেসিলিকা পর্যন্ত, গোয়ার প্রতিটি কোণই এক বহুমাত্রিক গল্প বলে। একক পর্যটকদের জন্য এটি একটি নিখুঁত ক্যানভাস।',
    'goa.places.label': 'Places to Discover',
    'goa.place.baga': 'Baga Beach',
    'goa.place.anjuna': 'Anjuna Beach',
    'goa.place.dudhsagar': 'Dudhsagar Falls',
    'goa.place.basilica': 'Basilica of Bom Jesus',
    'goa.place.fort': 'Fort Aguada',
    'goa.map.label': 'Getting There',
    'goa.map.heading': 'Reaching Goa',
    'goa.map.p': 'Goa is well connected by air (Dabolim / Mopa Airport), rail (Madgaon & Thivim stations), and road via NH66. Internal travel is best done by renting a scooter.',
    'goa.budget.label': 'Estimated Budget',
    'goa.budget.sub': 'Based on ₹3000/day average',
    'goa.essentials.localFlavours': 'Local Flavours',
    'goa.essentials.whatToEat': 'What to Eat',
    'goa.food.fish.title': 'Goan Fish Curry',
    'goa.food.fish.desc': 'Coconut milk curry with local spices — the soul of Goan cuisine.',
    'goa.food.prawn.title': 'Prawn Balchão',
    'goa.food.prawn.desc': 'Fiery, tangy prawn pickle unique to Goan kitchens.',
    'goa.food.dessert.title': 'Bebinca',
    'goa.food.dessert.desc': 'Classic Goan layered dessert — rich, golden, irresistible.',
    'goa.stay.label': 'Where to Rest',
    'goa.stay.heading': 'Places to Stay',
    'goa.stay.zostel.title': 'Zostel Goa',
    'goa.stay.zostel.desc': 'Vibrant backpacker hostel with pool, great for meeting fellow solo travelers.',
    'goa.stay.beachside.title': 'Beachside Inn (Calangute)',
    'goa.stay.beachside.desc': 'Budget stay steps from the beach with all essential amenities.',
    'goa.review.item1': 'Goa solo was life-changing. The sunsets at Vagator are something else — met so many amazing people!',
    'goa.review.item2': 'Rented a scooter and explored every beach in 5 days. Budget-friendly if you eat local.',
    'goa.safety.title': 'Stay Safe, Travel Smart',
    'goa.safety.card1.title': 'Emergency Contacts',
    'goa.safety.card1.item1': 'Goa Police: +91-832-2424001',
    'goa.safety.card1.item2': 'Ambulance: 108',
    'goa.safety.card1.item3': 'Tourist Helpline: 1363',
    'goa.safety.card2.title': 'Beach Safety',
    'goa.safety.card2.item1': 'Swim only at flagged zones',
    'goa.safety.card2.item2': 'Avoid isolated beaches after dark',
    'goa.safety.card2.item3': 'Watch out for rip currents',
    'goa.safety.card3.title': 'Travel Tips',
    'goa.safety.card3.item1': 'Always lock your scooter',
    'goa.safety.card3.item2': 'Keep copies of your documents',
    'goa.safety.card3.item3': 'Stay hydrated — it gets very hot',
    'footer.allDestinations': 'সমস্ত গন্তব্য',
    'footer.contact': 'যোগাযোগ',
    'footer.copyright': '© 2024 SoloSafar. সমস্ত অধিকার সংরক্ষিত।',
    'footer.soloNote': 'একক ভ্রমণকারীদের জন্য ♥ সহ তৈরি',
    'English': 'ইংরেজি',
    'SoloSafar': 'SoloSafar',
    'What to Eat': 'কি খেতে হবে',
    'Estimated Budget': 'অনুমানিত বাজেট',
    'Places to Stay': 'থাকার জায়গা',
    'Per Day': 'প্রতি দিন',
    'Emergency Contacts': 'জরুরি যোগাযোগ',
    'Best Season': 'শ্রেষ্ঠ ঋতু',
    'Weather Tips': 'আবহাওয়া টিপস',
    'Travel Tips': 'ভ্রমণ টিপস',
    'Sign In - SoloSafar': 'সাইন ইন - SoloSafar',
    'Sign In to SoloSafar': 'SoloSafar-এ সাইন ইন করুন',
    'Sign Up - Solo Traveler': 'সাইন আপ - Solo Traveler',
    'Sign Up to Solo Traveler': 'Solo Traveler-এ সাইন আপ করুন',
    'Email': 'ইমেইল',
    'Password': 'পাসওয়ার্ড',
    'Confirm Password': 'পাসওয়ার্ড নিশ্চিত করুন',
    'Username': 'ব্যবহারকারীর নাম',
    'Submit': 'জমা দিন',
    'signin.pageTitle': 'সাইন ইন - SoloSafar',
    'signin.heading': 'SoloSafar-এ সাইন ইন করুন',
    'signin.emailLabel': 'ইমেইল',
    'signin.passwordLabel': 'পাসওয়ার্ড',
    'signin.submit': 'সাইন ইন',
    'signin.signupLink': 'একটি অ্যাকাউন্ট নেই? এখানে সাইন আপ করুন',
    'signup.pageTitle': 'সাইন আপ - Solo Traveler',
    'signup.heading': 'Solo Traveler-এ সাইন আপ করুন',
    'signup.usernameLabel': 'ব্যবহারকারীর নাম',
    'signup.emailLabel': 'ইমেইল',
    'signup.passwordLabel': 'পাসওয়ার্ড',
    'signup.confirmPasswordLabel': 'পাসওয়ার্ড নিশ্চিত করুন',
    'signup.submit': 'সাইন আপ',
    'signup.backToSignIn': 'এখান থেকে সাইন ইন-এ ফিরে যান',
    'feedback.pageTitle': 'ফিডব্যাক',
    'feedback.heading': 'ফিডব্যাক',
    'feedback.namePlaceholder': 'আপনার নাম',
    'feedback.feedbackPlaceholder': 'আপনার মতামত',
    'feedback.submit': 'জমা দিন',
    'Sign In': 'সাইন ইন',
    'Sign Up': 'সাইন আপ',
    'Your feedback': 'আপনার মতামত',
    "Don't have an account? Sign up here": 'একটি অ্যাকাউন্ট নেই? এখানে সাইন আপ করুন',
    'Back to Sign in here': 'এখান থেকে সাইন ইন-এ ফিরে যান',
    'Coastal Jewel of India': 'ভারতের উপকূলীয় রত্ন',
    'Places to Discover': 'আবিষ্কার করার জায়গা',
    'Getting There': 'কিভাবে পৌঁছাবেন',
    'Trip Planner': 'ভ্রমণ পরিকল্পক',
    'Local Flavours': 'স্থানীয় স্বাদ',
    'Where to Rest': 'কোথায় বিশ্রাম নেবেন',
    'Traveller Stories': 'ভ্রমণকারীর গল্প',
    'Stay Safe, Travel Smart': 'নিরাপদ থাকুন, বুদ্ধিমানের মত ভ্রমণ করুন',
    'dest.tag.1': 'সূর্য · বালি · সমুদ্র',
    'dest.tag.2': 'উচ্চ পাহাড় · মঠ',
    'dest.tag.3': 'বরফ · সাহসিকতা · উপত্যকা',
    'dest.tag.4': 'ব্যাকওয়াটার · মসলা · শান্তি',
    'dest.tag.5': 'প্রাসাদ · হ্রদ · রাজকীয়তা',
    'dest.tag.6': 'পাহাড় · মঠ · কুয়াশা',
    'dest.tag.7': 'লবণ মরুভূমি · লোকশিল্প · উৎসব',
    'dest.tag.8': 'উপজাতি · উপত্যকা · হর্নবিল',

    'dest.name.1': 'গোয়া',
    'dest.name.2': 'লেহ লাদাখ',
    'dest.name.3': 'মানালি',
    'dest.name.4': 'কেরালা',
    'dest.name.5': 'উদয়পুর',
    'dest.name.6': 'সিকিম',
    'dest.name.7': 'কচ্ছ',
    'dest.name.8': 'নাগাল্যান্ড',
    'udaipur.hero.destination': '<em>রাজকীয়</em><br>উদয়পুর',
    'page.title': 'SoloSafar — ভারত অপেক্ষা করছে',
    'Chat — SoloSafar': 'চ্যাট — SoloSafar',
    'Welcome to the chat! Ask about the best time to visit any destination.': 'চ্যাটে স্বাগতম! যে কোনো গন্তব্যে যাওয়ার সেরা সময় সম্পর্কে জিজ্ঞাসা করুন।',
    'I loved the peaceful mornings in Udaipur — the lakes are magical before sunrise.': 'আমি উদয়পুরের শান্ত সকাল খুব পছন্দ করেছি — সূর্যোদয়ের আগে হ্রদগুলো জাদুকরী।',
    'If you are going to Goa, rent a scooter and explore the quieter north beaches.': 'আপনি যদি গোয়ায় যাচ্ছেন, একটি স্কুটার ভাড়া নিন এবং শান্ত উত্তর সৈকতগুলি ঘুরে দেখুন।',
    'Just now': 'এখনই',
    'gallery.title': 'SoloSafar Gallery',
    'gallery.meta': 'No. 01 · India Vol. 1',
    'gallery.credit': 'ডিজাইন করেছেন',
    'manifesto.one': 'অফবিটে যান',
    'manifesto.two': 'নির্ভয়ে ভ্রমণ করুন',
    'manifesto.three': 'ভারত আবিষ্কার করুন',
    'manifesto.four': 'একলা কিন্তু কখনও একা নয়',
    'manifesto.five': '০৮ গন্তব্য',
    'manifesto.six': 'বলো তো সোলো',
  
    'dashboard.label': 'আপনার সোলো ড্যাশবোর্ড',
    'nav.tools': 'সরঞ্জাম',
    'nav.blog': 'ব্লগ',
    'footer.destinations': 'গন্তব্যসমূহ',
    'planner.badge': 'ভ্রমণ পরিকল্পক',
    'planner.modalTitle': 'আপনার পরবর্তী ভ্রমণসূচি তৈরি করুন',
    'planner.intro': 'আপনার গন্তব্য, ভ্রমণ তারিখ এবং শৈলী বেছে নিন। তাৎক্ষণিক দৈনিক পরিকল্পনা ও বাজেট অনুমান পান।',
    'planner.destinationLabel': 'গন্তব্য',
    'planner.startDateLabel': 'শুরুর তারিখ',
    'planner.endDateLabel': 'শেষের তারিখ',
    'planner.styleLabel': 'ভ্রমণ শৈলী',
    'planner.notesLabel': 'নোট',
    'planner.generateBtn': 'পরিকল্পনা তৈরি করুন',
    'planner.viewSavedBtn': 'সংরক্ষিত ভ্রমণ দেখুন',
    'planner.shareBtn': 'শেয়ার করুন',
    'planner.summaryTitle': 'আপনার ভ্রমণ প্রিভিউ এখানে দেখাবে।',
    'planner.summaryHint': 'গন্তব্যের হাইলাইট, বাজেট ও দৈনিক পরিকল্পনা দেখতে পরিকল্পনা তৈরি করুন।',
    'find.badge': 'ভ্রমণকারী খুঁজুন',
    'find.modalTitle': 'সহ অ্যাডভেঞ্চারারদের সাথে সংযোগ করুন',
    'find.intro': 'গন্তব্য, তারিখ এবং আগ্রহ অনুযায়ী ফিল্টার করুন।',
    'find.destinationLabel': 'গন্তব্য',
    'find.startDateLabel': 'ভ্রমণ শুরু',
    'find.endDateLabel': 'ভ্রমণ শেষ',
    'find.interestLabel': 'আগ্রহ',
    'journal.badge': 'ভ্রমণ জার্নাল',
    'journal.modalTitle': 'আপনার অ্যাডভেঞ্চার নথিভুক্ত করুন',
    'journal.intro': 'আপনার যাত্রার নোট, মেজাজ এবং স্মৃতি এক জায়গায় সংরক্ষণ করুন।',
    'journal.dateLabel': 'তারিখ',
    'journal.titleLabel': 'এন্ট্রি শিরোনাম',
    'journal.moodLabel': 'মেজাজ',
    'journal.entryLabel': 'এন্ট্রি',
    'journal.visibilityLabel': 'দৃশ্যমানতা',
    'journal.authorLabel': 'লেখকের নাম',
    'journal.locationLabel': 'অবস্থান',
    'journal.searchLabel': 'এন্ট্রি অনুসন্ধান করুন',
    'journal.saveBtn': 'এন্ট্রি সংরক্ষণ করুন',
    'journal.viewBtn': 'এন্ট্রি দেখুন',
    'journal.exportBtn': 'রপ্তানি',
    'journal.clearBtn': 'সব মুছুন',
    'journal.summaryTitle': 'জার্নাল সারসংক্ষেপ',
    'journal.summaryHint': 'আপনার চিন্তাভাবনা সংরক্ষণ করুন এবং সর্বশেষ এন্ট্রি দেখুন।',
    'budget.badge': 'বাজেট ট্র্যাকার',
    'budget.modalTitle': 'আপনার ব্যয় পর্যবেক্ষণ করুন',
    'budget.intro': 'খরচ লগ করুন, বিভাগ তুলনা করুন।',
    'budget.dateLabel': 'তারিখ',
    'budget.categoryLabel': 'বিভাগ',
    'budget.amountLabel': 'পরিমাণ',
    'budget.goalLabel': 'বাজেট লক্ষ্যমাত্রা',
    'budget.filterLabel': 'ফিল্টার করুন',
    'budget.noteLabel': 'নোট',
    'budget.setGoalBtn': 'লক্ষ্যমাত্রা নির্ধারণ করুন',
    'budget.addBtn': 'ব্যয় যোগ করুন',
    'budget.exportBtn': 'রপ্তানি',
    'budget.resetBtn': 'রিসেট',
    'budget.clearBtn': 'সব মুছুন',
    'budget.summaryTitle': 'বাজেট সারসংক্ষেপ',
    'budget.summaryHint': 'আপনার ব্যয় ট্র্যাক করুন।',
    'safety.badge': 'নিরাপত্তা সরঞ্জাম',
    'safety.modalTitle': 'জরুরি যোগাযোগ পরিচালনা করুন',
    'safety.intro': 'আপনার গুরুত্বপূর্ণ পরিচিতি কাছে রাখুন।',
    'safety.nameLabel': 'যোগাযোগের নাম',
    'safety.phoneLabel': 'ফোন নম্বর',
    'safety.relationLabel': 'সম্পর্ক',
    'safety.saveBtn': 'যোগাযোগ সংরক্ষণ করুন',
    'safety.tipsBtn': 'নিরাপত্তা টিপস',
    'safety.callPoliceBtn': 'পুলিশকে ফোন করুন',
    'safety.callAmbulanceBtn': 'অ্যাম্বুলেন্স ডাকুন',
    'safety.sosBtn': 'জরুরি SOS',
    'safety.summaryTitle': 'নিরাপত্তা চেকলিস্ট',
    'safety.summaryHint': 'ভ্রমণকালে এই টিপস মনে রাখুন।',
    'safety.checklistTitle': 'ভ্রমণ পূর্ববর্তী চেকলিস্ট',
    'safety.check1': 'পরিবারের সাথে আপনার সূচি শেয়ার করুন',
    'safety.check2': 'দূতাবাসে নিবন্ধন করুন (বিদেশ ভ্রমণে)',
    'safety.check3': 'জরুরি নম্বর সংরক্ষণ করুন',
    'safety.check4': 'ভ্রমণ বিমা নিন',
  }
};

const DEFAULT_TRANSLATIONS = TRANSLATIONS[DEFAULT_LANGUAGE];

// Map of: Normalized English Text -> Translation
let englishToTranslation = {};
let activeTranslateLang = DEFAULT_LANGUAGE;
let i18nObserver = null;

function getLangAssetUrl(filename) {
  const script = document.querySelector('script[src*="lang.js"]');
  if (script && script.src) {
    return new URL(filename, script.src).href;
  }
  return filename;
}

// Normalize quotes, dashes, spacing
function normalizeText(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/[\u201C\u201D\u201E\u201F\u2033\u2036]/g, '"') // Normalize smart double quotes
    .replace(/[\u2018\u2019\u201A\u201B\u2032\u2035]/g, "'") // Normalize smart single quotes
    .replace(/\u2013|\u2014/g, "-") // Normalize dashes/hyphens
    .replace(/\s+/g, ' ') // Normalize spaces
    .trim();
}

// Build direct mapping of English values/keys to translated values
function buildTranslationMap(lang) {
  activeTranslateLang = lang;
  englishToTranslation = {};
  const currentDict = TRANSLATIONS[lang] || {};
  const enDict = TRANSLATIONS[DEFAULT_LANGUAGE] || {};
  
  // 1. Map English values in TRANSLATIONS[en] to TRANSLATIONS[lang]
  for (const key in enDict) {
    const enVal = enDict[key];
    const transVal = currentDict[key];
    if (enVal && transVal) {
      englishToTranslation[enVal.trim()] = transVal;
      englishToTranslation[normalizeText(enVal)] = transVal;
    }
  }
  
  // 2. Map keys in currentDict directly (for destination_translations where key is English text)
  for (const key in currentDict) {
    const transVal = currentDict[key];
    if (transVal) {
      englishToTranslation[key.trim()] = transVal;
      englishToTranslation[normalizeText(key)] = transVal;
      
      // Handle quoted keys (review snippets in destination_translations.json)
      if (key.startsWith('"') && key.endsWith('"') && key.length > 2) {
        const strippedKey = key.slice(1, -1).trim();
        const strippedVal = transVal.startsWith('"') && transVal.endsWith('"') && transVal.length > 2 ? transVal.slice(1, -1) : transVal;
        englishToTranslation[strippedKey] = strippedVal;
        englishToTranslation[normalizeText(strippedKey)] = strippedVal;
      }
    }
  }
}

// Lookup translation for any English string
function getTranslationForText(text) {
  if (!text) return undefined;
  const trimmed = text.trim();
  if (englishToTranslation[trimmed] !== undefined) {
    return englishToTranslation[trimmed];
  }
  const normalized = normalizeText(trimmed);
  if (englishToTranslation[normalized] !== undefined) {
    return englishToTranslation[normalized];
  }

  return undefined;
}

function translationContainsHtml(value) {
  return typeof value === 'string' && /<[a-z][\s\S]*>/i.test(value);
}

// Prefer real translations: current lang, then Hindi, then destination text map
function resolveTranslation(lang, key, translations) {
  const enDict = TRANSLATIONS[DEFAULT_LANGUAGE] || {};
  const enValue = enDict[key];
  let value = translations[key];

  if (lang === DEFAULT_LANGUAGE) {
    return value !== undefined ? value : enValue;
  }

  if (value !== undefined && enValue !== undefined && value !== enValue) {
    return value;
  }
  if (value !== undefined && enValue === undefined) {
    return value;
  }

  if (enValue) {
    const byText = getTranslationForText(enValue);
    if (byText !== undefined && byText !== enValue) {
      return byText;
    }
  }

  return value !== undefined ? value : enValue;
}

function applyTranslationToElement(node, value) {
  if (value === undefined) return;
  if (translationContainsHtml(value)) {
    node.innerHTML = value;
  } else {
    node.textContent = value;
  }
}

const BLOCK_TRANSLATION_SELECTOR = [
  'p',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'label',
  'li',
  '.section-label',
  '.section-intro-label',
  '.hero-tagline',
  '.hero-eyebrow span',
  '.hero-destination',
  '.place-card-label',
  '.strip-label',
  '.dest-card-name',
  '.dest-card-tag',
  '.feature-title',
  '.feature-text',
  '.review-meta',
  '.essential-text h4',
  '.essential-text p',
  '.map-text h2',
  '.map-text p',
  '.dest-footer-links a',
  'nav .nav-link',
  '.btn-primary',
  '.btn-secondary',
  '.hero-stat-label',
  '.budget-label',
  '.budget-sub',
  '.tool-summary strong',
  '.tool-summary p',
  '.find-status',
  '.hindi-track span',
  'h3',
  '.field-group label',
  '.safety-card h4',
  '.safety-card li',
  '.review-form-wrap h3',
  '.find-actions button',
  '.tool-row label',
  '.tool-actions button',
  '.load-trip-btn',
  '.copy-trip-btn',
  '.delete-trip-btn',
  '.tool-delete-btn'
].join(',');

const BLOCK_SKIP_TAGS = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEXTAREA', 'OPTION', 'SELECT', 'IFRAME']);

function getBlockLookupText(el) {
  if (el.matches('.place-card-label')) {
    const num = el.querySelector('.place-card-num');
    let text = el.textContent.trim();
    if (num) text = text.replace(num.textContent.trim(), '').trim();
    return text;
  }
  return el.textContent.trim();
}

function i18nKeyResolves(lang, key, useHtml) {
  if (!key) return false;
  const translations = TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANGUAGE];
  const value = resolveTranslation(lang, key, translations);
  if (value === undefined) return false;
  const enDict = TRANSLATIONS[DEFAULT_LANGUAGE] || {};
  const enValue = enDict[key];
  if (lang === DEFAULT_LANGUAGE) return true;
  if (enValue === undefined) return value !== key;
  return value !== enValue;
}

function translateCompositeHero(el) {
  if (!el.hasAttribute('data-original-block-text')) {
    el.setAttribute('data-original-block-text', getBlockLookupText(el));
    if (el.innerHTML.trim()) {
      el.setAttribute('data-original-block-html', el.innerHTML);
    }
  }
  const em = el.querySelector('em');
  if (em) {
    const emTranslated = getTranslationForText(em.textContent.trim());
    if (emTranslated !== undefined) em.textContent = emTranslated;
  }
  el.childNodes.forEach((node) => {
    if (node.nodeType !== Node.TEXT_NODE) return;
    const trimmed = node.textContent.trim();
    if (!trimmed) return;
    const translated = getTranslationForText(trimmed);
    if (translated !== undefined) {
      node.textContent = node.textContent.replace(trimmed, translated);
    }
  });
}

function applyBlockTranslation(el, lookupText, translated) {
  if (el.matches('.place-card-label') && el.querySelector('.place-card-num')) {
    const num = el.querySelector('.place-card-num');
    el.innerHTML = `${num.outerHTML} ${translated}`;
    return;
  }
  if (el.hasAttribute('data-original-block-html') && el.querySelector('em')) {
    const em = el.querySelector('em');
    const emOriginal = em.textContent.trim();
    const emTranslated = getTranslationForText(emOriginal) || emOriginal;
    const html = el.getAttribute('data-original-block-html')
      .replace(emOriginal, emTranslated)
      .replace(lookupText, translated);
    el.innerHTML = html;
    if (el.textContent.trim() === lookupText) el.textContent = translated;
    return;
  }
  el.textContent = translated;
}

function shouldSkipBlockElement(el) {
  if (!el || el.closest('#weatherGrid, #plannerResults, #savedTripsList, #findResults, #journalEntriesList, #expenseList, #contactList, #budgetTotals, #budgetGoalSummary')) {
    return true;
  }
  const lang = localStorage.getItem(LANGUAGE_KEY) || DEFAULT_LANGUAGE;
  if (el.hasAttribute('data-skip-i18n')) return true;
  if (el.hasAttribute('data-i18n-html') && i18nKeyResolves(lang, el.getAttribute('data-i18n-html'), true)) {
    return true;
  }
  if (el.hasAttribute('data-i18n') && i18nKeyResolves(lang, el.getAttribute('data-i18n'), false)) {
    return true;
  }
  const i18nAncestor = el.closest('[data-i18n-html], [data-i18n]');
  if (i18nAncestor) {
    if (i18nAncestor.hasAttribute('data-i18n-html') && i18nKeyResolves(lang, i18nAncestor.getAttribute('data-i18n-html'), true)) {
      return true;
    }
    if (i18nAncestor.hasAttribute('data-i18n') && i18nKeyResolves(lang, i18nAncestor.getAttribute('data-i18n'), false)) {
      return true;
    }
  }
  if (BLOCK_SKIP_TAGS.has(el.tagName)) {
    return true;
  }
  return false;
}

function restoreBlockElements() {
  document.querySelectorAll('[data-original-block-text]').forEach(el => {
    const originalText = el.getAttribute('data-original-block-text');
    const originalHtml = el.getAttribute('data-original-block-html');
    if (originalHtml) {
      el.innerHTML = originalHtml;
    } else if (originalText) {
      el.textContent = originalText;
    }
  });
}

function translateBlockElements(lang) {
  if (lang === DEFAULT_LANGUAGE) {
    restoreBlockElements();
    return;
  }

  document.querySelectorAll(BLOCK_TRANSLATION_SELECTOR).forEach(el => {
    if (shouldSkipBlockElement(el)) return;

    if (el.matches('.hero-destination') && !el.hasAttribute('data-i18n-html')) {
      translateCompositeHero(el);
      return;
    }

    const childTags = [...el.children].map(child => child.tagName);
    const onlyInlineMarkup = childTags.every(tag => ['EM', 'STRONG', 'SPAN', 'BR'].includes(tag));
    const isPlaceCard = el.matches('.place-card-label');
    if (el.children.length && !onlyInlineMarkup && !isPlaceCard) return;

    if (!el.hasAttribute('data-original-block-text')) {
      el.setAttribute('data-original-block-text', getBlockLookupText(el));
      if ((onlyInlineMarkup || isPlaceCard) && el.innerHTML.trim()) {
        el.setAttribute('data-original-block-html', el.innerHTML);
      }
    }

    const lookupText = el.getAttribute('data-original-block-text');
    const translated = getTranslationForText(lookupText);
    if (translated === undefined || translated === lookupText) return;

    applyBlockTranslation(el, lookupText, translated);
  });
}

function translateUntaggedButtons(lang) {
  if (lang === DEFAULT_LANGUAGE) {
    document.querySelectorAll('[data-original-btn]').forEach(btn => {
      btn.textContent = btn.getAttribute('data-original-btn');
    });
    return;
  }
  document.querySelectorAll(
    'button:not([data-i18n]), .find-actions button, .tool-delete-btn, .load-trip-btn, .copy-trip-btn, .delete-trip-btn'
  ).forEach(btn => {
    if (btn.closest('script, style, noscript')) return;
    if (!btn.getAttribute('data-original-btn')) {
      btn.setAttribute('data-original-btn', btn.textContent.trim());
    }
    const original = btn.getAttribute('data-original-btn');
    const translated = getTranslationForText(original);
    if (translated !== undefined) btn.textContent = translated;
  });
}

function translateSelectOptions(lang) {
  const translations = TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANGUAGE];
  document.querySelectorAll('select').forEach(select => {
    [...select.options].forEach(option => {
      if (option.hasAttribute('data-i18n')) {
        const key = option.getAttribute('data-i18n');
        const value = resolveTranslation(lang, key, translations);
        if (value !== undefined) option.textContent = value;
        return;
      }
      if (!option.getAttribute('data-original-option')) {
        option.setAttribute('data-original-option', option.textContent);
      }
      const original = option.getAttribute('data-original-option');
      const translated = getTranslationForText(original.trim());
      if (translated !== undefined) {
        option.textContent = translated;
      } else {
        option.textContent = original;
      }
    });
  });
}

function updateMarquee(lang) {
  const translations = TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANGUAGE];
  const text = resolveTranslation(lang, 'marquee.tagline', translations);
  if (!text) return;
  document.querySelectorAll('.hindi-track span').forEach(span => {
    span.textContent = text;
  });
}

// Translate individual text nodes losslessly (caching original value in node._originalValue)
function translateTextNodes() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      if (['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEXTAREA'].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
      if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  let node = walker.nextNode();
  while (node) {
    if (node._originalValue === undefined) {
      node._originalValue = node.nodeValue;
    }
    const original = node._originalValue;
    const trimmed = original.trim();
    const translated = getTranslationForText(trimmed);
    if (translated !== undefined) {
      node.nodeValue = original.replace(trimmed, translated);
    } else {
      node.nodeValue = original;
    }
    node = walker.nextNode();
  }
}

// Translate all elements with data-i18n attributes
function translateI18nAttributes(lang, translations) {
  document.querySelectorAll('[data-i18n]').forEach(node => {
    const key = node.getAttribute('data-i18n');
    if (!key) return;
    const value = resolveTranslation(lang, key, translations);
    applyTranslationToElement(node, value);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(node => {
    const key = node.getAttribute('data-i18n-placeholder');
    const value = resolveTranslation(lang, key, translations);
    if (value === undefined) return;
    node.placeholder = value;
  });

  document.querySelectorAll('[data-i18n-value]').forEach(node => {
    const key = node.getAttribute('data-i18n-value');
    const value = resolveTranslation(lang, key, translations);
    if (value === undefined) return;
    node.value = value;
  });

  document.querySelectorAll('[data-i18n-html]').forEach(node => {
    const key = node.getAttribute('data-i18n-html');
    const value = resolveTranslation(lang, key, translations);
    if (value === undefined) return;
    node.innerHTML = value;
  });
}

// Translate standard placeholders, titles, and submit buttons dynamically
function translateAttributes() {
  // 1. Placeholders
  document.querySelectorAll('[placeholder]').forEach(el => {
    if (el.hasAttribute('data-i18n-placeholder')) return;
    const original = el.getAttribute('data-original-placeholder') || el.placeholder;
    if (!el.hasAttribute('data-original-placeholder')) {
      el.setAttribute('data-original-placeholder', original);
    }
    const translated = getTranslationForText(original);
    if (translated !== undefined) {
      el.placeholder = translated;
    } else {
      el.placeholder = original;
    }
  });

  // 2. Titles
  document.querySelectorAll('[title]').forEach(el => {
    if (el.hasAttribute('data-i18n-title')) return;
    const original = el.getAttribute('data-original-title') || el.title;
    if (!el.hasAttribute('data-original-title')) {
      el.setAttribute('data-original-title', original);
    }
    const translated = getTranslationForText(original);
    if (translated !== undefined) {
      el.title = translated;
    } else {
      el.title = original;
    }
  });

  // 3. Submit buttons
  document.querySelectorAll('input[type="submit"], input[type="button"]').forEach(el => {
    if (el.hasAttribute('data-i18n-value')) return;
    const original = el.getAttribute('data-original-value') || el.value;
    if (!el.hasAttribute('data-original-value')) {
      el.setAttribute('data-original-value', original);
    }
    const translated = getTranslationForText(original);
    if (translated !== undefined) {
      el.value = translated;
    } else {
      el.value = original;
    }
  });
}

// Perform translation immediately
function translatePageImmediate(language) {
  const translations = TRANSLATIONS[language] || TRANSLATIONS[DEFAULT_LANGUAGE];
  document.documentElement.lang = language;
  
  // Re-build direct text-to-translated maps
  buildTranslationMap(language);
  
  // Translate page title
  const currentTitle = document.title;
  if (!window._originalTitle) window._originalTitle = currentTitle;
  const translatedTitle = getTranslationForText(window._originalTitle);
  document.title = translatedTitle !== undefined ? translatedTitle : window._originalTitle;

  // Translate explicit attributes
  translateI18nAttributes(language, translations);

  // Translate block-level copy on pages without data-i18n (e.g. Kerala, Manali)
  translateBlockElements(language);

  // Translate standard text nodes (remaining snippets)
  translateTextNodes();

  // Translate standard attributes (placeholders, titles, values)
  translateAttributes();

  // Translate select options and hero marquee
  translateSelectOptions(language);
  translateUntaggedButtons(language);
  updateMarquee(language);

  // Dispatch custom event for dynamic components
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language, translations } }));
}

function tt(text) {
  if (!text) return text;
  const translated = getTranslationForText(String(text).trim());
  return translated !== undefined ? translated : text;
}

function t(key, fallback) {
  const lang = localStorage.getItem(LANGUAGE_KEY) || DEFAULT_LANGUAGE;
  const translations = TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANGUAGE];
  return resolveTranslation(lang, key, translations) || fallback || key;
}

function refreshI18n() {
  const lang = localStorage.getItem(LANGUAGE_KEY) || DEFAULT_LANGUAGE;
  translatePageImmediate(lang);
}

function patchNativeDialogs() {
  if (window._soloSafarDialogsPatched) return;
  window._soloSafarDialogsPatched = true;
  const nativeAlert = window.alert.bind(window);
  const nativeConfirm = window.confirm.bind(window);
  window.alert = (message) => nativeAlert(tt(message));
  window.confirm = (message) => nativeConfirm(tt(message));
}

// Perform translation with smooth fade transition
function translatePageSmooth(language) {
  const html = document.documentElement;
  html.style.opacity = '0.5';
  html.style.transition = 'opacity 250ms ease-in-out';
  
  setTimeout(() => {
    translatePageImmediate(language);
    html.style.opacity = '1';
  }, 125);
}

// MutationObserver to capture and translate dynamically generated AJAX/DOM elements on the fly
function startMutationObserver() {
  if (i18nObserver) i18nObserver.disconnect();

  i18nObserver = new MutationObserver((mutations) => {
    // Temporarily stop observing so our own text replacements don't loop infinitely
    i18nObserver.disconnect();

    const currentLang = localStorage.getItem(LANGUAGE_KEY) || DEFAULT_LANGUAGE;
    const translations = TRANSLATIONS[currentLang] || TRANSLATIONS[DEFAULT_LANGUAGE];

    for (const mutation of mutations) {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            translateElementAndChildren(node, translations);
          } else if (node.nodeType === Node.TEXT_NODE) {
            translateSingleTextNode(node);
          }
        });
      }
    }
    if (currentLang !== DEFAULT_LANGUAGE) {
      translateBlockElements(currentLang);
      translateUntaggedButtons(currentLang);
    }

    i18nObserver.observe(document.body, { childList: true, subtree: true });
  });

  i18nObserver.observe(document.body, { childList: true, subtree: true });
}

function translateSingleTextNode(node) {
  if (['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEXTAREA'].includes(node.parentElement?.tagName)) return;
  if (node._originalValue === undefined) {
    node._originalValue = node.nodeValue;
  }
  const original = node._originalValue;
  const trimmed = original.trim();
  const translated = getTranslationForText(trimmed);
  if (translated !== undefined) {
    node.nodeValue = original.replace(trimmed, translated);
  }
}

function translateElementAndChildren(element, translations) {
  // If the element itself is script/style, ignore
  if (['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEXTAREA'].includes(element.tagName)) return;

  // 1. Apply attribute translation (placeholders, titles)
  if (element.hasAttribute('placeholder') && !element.hasAttribute('data-i18n-placeholder')) {
    const original = element.getAttribute('data-original-placeholder') || element.placeholder;
    if (!element.hasAttribute('data-original-placeholder')) {
      element.setAttribute('data-original-placeholder', original);
    }
    const translated = getTranslationForText(original);
    if (translated !== undefined) element.placeholder = translated;
  }
  if (element.hasAttribute('title') && !element.hasAttribute('data-i18n-title')) {
    const original = element.getAttribute('data-original-title') || element.title;
    if (!element.hasAttribute('data-original-title')) {
      element.setAttribute('data-original-title', original);
    }
    const translated = getTranslationForText(original);
    if (translated !== undefined) element.title = translated;
  }

  // 2. Walk text nodes inside this element
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      if (['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEXTAREA'].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
      if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  let node = walker.nextNode();
  while (node) {
    translateSingleTextNode(node);
    node = walker.nextNode();
  }
}

// Fetch external destination translations database asynchronously and boot
function mergeExternalTranslations(payload) {
  if (!payload || typeof payload !== 'object') return;
  for (const lang in payload) {
    if (!TRANSLATIONS[lang]) TRANSLATIONS[lang] = {};
    Object.assign(TRANSLATIONS[lang], payload[lang]);
  }
}

async function initLanguageSelector() {
  const selector = document.getElementById('languageSelect');
  const stored = localStorage.getItem(LANGUAGE_KEY) || DEFAULT_LANGUAGE;

  patchNativeDialogs();
  window.t = t;
  window.tt = tt;
  window.refreshI18n = refreshI18n;
  window.getTranslationForText = getTranslationForText;
  window.translatePageImmediate = translatePageImmediate;

  if (selector) selector.value = stored;

  if (window.__SOLOSAFAR_DEST_TRANSLATIONS__) {
    mergeExternalTranslations(window.__SOLOSAFAR_DEST_TRANSLATIONS__);
  }

  // Translate with built-in keys + bundled destination phrases
  translatePageImmediate(stored);

  try {
    const response = await fetch(getLangAssetUrl('destination_translations.json'));
    if (response.ok) {
      const destTranslations = await response.json();
      for (const lang in destTranslations) {
        if (!TRANSLATIONS[lang]) TRANSLATIONS[lang] = {};
        Object.assign(TRANSLATIONS[lang], destTranslations[lang]);
      }
    }
  } catch (e) {
    console.warn('Destination translations could not be loaded dynamically', e);
  }

  try {
    const uiResponse = await fetch(getLangAssetUrl('ui-extra.json'));
    if (uiResponse.ok) {
      const uiExtra = await uiResponse.json();
      for (const lang in uiExtra) {
        if (!TRANSLATIONS[lang]) TRANSLATIONS[lang] = {};
        Object.assign(TRANSLATIONS[lang], uiExtra[lang]);
      }
    }
  } catch (e) {
    console.warn('UI extra translations could not be loaded', e);
  }

  // Re-translate with merged destination phrase dictionary
  translatePageImmediate(stored);

  if (selector) {
    selector.addEventListener('change', () => {
      const selected = selector.value;
      localStorage.setItem(LANGUAGE_KEY, selected);
      translatePageSmooth(selected);
    });
  }

  startMutationObserver();
}

function bootLanguageSelector() {
  initLanguageSelector();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootLanguageSelector);
} else {
  bootLanguageSelector();
}
