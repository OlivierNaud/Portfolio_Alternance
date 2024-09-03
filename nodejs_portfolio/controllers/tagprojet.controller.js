const Sequelize = require("sequelize");
const Models = require("../models");

module.exports.getTagProjet = async (req, res) => {
  const tagprojet = await Models.tagprojet.findAll();
  res.status(200).json(tagprojet);
};

module.exports.setTagProjet = async (req, res) => {
  if (!req.body.tag) {
    res.status(400).json({ message: "Merci d'ajoputer un message" });
  }

  const tagprojet = await Models.tagprojet.create({
    tag: req.body.tag,
  });
  res.status(200).json(tagprojet);
};
