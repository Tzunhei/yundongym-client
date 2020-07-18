import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://localhost:4000',
  cache: new InMemoryCache(),
});

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
