// LANCEMENT SERVER
const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const port = 5000;
// BDD
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connexion à la base de données réussie.");

    // Synchronisation du modèle avec la base de données
    await sequelize.sync();
    console.log("Modèle synchronisé avec la base de données.");
  } catch (error) {
    console.error("Impossible de se connecter à la base de données:", error);
  }
})();

// GRAPHQL;
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

//CORS
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

//ROUTE
// IMAGE;
const imageRoute = require("./routes/image.route.js");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/images", imageRoute);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", require("./routes/route.js"));

app.listen(port, () => console.log("Le serveur a démarré au port " + port));
