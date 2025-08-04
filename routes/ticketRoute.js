const express = require("express");
const router = express.Router();
const { bookTicket, getTickets, cancelTicket } = require("../controllers/ticketController");
const { isAuthenticated } = require("../middlewares/authMiddleware");

router.post("/book", isAuthenticated, bookTicket);
router.get("/dashboard", isAuthenticated, getTickets);
router.post("/cancel", isAuthenticated, cancelTicket);

module.exports = router;
