const { merge } = require('lodash');
const { makeExecutableSchema } = require('graphql-tools');
const nodeResolvers = require('./node/resolvers');
const mainSchema = require('./mainSchema');
const nodeSchema = require('./node/schema');
const nodeTypes = require('./node/types');

const schema = makeExecutableSchema({
  typeDefs: [mainSchema, nodeTypes, nodeSchema],
  resolvers: merge(nodeResolvers),
});

module.exports = schema;
