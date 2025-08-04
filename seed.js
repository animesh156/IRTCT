// seed.js
require("dotenv").config();
const connectDB = require("./config/db"); // your existing db connection file
const Train = require("./models/Train");

const trains = [
  {
    trainNumber: "12301",
    trainName: "Rajdhani Express",
    from: "Delhi",
    to: "Mumbai",
    date: new Date("2025-08-10"),
    departureTime: "16:00",
    totalSeats: 100,
    availableSeats: 100,
    fare: 1500
  },
  {
    trainNumber: "12138",
    trainName: "Punjab Mail",
    from: "Delhi",
    to: "Amritsar",
    date: new Date("2025-08-11"),
    departureTime: "06:30",
    totalSeats: 120,
    availableSeats: 120,
    fare: 900
  },
  {
    trainNumber: "12801",
    trainName: "Purushottam Express",
    from: "Puri",
    to: "Delhi",
    date: new Date("2025-08-12"),
    departureTime: "22:00",
    totalSeats: 150,
    availableSeats: 150,
    fare: 1800
  },
  {
    trainNumber: "12626",
    trainName: "Kerala Express",
    from: "Chennai",
    to: "Delhi",
    date: new Date("2025-08-13"),
    departureTime: "09:45",
    totalSeats: 130,
    availableSeats: 130,
    fare: 2000
  },
  {
    trainNumber: "12952",
    trainName: "MMCT Rajdhani",
    from: "Mumbai",
    to: "Delhi",
    date: new Date("2025-08-14"),
    departureTime: "17:30",
    totalSeats: 110,
    availableSeats: 110,
    fare: 1600
  },
  {
    trainNumber: "12296",
    trainName: "Sanghamitra Express",
    from: "Bangalore",
    to: "Patna",
    date: new Date("2025-08-15"),
    departureTime: "14:10",
    totalSeats: 140,
    availableSeats: 140,
    fare: 1900
  },
  {
    trainNumber: "12615",
    trainName: "Grand Trunk Express",
    from: "Chennai",
    to: "New Delhi",
    date: new Date("2025-08-16"),
    departureTime: "19:00",
    totalSeats: 160,
    availableSeats: 160,
    fare: 2100
  },
  {
    trainNumber: "12426",
    trainName: "Kerala SF Express",
    from: "Trivandrum",
    to: "New Delhi",
    date: new Date("2025-08-17"),
    departureTime: "11:20",
    totalSeats: 125,
    availableSeats: 125,
    fare: 2200
  },
  {
    trainNumber: "12392",
    trainName: "Shabd Bhedi Express",
    from: "Gorakhpur",
    to: "Kolkata",
    date: new Date("2025-08-18"),
    departureTime: "05:45",
    totalSeats: 105,
    availableSeats: 105,
    fare: 950
  },
  {
    trainNumber: "22917",
    trainName: "Haridwar Express",
    from: "Ahmedabad",
    to: "Haridwar",
    date: new Date("2025-08-19"),
    departureTime: "13:00",
    totalSeats: 90,
    availableSeats: 90,
    fare: 1350
  },
  {
    trainNumber: "12002",
    trainName: "Bhopal Shatabdi",
    from: "Bhopal",
    to: "Delhi",
    date: new Date("2025-08-20"),
    departureTime: "15:15",
    totalSeats: 100,
    availableSeats: 100,
    fare: 1400
  },
  {
    trainNumber: "12723",
    trainName: "Telangana Express",
    from: "Hyderabad",
    to: "New Delhi",
    date: new Date("2025-08-21"),
    departureTime: "06:00",
    totalSeats: 135,
    availableSeats: 135,
    fare: 1800
  },
  {
    trainNumber: "12839",
    trainName: "Howrah Mail",
    from: "Mumbai",
    to: "Howrah",
    date: new Date("2025-08-22"),
    departureTime: "20:00",
    totalSeats: 125,
    availableSeats: 125,
    fare: 1750
  },
  {
    trainNumber: "12437",
    trainName: "Rajdhani Express",
    from: "Secunderabad",
    to: "New Delhi",
    date: new Date("2025-08-23"),
    departureTime: "17:00",
    totalSeats: 150,
    availableSeats: 150,
    fare: 2000
  },
  {
    trainNumber: "12244",
    trainName: "Duronto Express",
    from: "Nagpur",
    to: "Kolkata",
    date: new Date("2025-08-24"),
    departureTime: "18:30",
    totalSeats: 95,
    availableSeats: 95,
    fare: 1600
  }
];


const insertTrains = async () => {
  try {
    await connectDB(); // uses your existing db.js connection
    await Train.deleteMany(); // optional: clear old train data
    await Train.insertMany(trains);
    console.log("✅ Dummy train data inserted into MongoDB.");
    process.exit();
  } catch (error) {
    console.error("❌ Error inserting train data:", error);
    process.exit(1);
  }
};

insertTrains();
