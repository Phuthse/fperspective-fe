import React, { useEffect, useState } from 'react';
import './trending.css'
import Tag from '../../../../model/tag';
import { tagApi } from '../../../../config/axios';

type TrendingTagProps = {
    tags: Tag;
    uri: string;
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

const TrendingTag: React.FC<TrendingTagProps> = ({ tags, uri }) => {

    const [count, setCount] = useState<number>(1);
    const fetchUserData = async () => {
        const response = await tagApi.get(uri, { withCredentials: true });

        setCount(response.data);
        console.log(response.data);
    };
    useEffect(() => {
        fetchUserData();
    }, [tagApi]);

    return (

        <div key={tags.tagId} className="trending-tag">
            <a href="#">
                <span>#</span>
                <span> {tags.tagName}</span>
                <p> {formatNumber(count)} posts </p>
                {/* <p> 10K posts </p> */}
            </a>
        </div>

    );
};

export default TrendingTag;
