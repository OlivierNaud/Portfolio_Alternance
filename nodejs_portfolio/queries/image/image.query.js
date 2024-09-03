const { GraphQLList, GraphQLID } = require("graphql");
const { ImageType } = require("../../types/image.type");
const Models = require("../../models");
const ImageQuery = {
  image: {
    type: new GraphQLList(ImageType),
    resolve(parent, args) {
      return Models.image.findAll();
    },
  },

  image_id: {
    type: ImageType,
    args: { id: { type: GraphQLID } },
    resolve(parent, args) {
      return Models.image.findByPk(args.id);
    },
  },
};

module.exports = { ImageQuery };
