import React, { useState } from 'react';
import './home-page-filter.css';
import { Link, useParams } from 'react-router-dom';

const TagFilteredHomePageFilter: React.FC = () => {

    const { tagFilter } = useParams();

    const [showTopOptions, setShowTopOptions] = useState(false);
    const [activeLeftOption, setActiveLeftOption] = useState('');
    const [activeRightOption, setActiveRightOption] = useState('');

    const handleTopClick = () => {
        setShowTopOptions(true);
        setActiveLeftOption('top');
    };

    const handleLatestClick = () => {
        setShowTopOptions(false);
        setActiveLeftOption('latest');
    };

    const handleRightOptionClick = (option: string) => {
        setActiveRightOption(option);
    };

    return (
        <header className='home-page-filter'>
            <div className='home-page-filter-left'>
                <Link
                    to={`/tag/${tagFilter}/latest`}
                    onClick={handleLatestClick}
                    className={activeLeftOption === 'latestOrApprove' ? 'selected-home-filter' : ''}
                >
                    Latest
                </Link>
                <Link
                    to={`/tag/${tagFilter}/top`}
                    onClick={handleTopClick}
                    className={activeLeftOption === 'top' ? 'selected-home-filter' : ''}
                >
                    Top
                </Link>
            </div>

            <div className='home-page-filter-right' style={{ display: showTopOptions ? 'block' : 'none' }}>
                <Link
                    to={`/tag/${tagFilter}/top/week`}
                    onClick={() => handleRightOptionClick('week')}
                    className={activeRightOption === 'week' ? 'selected-home-filter' : ''}
                >
                    Week
                </Link>
                <Link
                    to={`/tag/${tagFilter}/top/month`}
                    onClick={() => handleRightOptionClick('month')}
                    className={activeRightOption === 'month' ? 'selected-home-filter' : ''}
                >
                    Month
                </Link>
                <Link
                    to={`/tag/${tagFilter}/top/year`}
                    onClick={() => handleRightOptionClick('year')}
                    className={activeRightOption === 'year' ? 'selected-home-filter' : ''}
                >
                    Year
                </Link>
                <Link
                    to={`/tag/${tagFilter}/top/all`}
                    onClick={() => handleRightOptionClick('all')}
                    className={activeRightOption === 'all' ? 'selected-home-filter' : ''}
                >
                    All time
                </Link>
            </div>
        </header >
    );
};

export default TagFilteredHomePageFilter;
