# 🛡 SeniorShield AI
AI-based Phishing Detection System  
Realtime Cloud Monitoring + Admin Dashboard + SOC Mode  

---

# 🚀 FITUR

✅ AI Text Scanner  
✅ Realtime Firebase Database  
✅ Admin Login (Firebase Auth)  
✅ SOC Dashboard  
✅ Senior Mode UI  
✅ Threat Level Monitoring  

---

# 📁 STRUKTUR PROJECT

senior-shield-ai/
│
├── firebase.json
├── .firebaserc
├── README.md
│
├── public/
│   ├── index.html
│   ├── login.html
│   ├── dashboard.html
│   ├── soc.html
│   │
│   ├── css/
│   │     └── style.css
│   │
│   └── js/
│         ├── firebase-config.js
│         ├── auth.js
│         ├── ai-engine.js
│         ├── dashboard.js
│         └── soc.js

---

# 🧩 STEP 1 — BUAT PROJECT FIREBASE

1. Buka https://console.firebase.google.com
2. Klik "Add Project"
3. Buat project baru
4. Masuk ke menu:
   → Authentication → Enable Email/Password
   → Realtime Database → Create Database (Test Mode)

---

# 🔑 STEP 2 — MASUKKAN FIREBASE CONFIG

Buka file:

public/js/firebase-config.js

Ganti bagian ini:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID"
};
