import React, { useState } from 'react';
import {
  IconArrowBigUpFilled,
  IconArrowBigUp,
  IconArrowBigDownFilled,
  IconArrowBigDown,
} from '@tabler/icons-react';
import './up-down-vote-button.css';


type ArrowButtonProps = {
  upvote: number;
}

const UpAndDownVoteButton: React.FC<ArrowButtonProps> = ({ upvote }) => {
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
        className={'arrow-button'}
        onClick={() => handleArrowClick('up')}
      >
        {isUpFilled ? <IconArrowBigUpFilled style={{ color: '#FFA500' }} /> : <IconArrowBigUp style={{ color: '#FFA500' }} />}
      </div>
      <span className="count" style={{ color: 'white' }}>
        {Upvote}
      </span>
      <div
        className={'arrow-button'}
        onClick={() => handleArrowClick('down')}
      >
        {isDownFilled ? <IconArrowBigDownFilled style={{ color: 'blue' }} /> : <IconArrowBigDown style={{ color: 'blue' }} />}
      </div>
    </div>
  );
};

export default UpAndDownVoteButton;
