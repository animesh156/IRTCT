const express = require('express')
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT || 8090;
const authRoute = require('./routes/authRoute');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');


// Connect to MongoDB
connectDB();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
