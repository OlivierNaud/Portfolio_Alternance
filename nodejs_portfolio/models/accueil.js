const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Accueil = sequelize.define(
    "accueil",
    {
      id_accueil: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_image: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "image",
          key: "id_image",
        },
        unique: "accueil_ibfk_1",
      },
    },
    {
      sequelize,
      tableName: "accueil",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id_accueil" }],
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

  return Accueil;
};
