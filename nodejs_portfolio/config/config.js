require("dotenv").config(); // Charger les variables d'environnement depuis .env

const Config = {
  development: {
    username: process.env.USER || "root",
    password: process.env.PASSWORD || "",
    database: process.env.DATABASE || "portfolio",
    host: process.env.HOST || "127.0.0.1",
    dialect: process.env.DIALECT || "mariadb",
  },
  test: {
    username: process.env.USER || "root",
    password: process.env.PASSWORD || "",
    database: process.env.DATABASE || "portfolio",
    host: process.env.HOST || "127.0.0.1",
    dialect: process.env.DIALECT || "mariadb",
  },
  production: {
    username: process.env.USER || "root",
    password: process.env.PASSWORD || "",
    database: process.env.DATABASE || "portfolio",
    host: process.env.HOST || "127.0.0.1",
    dialect: process.env.DIALECT || "mariadb",
  },
};

module.exports = Config;
