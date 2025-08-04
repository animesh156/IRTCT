const Ticket = require("../models/Ticket");
const Train = require("../models/Train");

exports.bookTicket = async (req, res) => {
  const { trainId } = req.body;

  const train = await Train.findById(trainId);
  if (!train) return res.status(404).send("Train not found");

  if (train.availableSeats <= 0) {
    return res.send("No seats available");
  }

  // Book ticket
  await Ticket.create({ userId: req.session.userId, trainId });

  // Decrement available seats
  train.availableSeats -= 1;
  await train.save();

  res.redirect("/dashboard");
};

exports.getTickets = async (req, res) => {
  const tickets = await Ticket.find({ userId: req.session.userId }).populate("trainId");
  res.render("dashboard", { tickets });
};
