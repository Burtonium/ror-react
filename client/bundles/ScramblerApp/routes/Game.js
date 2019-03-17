import React from 'react';
import gql from 'graphql-tag';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import WordShuffle from '../components/WordShuffle';

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
  constructor(props) {
    super(props);

    this.state = {
      guess: '',
    }
  }

  handleGuess() {
    this.setState({ guess: 'suh' });
  }

  handleFetchNewWord() {

  }

  render() {
    const { guess } = this.state;
          
    return (
      <div>
        <WordShuffle word={word} />
        <div className="row pl-3 pr-3 mt-4">
          <div className="col-lg-2 offset-lg-5 col-md-4 offset-md-4 col-sm-6 offset-sm-3">
            <input
              className="form-control"
              placeholder="Guess the word..."
              id="name"
              type="text"
              value={guess}
            />
            <h3>Current Guess: {this.props.guess}</h3>
            <Button className="mt-4" color="primary" onClick={() => this.handleGuess()}>
              Guess
            </Button>
          </div>
        </div>

      </div>
    );

    
  }
}


export default compose(
  connect((state) => ({ word: state.word })),
)(Game);