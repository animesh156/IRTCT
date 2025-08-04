const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  try {
    if (!req.cookies || !req.cookies.jwt) {
      return res.status(401).json({ error: "Not authorized, token failed" });
    }

    const token = req.cookies.jwt;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.userId).select("-password");

    if (!req.user) {
      return res.status(401).json({ error: "Not authorized, User not found" });
    }

    next();
  } catch (error) {
    console.log("Auth error:", error);
    if (error.name === "TokenExpiredError") {
      return res
        .status(401)
        .json({ error: "Token expired, please log in again" });
    }
    return res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = { protect };