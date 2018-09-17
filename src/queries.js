import gql from 'graphql-tag';

const queryNodes = gql`
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

export default queryNodes;
