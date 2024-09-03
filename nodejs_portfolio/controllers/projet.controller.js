const Sequelize = require("sequelize");
const Models = require("../models");

module.exports.getProjet = async (req, res) => {
  const projet = await Models["init-models"].projet.findAll({
    include: [
      { model: Models.image, as: "id_image_image" },
      { model: Models.tagprojet, as: "id_tagProjet_tagprojet" },
    ],
  });
  res.status(200).json(projet);
};

module.exports.setProjet = async (req, res) => {
  if (!req.body.id_image) {
    res.status(400).json({ message: "Merci d'ajoputer un message" });
  }

  const projet = await Models.projet.create({
    nom: req.body.nom,
    lien: req.body.lien,
    resume: req.body.resume,
    id_image: req.body.id_image,
    id_tagProjet: req.body.id_tagProjet,
  });
  res.status(200).json(projet);
};
