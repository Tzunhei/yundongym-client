import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './ApolloClient';

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <header>Hello World</header>
      </div>
    </ApolloProvider>
  );
}

export default App;
