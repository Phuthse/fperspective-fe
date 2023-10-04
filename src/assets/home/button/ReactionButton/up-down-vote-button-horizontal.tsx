import React, { useState } from 'react';
import {
  IconArrowBigUpFilled,
  IconArrowBigUp,
  IconArrowBigDownFilled,
  IconArrowBigDown,
} from '@tabler/icons-react';
import './up-down-vote-button-horizontal.css'


type ArrowButtonProps = {
  upvote: number;
}

const formatNumber = (number: number): string => {
  if (number >= 1000000) {
      const integralPart = Math.floor(number / 1000000);
      const decimalPart = Math.floor((number % 1000000) / 100000);
      return `${integralPart}.${decimalPart}m`;
  } else if (number >= 1000) {
      const integralPart = Math.floor(number / 1000);
      const decimalPart = Math.floor((number % 1000) / 100);
      return `${integralPart}.${decimalPart}k`;
  }
  return number.toString();
};

const UpAndDownVoteButtonHorizontal: React.FC<ArrowButtonProps> = ({ upvote }) => {
  const [Upvote, setUpvote] = useState<number>(upvote);
  const [FormattedUpvote, setFormattedUpvote] = useState<string>(formatNumber(Upvote));
  const [arrowDirection, setArrowDirection] = useState<string | null>(null);
  const [isUpFilled, setIsUpFilled] = useState<boolean>(false);
  const [isDownFilled, setIsDownFilled] = useState<boolean>(false);

  const handleArrowClick = (direction: 'up' | 'down') => {
    if (arrowDirection === null) {
      setArrowDirection(direction);
      if (direction === 'up') {
        setUpvote(Upvote + 1);
        setFormattedUpvote(formatNumber(Upvote + 1));
        setIsUpFilled(true);
        setIsDownFilled(false);
      } else {
        setUpvote(Upvote - 1);
        setFormattedUpvote(formatNumber(Upvote - 1));
        setIsDownFilled(true);
        setIsUpFilled(false);
      }
    } else if (arrowDirection === 'up' && direction === 'up') {
      setArrowDirection(null);
      setUpvote(Upvote - 1);
      setFormattedUpvote(formatNumber(Upvote - 1));
      setIsUpFilled(false);
    } else if (arrowDirection === 'down' && direction === 'down') {
      setArrowDirection(null);
      setUpvote(Upvote + 1);
      setFormattedUpvote(formatNumber(Upvote + 1));
      setIsDownFilled(false);
    } else if (arrowDirection === 'up' && direction === 'down') {
      setArrowDirection(direction);
      setUpvote(Upvote - 2);
      setFormattedUpvote(formatNumber(Upvote - 2));
      setIsUpFilled(false);
      setIsDownFilled(true);
    } else if (arrowDirection === 'down' && direction === 'up') {
      setArrowDirection(direction);
      setUpvote(Upvote + 2);
      setFormattedUpvote(formatNumber(Upvote + 2));
      setIsDownFilled(false);
      setIsUpFilled(true);
    }
  };

  return (
    <div className="horizontal-arrow-container">
      <div
        className={'horizontal-upvote-button'}
        onClick={() => handleArrowClick('up')}
      >
        {isUpFilled ? <IconArrowBigUpFilled style={{ color: 'orange' }} /> : <IconArrowBigUp />}
      </div>
      <span className="count">
        {FormattedUpvote}
      </span>
      <div
        className={'horizontal-downvote-button'}
        onClick={() => handleArrowClick('down')}
      >
        {isDownFilled ? <IconArrowBigDownFilled style={{ color: 'blue' }} /> : <IconArrowBigDown />}
      </div>
    </div>
  );
};

export default UpAndDownVoteButtonHorizontal;
