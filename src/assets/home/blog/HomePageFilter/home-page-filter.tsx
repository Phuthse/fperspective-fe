import React, { useState } from 'react';
import './home-page-filter.css'

const HomePageFilter: React.FC<{ onFilterChange: (filter: string) => void }> = ({ onFilterChange }) => {
    const [selectedFilter, setSelectedFilter] = useState('Today');

    const handleFilterChange = (filter: string) => {
        setSelectedFilter(filter);
        onFilterChange(filter);
    };

    return (
        <header className='home-page-filter'>
            <div className='home-page-filter-left'>
                <a
                    className={`user-dashboard-left-nav-link ${selectedFilter === 'Latest' ? 'selected-home-filter' : ''}`}
                    onClick={() => handleFilterChange('Latest')}>
                    Latest
                </a>
                <a
                    className={`user-dashboard-left-nav-link ${selectedFilter === 'Top' ? 'selected-home-filter' : ''}`}
                    onClick={() => handleFilterChange('Top')}>
                    Top
                </a>
            </div>

            <div className='home-page-filter-right'>
                {selectedFilter === 'Top' ? (
                    <>
                        <a
                            className='home-page-filter-right-option'
                            onClick={() => handleFilterChange('Week')}>
                            Week
                        </a>
                        <a
                            className='home-page-filter-right-option'
                            onClick={() => handleFilterChange('Month')}>
                            Month
                        </a>
                        <a
                            className='home-page-filter-right-option'
                            onClick={() => handleFilterChange('Year')}>
                            Year
                        </a>
                        <a
                            className='home-page-filter-right-option'
                            onClick={() => handleFilterChange('AllTime')}>
                            All time
                        </a>
                    </>
                ) : null}
            </div>
        </header>
    );
};

export default HomePageFilter;
