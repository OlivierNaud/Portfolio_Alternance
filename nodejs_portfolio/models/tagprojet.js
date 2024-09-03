const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const TagProjet = sequelize.define(
    "tagprojet",
    {
      id_tagProjet: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      tag: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "tagprojet",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id_tagProjet" }],
        },
      ],
    }
  );
  return TagProjet;
};
