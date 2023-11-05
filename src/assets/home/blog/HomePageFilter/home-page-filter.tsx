import React, { useState } from 'react';
import './home-page-filter.css';
import { Link } from 'react-router-dom';

const HomePageFilter: React.FC = () => {
    const [showTopOptions, setShowTopOptions] = useState(false);

    const handleTopClick = () => {
        setShowTopOptions(true);
    };

    const handleLatestOrApproveClick = () => {
        setShowTopOptions(false);
    };

    return (
        <header className='home-page-filter'>
            <div className='home-page-filter-left'>
                <Link to={`/latest`} onClick={handleLatestOrApproveClick}>
                    Latest
                </Link>
                <Link to={`/top`} onClick={handleTopClick}>
                    Top
                </Link>
                <Link to={`/approve`} onClick={handleLatestOrApproveClick}>
                    Approve
                </Link>
            </div>

            <div className='home-page-filter-right' style={{ display: showTopOptions ? 'block' : 'none' }}>
                <Link to={`/top/week`}>
                    Week
                </Link>
                <Link to={`/top/month`}>
                    Month
                </Link>
                <Link to={`/top/year`}>
                    Year
                </Link>
                <Link to={`/top/all`}>
                    All time
                </Link>
            </div>
        </header>
    );
};

export default HomePageFilter;
