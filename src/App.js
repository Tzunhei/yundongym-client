import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';

const engine = new Styletron();

const client = new ApolloClient({
  uri: 'https://localhost:4000',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
          <div>
            <header>Hello World</header>
          </div>
        </BaseProvider>
      </StyletronProvider>
    </ApolloProvider>
  );
}

export default App;
