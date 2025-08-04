const mongoose = require('mongoose');

const trainSchema = new mongoose.Schema({
  trainNumber: String,
  trainName: String,
  from: String,
  to: String,
  date: Date,
  departureTime: String,
  totalSeats: Number,
  availableSeats: Number,
  fare: Number
});

module.exports = mongoose.model('Train', trainSchema);
