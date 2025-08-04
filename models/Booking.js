const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  train: { type: mongoose.Schema.Types.ObjectId, ref: 'Train' },
  seatsBooked: Number,
  totalFare: Number,
  createdAt: { type: Date, default: Date.now },
  status: { type: String, default: 'booked' }
});

module.exports = mongoose.model('Booking', bookingSchema);
