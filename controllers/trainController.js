const Train = require("../models/Train");

exports.searchTrains = async (req, res) => {
  const { from, to } = req.query;
  const trains = await Train.find({ from, to });
  res.render("trains", { trains });
};
