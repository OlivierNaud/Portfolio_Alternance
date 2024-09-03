const Sequelize = require("sequelize");
const Models = require("../models");

module.exports.getNiveauTechno = async (req, res) => {
  const niveautechno = await Models.niveautechno.findAll();
  res.status(200).json(niveautechno);
};

module.exports.setNiveauTechno = async (req, res) => {
  if (!req.body.niveau) {
    res.status(400).json({ message: "Merci d'ajoputer un message" });
  }

  const niveautechno = await Models.niveautechno.create({
    niveau: req.body.niveau,
    rang: req.body.rang,
  });
  res.status(200).json(niveautechno);
};
