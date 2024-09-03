const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const NiveauTechno = sequelize.define(
    "niveautechno",
    {
      id_niveauTechno: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      niveau: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      rang: {
        type: DataTypes.TINYINT,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "niveautechno",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id_niveauTechno" }],
        },
      ],
    }
  );
  return NiveauTechno;
};
