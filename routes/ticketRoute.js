const express = require("express");
const router = express.Router();
const { bookTicket, getTickets } = require("../controllers/ticketController");
const { isAuthenticated } = require("../middlewares/authMiddleware");

router.post("/book", isAuthenticated, bookTicket);
router.get("/dashboard", isAuthenticated, getTickets);

module.exports = router;
