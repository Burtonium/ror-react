import React from 'react';
import { Button } from 'reactstrap';
import LetterCardList from './LetterCardList';
import shuffle from 'shuffle-words';

const getInitialGameState = (word) => {
  const letters = shuffle(word, true).split('');
  return {
    currentWord: word,
    shuffledLetters: letters, 
    guess: '', 
    correct: [], 
    incorrect:[]
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentWord: props.word,
      shuffledLetters: [],
      guess: '',
      correct: [],
      incorrect: [],
      wins: 0
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.word !== state.currentWord) {
      return Object.assign(state, getInitialGameState(props.word));
    }
    return state;
  }

  componentDidMount() {
    this.setupNewGame();
  }

  setupNewGame() {
    const { word } = this.props;
    this.setState(getInitialGameState(word));
  }

  updateGuess({ target }) {
    this.setState({ guess: target.value.toLowerCase(), correct: [], incorrect: [] });
  }

  handleGuess() {
    const letters = this.getLetters();
    let incorrect = [];
    let correct = [];
    const lettersLength = letters.length;
    for (let i = 0; i < lettersLength; i++) {
      if (letters[i] === this.props.word[i]) {
        correct.push(true);
        incorrect.push(false);
      } else {
        incorrect.push(true);
        correct.push(false);
      }
    }

    this.setState({ correct, incorrect });
    if (correct.every(c => c)) {
      this.setState({ wins: this.state.wins + 1 });
      this.props.fetchNewWord();
    }
  }

  getLetters() {
    const letters = this.state.shuffledLetters.concat();
    const guessLength = this.state.guess.length;
    for (let i = 0; i < guessLength; i++) {
      const letter = this.state.guess[i];
      const index = letters.slice(i, letters.length).findIndex((l) => l === letter);
      if (index !== -1) {
        letters.splice(i, 0, letters.splice(index + i, 1)[0]);
      }
    }
    return letters;
  }

  render() {
    const { guess, correct, incorrect, wins } = this.state;
    const { fetchNewWord } = this.props;
    const letters = this.getLetters();
    return (
      <div>
        <LetterCardList letters={letters} correct={correct} incorrect={incorrect} />
        <div className="row pl-3 pr-3 mt-4">
          <div className="col-lg-2 offset-lg-5 col-md-4 offset-md-4 col-sm-6 offset-sm-3">
            <input
              className="form-control"
              placeholder="Guess the word..."
              id="name"
              type="text"
              value={guess}
              onChange={(e) => this.updateGuess(e) }
            />
            <Button className="mt-4" color="primary" onClick={() => this.handleGuess(guess)}>
              Guess
            </Button>
            <br />
            <Button className="mt-4" onClick={() =>  fetchNewWord() }>
              New word
            </Button>
            <h3 className="mt-4">Wins: {wins}</h3>
          </div>
        </div>
      </div>
    );

  }
}


export default Game;