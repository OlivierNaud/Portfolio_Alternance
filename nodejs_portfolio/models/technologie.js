const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Technologie = sequelize.define(
    "technologie",
    {
      id_technologie: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      nom: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      id_image: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "image",
          key: "id_image",
        },
        unique: "technologie_ibfk_1",
      },
      id_niveauTechno: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "niveautechno",
          key: "id_niveauTechno",
        },
      },
    },
    {
      sequelize,
      tableName: "technologie",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id_technologie" }],
        },
        {
          name: "id_image",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id_image" }],
        },
        {
          name: "id_niveauTechno",
          using: "BTREE",
          fields: [{ name: "id_niveauTechno" }],
        },
      ],
    }
  );
  return Technologie;
};
