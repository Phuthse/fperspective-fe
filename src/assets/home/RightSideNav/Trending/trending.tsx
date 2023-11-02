import React from 'react';
import './trending.css'
import Tag from '../../../../model/tag';

type TrendingTagProps = {
    tags: Tag;
    // numberOfPost: number;
}

// const formatNumber = (number: number): string => {
//     if (number >= 1000000) {
//         return (number / 1000000).toFixed(1) + 'm';
//     } else if (number >= 100000) {
//         return (number / 1000).toFixed(1) + 'k';
//     } else if (number >= 10000) {
//         return (number / 1000).toFixed(1) + 'k';
//     } else if (number >= 1000) {
//         return (number / 1000).toFixed(1) + 'k';
//     }
//     return number.toString();
// };

const TrendingTag: React.FC<TrendingTagProps> = ({ tags }) => {
    return (

        <div key={tags.tagId} className="trending-tag">
            <a href="#">
                <span>#</span>
                <span> {tags.tagName}</span>
                {/* <p> {formatNumber(numberOfPost)} posts </p> */}
                <p> 10K posts </p>
            </a>
        </div>

    );
};

export default TrendingTag;
