import React from 'react';
import './user-overview.css';


type UserOverviewProps = {
    TotalUpvotes: number;
    TotalPosts: number;
}

const formatNumber = (number: number): string => {
    if (number >= 1000000) {
        const integralPart = Math.floor(number / 1000000);
        const decimalPart = Math.floor((number % 1000000) / 100000);
        return `${integralPart}.${decimalPart}m`;
    } else if (number >= 1000) {
        const integralPart = Math.floor(number / 1000);
        const decimalPart = Math.floor((number % 1000) / 100);
        return `${integralPart}.${decimalPart}k`;
    }
    return number.toString();
};


const UserOverview: React.FC<UserOverviewProps> = ({
    TotalUpvotes,
    TotalPosts,
}) => {

    return (
        <header className='user-overview-container'>
            <h1>Dashboard</h1>
            <div className="user-overview">
                <div className="user-total-upvote">
                    <strong>
                        {formatNumber(TotalUpvotes)}
                    </strong>
                    <span>Total Upvotes</span>
                </div>
                <div className="user-total-post">
                    <strong>
                        {formatNumber(TotalPosts)}
                    </strong>
                    <span>Total Posts</span>
                </div>
            </div>
        </header>
    );
};

export default UserOverview;
