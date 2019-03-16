import React from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';

import Game from './routes/Game';
import setupStore from './store';
import client from './apollo-client';

const ScramblerApp = (props) => (
  <Provider store={setupStore(props)}>
    <ApolloProvider client={client}>
      <Game />
    </ApolloProvider>
  </Provider>
);

export default ScramblerApp;