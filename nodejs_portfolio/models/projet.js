const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Projet = sequelize.define(
    "projet",
    {
      id_projet: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      nom: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      lien: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      resume: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      id_image: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "image",
          key: "id_image",
        },
        unique: "projet_ibfk_1",
      },
      id_tagProjet: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "tagprojet",
          key: "id_tagProjet",
        },
      },
    },
    {
      sequelize,
      tableName: "projet",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id_projet" }],
        },
        {
          name: "id_image",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id_image" }],
        },
        {
          name: "id_tagProjet",
          using: "BTREE",
          fields: [{ name: "id_tagProjet" }],
        },
      ],
    }
  );
  return Projet;
};
