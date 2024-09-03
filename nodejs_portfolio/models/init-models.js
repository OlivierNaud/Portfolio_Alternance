var DataTypes = require("sequelize").DataTypes;
var _accueil = require("./accueil");
var _formulaire = require("./formulaire");
var _image = require("./image");
var _infoperso = require("./infoperso");
var _niveautechno = require("./niveautechno");
var _projet = require("./projet");
var _projet_techno = require("./projet_techno");
var _tagprojet = require("./tagprojet");
var _technologie = require("./technologie");

function initModels(sequelize) {
  var accueil = _accueil(sequelize, DataTypes);
  var formulaire = _formulaire(sequelize, DataTypes);
  var image = _image(sequelize, DataTypes);
  var infoperso = _infoperso(sequelize, DataTypes);
  var niveautechno = _niveautechno(sequelize, DataTypes);
  var projet = _projet(sequelize, DataTypes);
  var projet_techno = _projet_techno(sequelize, DataTypes);
  var tagprojet = _tagprojet(sequelize, DataTypes);
  var technologie = _technologie(sequelize, DataTypes);

  projet.belongsToMany(technologie, {
    as: "id_technologie_technologies",
    through: projet_techno,
    foreignKey: "id_projet",
    otherKey: "id_technologie",
  });
  technologie.belongsToMany(projet, {
    as: "id_projet_projets",
    through: projet_techno,
    foreignKey: "id_technologie",
    otherKey: "id_projet",
  });
  accueil.belongsTo(image, { as: "id_image_accueil", foreignKey: "id_image" });
  image.hasOne(accueil, { as: "accueil", foreignKey: "id_image" });
  infoperso.belongsTo(image, { as: "imageinfoperso", foreignKey: "id_image" });
  image.hasOne(infoperso, { as: "infoperso", foreignKey: "id_image" });
  projet.belongsTo(image, { as: "id_image_image", foreignKey: "id_image" });
  image.hasOne(projet, { as: "projet", foreignKey: "id_image" });
  technologie.belongsTo(image, {
    as: "imagetechno",
    foreignKey: "id_image",
  });
  image.hasOne(technologie, { as: "technologie", foreignKey: "id_image" });
  technologie.belongsTo(niveautechno, {
    as: "niveautechno_techno",
    foreignKey: "id_niveauTechno",
  });
  niveautechno.hasMany(technologie, {
    as: "technologies",
    foreignKey: "id_niveauTechno",
  });
  projet_techno.belongsTo(projet, {
    as: "id_projet_projet",
    foreignKey: "id_projet",
  });
  projet.hasMany(projet_techno, {
    as: "projet_technos",
    foreignKey: "id_projet",
  });
  projet.belongsTo(tagprojet, {
    as: "id_tagProjet_tagprojet",
    foreignKey: "id_tagProjet",
  });
  tagprojet.hasMany(projet, { as: "projets", foreignKey: "id_tagProjet" });
  projet_techno.belongsTo(technologie, {
    as: "id_technologie_technologie",
    foreignKey: "id_technologie",
  });
  technologie.hasMany(projet_techno, {
    as: "projet_technos",
    foreignKey: "id_technologie",
  });

  return {
    accueil,
    formulaire,
    image,
    infoperso,
    niveautechno,
    projet,
    projet_techno,
    tagprojet,
    technologie,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
