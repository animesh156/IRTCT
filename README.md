# 🚆 IRCTC-Style Train Ticket Booking System

A full-stack train ticket booking web application built using Node.js, Express, MongoDB, and EJS. This project allows users to register/login, search trains, book or cancel tickets, and view their bookings via a clean EJS-based UI.

---

## 🔧 Features

- ✅ User Registration and Login (session-based)
- 🔍 Train Search (from → to)
- 🎟️ Book Tickets (if seats available)
- ❌ Cancel Booked Tickets
- 📅 View Upcoming Bookings
- 📄 Clean EJS Templates + CSS styling
- ⚙️ Modular Code: Controllers, Routes, Config, Models, Middleware

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Frontend**: EJS Templates + CSS
- **Session**: express-session
- **Password Security**: bcrypt

---

## 📁 Project Structure

```
train-booking-app/
├── config/
│   └── db.js               # MongoDB connection
├── controllers/
│   ├── authController.js   # Login/Register/Logout
│   ├── trainController.js  # Search/Book/Cancel
├── middleware/
│   └── auth.js             # Route protection
├── models/
│   ├── User.js
│   ├── Train.js
│   └── Ticket.js
├── public/
│   └── css/style.css       # UI styling
├── routes/
│   ├── authRoutes.js
│   └── trainRoutes.js
├── views/
│   ├── dashboard.ejs
│   ├── login.ejs
│   ├── register.ejs
│   ├── trains.ejs
│   └── partials/
├── seed/
│   └── seedTrains.js       # Add dummy train data
├── .env
├── app.js
└── package.json
```

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/IRCTC.git
cd train-booking-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Add Environment Variables

Create a `.env` file in the root:

```env
MONGO_URI=mongodb://localhost:27017/trainBooking
SESSION_SECRET=your-secret
PORT=8090
```

### 4. Seed Dummy Trains (Optional)

```bash
node seed/seedTrains.js
```

### 5. Start the Server

```bash
npm run server

```

Server runs at [http://localhost:8090](http://localhost:8090)

---


## 📄 License

This project is licensed under the MIT License.