const { GraphQLObjectType, GraphQLString, GraphQLID } = require("graphql");

const ImageType = new GraphQLObjectType({
  name: "Image",
  fields: () => ({
    id_image: { type: GraphQLID },
    nom: { type: GraphQLString },
    img: { type: GraphQLString },
  }),
});

module.exports = { ImageType };
