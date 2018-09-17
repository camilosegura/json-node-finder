import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Nodes from './Nodes';

const client = new ApolloClient();

const Index = () => (
  <ApolloProvider client={client}>
    <Nodes />
  </ApolloProvider>
);

ReactDOM.render(<Index />, document.getElementById('index'));
