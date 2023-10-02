import React from 'react';
import './trending.css'

type TrendingTagProps = {
    tag: string;
    numberOfPost: number
}

const formatNumber = (number: number): string => {
    if (number >= 1000000) {
        return (number / 1000000).toFixed(1) + 'm';
    } else if (number >= 100000) {
        return (number / 1000).toFixed(0) + 'k';
    } else if (number >= 10000) {
        return (number / 1000).toFixed(1) + 'k';
    } else if (number >= 1000) {
        return (number / 1000).toFixed(0) + 'k';
    }
    return number.toString();
};

const TrendingTag: React.FC<TrendingTagProps> = ({ tag, numberOfPost }) => {
    const formattedNumber = formatNumber(numberOfPost);

    return (
        <div className="trending-tag">
            <a href="#">
                <span>#</span>
                <span> {tag}</span>
                <p> {formattedNumber} posts </p>
            </a>
        </div>
    );
};

export default TrendingTag;
