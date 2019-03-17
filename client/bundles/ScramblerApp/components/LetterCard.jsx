import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'reactstrap';

const LetterCard = (props) => {
  const { letter, correct, incorrect } = props;
  
  let classes = "pb-2 pl-3 pr-3";
  if (correct) {
    classes += " text-success";
  }
  if (incorrect) {
    classes += " text-danger";
  }
  
  return (
    <Card className={classes}>
      {letter}
    </Card>
  );
}

LetterCard.propTypes = {
  letter: PropTypes.string.isRequired,
  correct: PropTypes.bool,
  incorrect: PropTypes.bool
};

export default LetterCard;