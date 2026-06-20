# 🍽️ TasteGrid Recipes API

A Node.js & Express API backend that powers the TasteGrid recipe sharing platform, enabling recipe CRUD operations and ratings.

---

## 📌 Overview
TasteGrid-Api is a structured RESTful backend designed for food communities. Users can register accounts, publish recipes, filter dishes by ingredients, and leave comments or star reviews. The architecture separates routing, business layers, and MongoDB persistence.

---

## ⚙️ Tech Stack

| Technology | Purpose |
| ---------- | ------- |
| Node.js    | JavaScript runtime |
| Express.js | API routing framework |
| MongoDB    | NoSQL database storage |
| Mongoose   | Schema data modeling |
| JWT        | Secure user login tokens |

---

## 🚀 Core Features
* 🍕 **Recipe Management:** Full CRUD operations for recipes (with image URLs, ingredients, steps).
* 🔐 **Secure Logins:** Password hashing with bcrypt and route access via JWT.
* 💬 **Social Actions:** Like, comment, and rate recipe listings.
* 🔍 **Recipe Filtering:** Search recipes by name, cook time, or ingredients.

---

## ⚙️ Setup & Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Sayed-Herzallah/TasteGrid-Api.git
   ```
2. Install npm dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables (create `.env` file):
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```
4. Run server locally:
   ```bash
   npm run dev
   ```

---

## 👨‍💻 Author
**Sayed Herzallah**  
Full Stack Developer
