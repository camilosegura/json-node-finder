import gql from 'graphql-tag';

const getNodes = gql`
  query {
    nodes {
      id
      label
      children {
        id
        label
        children {
          id
          label
        }
      }
    }
  }
`;

export default getNodes;
