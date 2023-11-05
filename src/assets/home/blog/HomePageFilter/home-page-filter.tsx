import React, { useState } from 'react';
import './home-page-filter.css'
import { Link } from 'react-router-dom';

const HomePageFilter: React.FC<{ onFilterChange: (filter: string) => void }> = ({ onFilterChange }) => {
    const [selectedFilter, setSelectedFilter] = useState('Latest');

    const handleFilterChange = (filter: string) => {
        setSelectedFilter(filter);
        onFilterChange(filter);
    };

    return (
        <header className='home-page-filter'>
            <div className='home-page-filter-left'>
                <Link
                    to={`/${selectedFilter.toLowerCase()}`}
                    className={`user-dashboard-left-nav-link ${selectedFilter === 'Latest' ? 'selected-home-filter' : ''}`}
                    onClick={() => handleFilterChange('Latest')}
                >
                    Latest
                </Link>
                <Link
                    to={`/${selectedFilter.toLowerCase()}`}
                    className={`user-dashboard-left-nav-link ${selectedFilter === 'Top' ? 'selected-home-filter' : ''}`}
                    onClick={() => handleFilterChange('Top')}
                >
                    Top
                </Link>
                <Link
                    to={`/${selectedFilter.toLowerCase()}`}
                    className={`user-dashboard-left-nav-link ${selectedFilter === 'Approve' ? 'selected-home-filter' : ''}`}
                    onClick={() => handleFilterChange('Approve')}
                >
                    Approve
                </Link>
            </div>

            <div className='home-page-filter-right'>
                {selectedFilter === 'Top' ? (
                    <>
                        <Link
                            to={`/top/week`}
                            className='home-page-filter-right-option'
                            onClick={() => handleFilterChange('Week')}
                        >
                            Week
                        </Link>
                        <Link
                            to={`/top/month`}
                            className='home-page-filter-right-option'
                            onClick={() => handleFilterChange('Month')}
                        >
                            Month
                        </Link>
                        <Link
                            to={`/top/year`}
                            className='home-page-filter-right-option'
                            onClick={() => handleFilterChange('Year')}
                        >
                            Year
                        </Link>
                        <Link
                            to={`/top/all`}
                            className='home-page-filter-right-option'
                            onClick={() => handleFilterChange('AllTime')}
                        >
                            All time
                        </Link>
                    </>
                ) : null}
            </div>
        </header>
    );
};

export default HomePageFilter;
