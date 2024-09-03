const Sequelize = require("sequelize");
const Models = require("../models");

module.exports.getImage = async (req, res) => {
  const image = await Models.image.findAll();
  res.status(200).json(image);
};

module.exports.setImage = (req, res, next) => {
  const thingObject = req.file.filename;
  const thing = new Models.image({
    nom: req.body.nom,
    img: thingObject,
    imageUrl: `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`,
  });
  thing
    .save()
    .then(() => res.status(201).json({ message: "Objet enregistré" }))
    .catch((error) => res.status(400).json({ error }));
};

module.exports.updateImage = (req, res, next) => {
  const id = req.params.id; // Récupère l'ID de l'image à mettre à jour

  Models.image
    .findByPk(id)
    .then((thing) => {
      if (!thing) {
        return res.status(404).json({ message: "Image non trouvée" });
      }

      // Si une nouvelle image est envoyée, on met à jour le champ correspondant
      if (req.file) {
        const newImageUrl = `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`;
        thing.img = req.file.filename; // Mettre à jour le nom du fichier
        thing.imageUrl = newImageUrl; // Mettre à jour l'URL de l'image
      }

      // Mettre à jour d'autres champs si nécessaire
      if (req.body.nom) {
        thing.nom = req.body.nom;
      }

      // Sauvegarder les changements
      return thing.save();
    })
    .then(() =>
      res.status(200).json({ message: "Image mise à jour avec succès" })
    )
    .catch((error) => res.status(400).json({ error }));
};
