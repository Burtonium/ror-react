import { ApolloClient } from "apollo-boost";
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from 'apollo-link-http';

import gql from "graphql-tag";

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: createHttpLink({ uri: '/graphql' }),
  cache,
  resolvers: {
    Query: {
      fetchRandomWord: async (_, variables) => {
        console.log('SUHHH');
        return 'SUHHHH';
      },
    }
  }
});

export default client;
