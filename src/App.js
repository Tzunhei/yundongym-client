import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from 'theme';
import { ApolloProvider } from '@apollo/client';
import client from './ApolloClient';
import AppRouter from './AppRouter';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
