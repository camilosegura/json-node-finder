import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient();

const Index = () => (
  <ApolloProvider client={client}>
    <div>Hello React!</div>
  </ApolloProvider>
);

ReactDOM.render(<Index />, document.getElementById('index'));
