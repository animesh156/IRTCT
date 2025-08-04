const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  const existing = await User.findOne({ email });
  if (existing) return res.send("User already exists");

  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashed });
  req.session.userId = user._id;
  res.redirect("/dashboard");
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password)))
    return res.send("Invalid credentials");
  req.session.userId = user._id;
  res.redirect("/dashboard");
};

exports.logout = (req, res) => {
  req.session.destroy(() => res.redirect("/login"));
};
