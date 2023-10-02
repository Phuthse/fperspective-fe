import React from 'react';
import './trending.css'

type TrendingTagProps = {
    tags: string[];
    numberOfPost: number[]
}

const formatNumber = (number: number): string => {
    if (number >= 1000000) {
        return (number / 1000000).toFixed(1) + 'm';
    } else if (number >= 100000) {
        return (number / 1000).toFixed(1) + 'k';
    } else if (number >= 10000) {
        return (number / 1000).toFixed(1) + 'k';
    } else if (number >= 1000) {
        return (number / 1000).toFixed(1) + 'k';
    }
    return number.toString();
};

const TrendingTag: React.FC<TrendingTagProps> = ({ tags, numberOfPost }) => {
    return (
        <div className='trending-tags'>
            <h3>Trending Tags</h3>
            <div className="trending-tags">
                {tags.map((tag, index) => (
                    <div key={index} className="trending-tag">
                        <a href="#">
                            <span>#</span>
                            <span> {tag}</span>
                            <p> {formatNumber(numberOfPost[index])} posts </p>
                        </a>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default TrendingTag;
