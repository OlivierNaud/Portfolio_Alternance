const Sequelize = require("sequelize");
const Models = require("../models");

module.exports.getInfoPerso = async (req, res) => {
  const infoPerso = await Models.infoperso.findAll({
    include: [{ model: Models.image, as: "imageinfo" }],
  });
  res.status(200).json(infoPerso);
};

module.exports.setInfoPerso = async (req, res) => {
  if (!req.body.nom) {
    res.status(400).json({ message: "Merci d'ajoputer un message" });
  }

  const infoPerso = await Models.infoperso.create({
    nom: req.body.nom,
    prenom: req.body.prenom,
    telephone: req.body.telephone,
    metier: req.body.metier,
    adresse_mail: req.body.adresse_mail,
    resume: req.body.resume,
    linkedin: req.body.linkedin,
    github: req.body.github,
    id_image: req.body.id_image,
  });
  res.status(200).json(infoPerso);
};
