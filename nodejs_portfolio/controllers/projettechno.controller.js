const Sequelize = require("sequelize");
const Models = require("../models");

module.exports.getProjettechno = async (req, res) => {
  const result = await Models["init-models"].projet_techno.findAll({
    include: [
      { model: Models.projet, as: "id_projet_projet" },
      { model: Models.technologie, as: "id_technologie_technologie" },
    ],
  });
  res.status(200).json(result);
};

module.exports.setProjettechno = async (req, res) => {
  if (!req.body.id_projet || !req.body.id_technologie) {
    res.status(400).json({ message: "Merci d'ajoputer un message" });
  }

  const projettechno = await projettechno.create({
    id_projet: req.body.id_projet,
    id_technologie: req.body.id_technologie,
  });
  res.status(200).json(projettechno);
};
