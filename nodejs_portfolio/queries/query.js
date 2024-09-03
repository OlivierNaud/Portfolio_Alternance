const { GraphQLObjectType } = require("graphql");
const { InfoPersoQuery } = require("./infoperso/infoPerso.query");
const { ImageQuery } = require("./image/image.query");

const RootQuery = new GraphQLObjectType({
  name: "Query",
  fields: { ...InfoPersoQuery, ...ImageQuery },
});

module.exports = { RootQuery };
