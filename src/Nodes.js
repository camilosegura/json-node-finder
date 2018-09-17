import React from 'react';
import { graphql, compose } from 'react-apollo';
import getNodes from './queries';

const Nodes = ({ data }) => (
  <div>
    {console.log(data)}
  </div>
);

Nodes.propTypes = {
  data: PropTypes.object.isRequired,
};

export default compose(graphql(getNodes))(Nodes);
// export default Nodes;
