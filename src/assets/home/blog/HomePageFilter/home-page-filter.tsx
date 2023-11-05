import React, { useState } from 'react';
import './home-page-filter.css';
import { Link } from 'react-router-dom';

const HomePageFilter: React.FC = () => {

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

    const handleApproveClick = () => {
        setShowTopOptions(false);
        setActiveLeftOption('approve');
    };

    const handleRightOptionClick = (option: string) => {
        setActiveRightOption(option);
    };

    return (
        <header className='home-page-filter'>
            <div className='home-page-filter-left'>
                <Link
                    to={`/latest`}
                    onClick={handleLatestClick}
                    className={activeLeftOption === 'latestOrApprove' ? 'selected-home-filter' : ''}
                >
                    Latest
                </Link>
                <Link
                    to={`/top`}
                    onClick={handleTopClick}
                    className={activeLeftOption === 'top' ? 'selected-home-filter' : ''}
                >
                    Top
                </Link>
                <Link
                    to={`/approve`}
                    onClick={handleApproveClick}
                    className={activeLeftOption === 'latestOrApprove' ? 'selected-home-filter' : ''}
                >
                    Approve
                </Link>
            </div>

            <div className='home-page-filter-right' style={{ display: showTopOptions ? 'block' : 'none' }}>
                <Link
                    to={`/top/week`}
                    onClick={() => handleRightOptionClick('week')}
                    className={activeRightOption === 'week' ? 'selected-home-filter' : ''}
                >
                    Week
                </Link>
                <Link
                    to={`/top/month`}
                    onClick={() => handleRightOptionClick('month')}
                    className={activeRightOption === 'month' ? 'selected-home-filter' : ''}
                >
                    Month
                </Link>
                <Link
                    to={`/top/year`}
                    onClick={() => handleRightOptionClick('year')}
                    className={activeRightOption === 'year' ? 'selected-home-filter' : ''}
                >
                    Year
                </Link>
                <Link
                    to={`/top/all`}
                    onClick={() => handleRightOptionClick('all')}
                    className={activeRightOption === 'all' ? 'selected-home-filter' : ''}
                >
                    All time
                </Link>
            </div>
        </header>
    );
};

export default HomePageFilter;
