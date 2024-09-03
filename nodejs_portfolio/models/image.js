const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    "image",
    {
      id_image: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      nom: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      img: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "image",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id_image" }],
        },
      ],
    }
  );

  return Image;
};
