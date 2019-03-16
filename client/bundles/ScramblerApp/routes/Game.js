import React from 'react';
import gql from 'graphql-tag';
import { compose } from 'redux';
import { Query } from 'react-apollo';
import { connect } from 'react-redux';


const fetchRandomWordQuery = gql`
  {
    randomWord {
      id,
      word,
      difficulty,
    }
  }
`;


class Game extends React.Component {
  render() {
    return (
      <Query query={fetchRandomWordQuery}>
        {({ data, error, loading, refetch }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          const { word } = data.randomWord[0];
          
          return (
            <div>
              <hr />
              <h4>Word: {word}</h4>
              <form >
                <label htmlFor="name">
                  Guess the word:
                </label>
                &nbsp;
                <input
                  id="name"
                  type="text"
                  value={this.guess}
                />
                <button onClick={(e) => {  refetch(); e.preventDefault(); }}>
                  New word
                </button>
              </form>
            </div>
          );
        }}
      </Query>
    );
  }
}


export default compose(
  connect((state) => ({ word: state.word })),
)(Game);