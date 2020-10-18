import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const cache = new InMemoryCache();
const link = createHttpLink({
  uri: 'http://localhost:4000/',
});

const client = new ApolloClient({
  link,
  cache,
  connectToDevTools: true,
});

export default client;
