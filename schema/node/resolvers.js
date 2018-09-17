const node = {
  Query: {
    nodes: (_, __, { nodeModel }) => nodeModel,
  },
};

module.exports = node;
