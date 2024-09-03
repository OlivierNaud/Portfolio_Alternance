const Sequelize = require("sequelize");
const Models = require("../models");

module.exports.getAccueil = async (req, res) => {
  const result = await Models["init-models"].accueil.findAll({
    include: [{ model: Models.image, as: "id_image_accueil" }],
  });
  res.status(200).json(result);
};

module.exports.setAccueil = async (req, res) => {
  if (!req.body.id_image) {
    res.status(400).json({ message: "Merci d'ajoputer un message" });
  }

  const accueil = await accueil.create({
    id_image: req.body.id_image,
  });
  res.status(200).json(accueil);
};
