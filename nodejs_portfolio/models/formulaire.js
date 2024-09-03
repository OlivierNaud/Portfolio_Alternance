const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('formulaire', {
    id_formulaire: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nom: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    prenom: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    commentaire: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    reseau_contact: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    entreprise: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    titre: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'formulaire',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_formulaire" },
        ]
      },
    ]
  });
};
