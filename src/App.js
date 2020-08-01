import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './ApolloClient';
import AppRouter from './AppRouter';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <AppRouter />
    </ApolloProvider>
  );
};

export default App;
