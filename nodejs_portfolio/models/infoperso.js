const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const InfoPerso = sequelize.define(
    "infoperso",
    {
      id_infoPerso: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      nom: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      prenom: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      telephone: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      metier: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      adresse_mail: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      resume: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      linkedin: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      github: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      id_image: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "image",
          key: "id_image",
        },
        unique: "infoperso_ibfk_1",
      },
    },
    {
      sequelize,
      tableName: "infoperso",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id_infoPerso" }],
        },
        {
          name: "id_image",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id_image" }],
        },
      ],
    }
  );

  InfoPerso.belongsTo(sequelize.models.image, {
    foreignKey: "id_image",
    as: "imageinfo",
  });

  return InfoPerso;
};
