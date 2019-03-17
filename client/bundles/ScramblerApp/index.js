import React from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import * as styles from './app.module.scss';
import Game from './components/GameContainer';
import setupStore from './store';
import client from './apollo-client';

const ScramblerApp = (props) => (
  <Provider store={setupStore(props)}>
    <ApolloProvider client={client}>
      <div className={styles.app}>
        <h2 className="mt-4 mb-4">Scrambler</h2>
        <Game />
      </div>
    </ApolloProvider>
  </Provider>
);

export default ScramblerApp;