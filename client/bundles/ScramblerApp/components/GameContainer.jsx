import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import ScramblerGame from './ScramblerGame';
import { Button } from 'reactstrap';

const fetchRandomWordQuery = gql`
  {
    randomWord {
      id,
      word,
      difficulty,
    }
  }
`;

const GameContainer = () =>  (
  <Query query={fetchRandomWordQuery}>
    {({ data, error, loading, refetch }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;
      
      return (
        <div>
          <ScramblerGame word={data.randomWord[0].word} fetchNewWord={() => refetch()}/>
        </div>
      );
    }}
  </Query>
);



export default GameContainer;