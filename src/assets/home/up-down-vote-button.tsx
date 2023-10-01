import React, { useState } from 'react';
import {
  IconArrowBigUpFilled,
  IconArrowBigUp,
  IconArrowBigDownFilled,
  IconArrowBigDown,
} from '@tabler/icons-react';
import './up-down-vote-button.css';


interface ArrowButtonProps {}

const UpAndDownVoteButton: React.FC<ArrowButtonProps> = () => {
  const [count, setCount] = useState<number>(100);
  const [arrowDirection, setArrowDirection] = useState<string | null>(null);
  const [isUpFilled, setIsUpFilled] = useState<boolean>(false);
  const [isDownFilled, setIsDownFilled] = useState<boolean>(false);

  const handleArrowClick = (direction: 'up' | 'down') => {
    if (arrowDirection === null) {
      setArrowDirection(direction);
      if (direction === 'up') {
        setCount(count + 1);
        setIsUpFilled(true);
        setIsDownFilled(false);
      } else {
        setCount(count - 1);
        setIsDownFilled(true);
        setIsUpFilled(false);
      }
    } else if (arrowDirection === 'up' && direction === 'up') {
      setArrowDirection(null);
      setCount(count - 1);
      setIsUpFilled(false);
    } else if (arrowDirection === 'down' && direction === 'down') {
      setArrowDirection(null);
      setCount(count + 1);
      setIsDownFilled(false);
    } else if (arrowDirection === 'up' && direction === 'down') {
      setArrowDirection(direction);
      setCount(count - 2);
      setIsUpFilled(false);
      setIsDownFilled(true);
    } else if (arrowDirection === 'down' && direction === 'up') {
      setArrowDirection(direction);
      setCount(count + 2);
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
        {isUpFilled ? <IconArrowBigUpFilled style={{color: 'orange'}}/> : <IconArrowBigUp style={{color: 'orange'}}/>}
      </div>
      <span className="count" style={{ color: 'white' }}>
        {count}
      </span>
      <div
        className={'arrow-button'}
        onClick={() => handleArrowClick('down')}
      >
        {isDownFilled ? <IconArrowBigDownFilled style={{color: 'blue'}}/> : <IconArrowBigDown style={{color: 'blue'}}/>}
      </div>
    </div>
  );
};

export default UpAndDownVoteButton;
