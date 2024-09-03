const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
} = require("graphql");
const { ImageType } = require("./image.type");
const Models = require("../models");

const InfoPersoType = new GraphQLObjectType({
  name: "InfoPerso",
  fields: () => ({
    id_infoPerso: { type: GraphQLID },
    nom: { type: GraphQLString },
    prenom: { type: GraphQLString },
    telephone: { type: GraphQLString },
    metier: { type: GraphQLString },
    adresse_mail: { type: GraphQLString },
    id_image: {
      type: new GraphQLList(ImageType),
      async resolve(parent, args) {
        try {
          const image = await Models.image.findAll({
            where: { id_image: parent.id_image },
          });
          return image;
        } catch (error) {
          throw new Error("Impossible de récupérer les l'id de image.");
        }
      },
    },
  }),
});

module.exports = { InfoPersoType };
