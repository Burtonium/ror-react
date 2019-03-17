import React from 'react';
import PropTypes from 'prop-types';
import LetterCard from './LetterCard';
import * as styles from './LetterCardList.module.scss';

const LetterCardList = (props) => {
  const { letters, correct, incorrect } = props;
  
  const letterCards = letters.map((letter, index) => (
    <LetterCard letter={letter} correct={correct[index]} incorrect={incorrect[index]} key={index}/>
  ))

  return (
    <h2 className={styles['letter-card-list']}>
      {letterCards}
    </h2>
  );
};

LetterCardList.propTypes = {
  letters: PropTypes.array.isRequired,
  correct: PropTypes.array,
  incorrect: PropTypes.array,
};

export default LetterCardList;