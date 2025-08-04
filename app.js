const express = require("express");
const session = require("express-session");
const connectDB = require("./config/db");
const app = express();
require("dotenv").config();

// DB connection
connectDB();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(session({ secret: "secret", resave: false, saveUninitialized: false }));

// Set EJS
app.set("view engine", "ejs");

// Routes
app.use("/", require("./routes/authRoute"));
app.use("/", require("./routes/trainRoute"));
app.use("/", require("./routes/ticketRoute"));

// Root
app.get("/", (req, res) => res.render("index"));

const PORT = process.env.PORT || 8090;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
