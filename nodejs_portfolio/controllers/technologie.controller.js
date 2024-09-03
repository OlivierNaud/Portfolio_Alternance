const Sequelize = require("sequelize");
const Models = require("../models");

module.exports.getTechnologie = async (req, res) => {
  const technologie = await Models["init-models"].technologie.findAll({
    include: [
      { model: Models.image, as: "imagetechno" },
      { model: Models.niveautechno, as: "niveautechno_techno" },
    ],
  });
  res.status(200).json(technologie);
};

module.exports.setTechnologie = async (req, res) => {
  if (!req.body.nom) {
    res.status(400).json({ message: "Merci d'ajoputer un message" });
  }

  const technologie = await Models.technologie.create({
    nom: req.body.nom,
    id_image: req.body.id_image,
    id_niveauTechno: req.body.id_niveauTechno,
  });
  res.status(200).json(technologie);
};
