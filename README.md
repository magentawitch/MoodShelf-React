# 📚 MoodShelf

**MoodShelf** is a simple, cozy book recommendation app that suggests fiction titles based on your current **mood** — powered entirely in your browser using the [Google Books API](https://developers.google.com/books/docs/v1/using).

No backend. No data tracking. Just your vibe and a good read.

---

## 🌟 Features

- 🔍 Search books by **mood-based keywords** (e.g., "hopeful", "melancholic", "cozy")
- 📖 Displays fiction book recommendations using the Google Books API
- 💡 API key is stored securely in your browser (`localStorage`)
- 📱 Fully responsive — works on mobile and desktop
- ✨ Clean and soft UI with a hint of personality

---

## 🧠 Why it needs an API key

This app is **frontend-only**, meaning it doesn’t have a server to safely hide an API key. To use it, you’ll need to enter your own (free!) **Google Books API key** the first time.

Your key is:

✅ Stored only in your browser  
✅  Never sent to any server  
✅  Never shared with anyone  

---

## 🔐 How to get a Google Books API key

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or use an existing one)
3. Enable the **Books API** for your project
4. Go to **Credentials → Create Credentials → API Key**
5. Copy the key and paste it into the app modal when prompted

👉 Need help? Follow this [official Google guide](https://developers.google.com/books/docs/v1/using#APIKey)

---

### 🛠️ Tech Stack
- React
- Javascript
- CSS Modules
- Vite
- Google Books API
- Datamuse API

---

### 📦 How to Run Locally

```bash
npm install
npm run dev
```
