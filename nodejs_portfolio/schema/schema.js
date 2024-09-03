const { GraphQLSchema } = require("graphql");
const { RootQuery } = require("../queries/query");

module.exports = new GraphQLSchema({
  query: RootQuery,
});
