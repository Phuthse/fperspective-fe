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

const UpAndDownVoteButtonHorizontal: React.FC<ArrowButtonProps> = ({ upvote }) => {
  const [Upvote, setUpvote] = useState<number>(upvote);
  const [arrowDirection, setArrowDirection] = useState<string | null>(null);
  const [isUpFilled, setIsUpFilled] = useState<boolean>(false);
  const [isDownFilled, setIsDownFilled] = useState<boolean>(false);

  const handleArrowClick = (direction: 'up' | 'down') => {
    if (arrowDirection === null) {
      setArrowDirection(direction);
      if (direction === 'up') {
        setUpvote(Upvote + 1);
        setIsUpFilled(true);
        setIsDownFilled(false);
      } else {
        setUpvote(Upvote - 1);
        setIsDownFilled(true);
        setIsUpFilled(false);
      }
    } else if (arrowDirection === 'up' && direction === 'up') {
      setArrowDirection(null);
      setUpvote(Upvote - 1);
      setIsUpFilled(false);
    } else if (arrowDirection === 'down' && direction === 'down') {
      setArrowDirection(null);
      setUpvote(Upvote + 1);
      setIsDownFilled(false);
    } else if (arrowDirection === 'up' && direction === 'down') {
      setArrowDirection(direction);
      setUpvote(Upvote - 2);
      setIsUpFilled(false);
      setIsDownFilled(true);
    } else if (arrowDirection === 'down' && direction === 'up') {
      setArrowDirection(direction);
      setUpvote(Upvote + 2);
      setIsDownFilled(false);
      setIsUpFilled(true);
    }
  };

  return (
    <div className="arrow-container">
      <div
        className={'upvote-button'}
        onClick={() => handleArrowClick('up')}
      >
        {isUpFilled ? <IconArrowBigUpFilled /> : <IconArrowBigUp/>}
      </div>
      <span className="count">
        {Upvote}
      </span>
      <div
        className={'downvote-button'}
        onClick={() => handleArrowClick('down')}
      >
        {isDownFilled ? <IconArrowBigDownFilled/> : <IconArrowBigDown/>}
      </div>
    </div>
  );
};

export default UpAndDownVoteButtonHorizontal;
