const { GraphQLList, GraphQLID } = require("graphql");
const { InfoPersoType } = require("../../types/infoPerso.type");
const Models = require("../../models");
const InfoPersoQuery = {
  infoPerso: {
    type: new GraphQLList(InfoPersoType),
    resolve(parent, args) {
      return Models.infoperso.findAll();
    },
  },

  infoPerso_id: {
    type: InfoPersoType,
    args: { id: { type: GraphQLID } },
    resolve(parent, args) {
      return Models.infoperso.findByPk(args.id);
    },
  },
};

module.exports = { InfoPersoQuery };
