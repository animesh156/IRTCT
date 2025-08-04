const express = require("express");
const router = express.Router();
const { searchTrains } = require("../controllers/trainController");
const { isAuthenticated } = require("../middlewares/authMiddleware");

router.get("/search", isAuthenticated, searchTrains);

module.exports = router;
