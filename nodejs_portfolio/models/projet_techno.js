const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const ProjetTechno = sequelize.define(
    "projet_techno",
    {
      id_projet: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "projet",
          key: "id_projet",
        },
      },
      id_technologie: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "technologie",
          key: "id_technologie",
        },
      },
    },
    {
      sequelize,
      tableName: "projet_techno",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id_projet" }, { name: "id_technologie" }],
        },
        {
          name: "id_technologie",
          using: "BTREE",
          fields: [{ name: "id_technologie" }],
        },
      ],
    }
  );
  return ProjetTechno;
};
