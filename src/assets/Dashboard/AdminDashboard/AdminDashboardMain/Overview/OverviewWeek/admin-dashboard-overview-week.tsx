import React, { useEffect, useState } from 'react';

const data = [
    32, 10, 13, 444
];

interface CountUpNumberProps {
    value: number;
}

function CountUpNumber({ value }: CountUpNumberProps) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const increment = Math.ceil(value / 100); // Adjust the increment for the desired speed

        if (count < value) {
            const timer = setInterval(() => {
                setCount((prevCount) => Math.min(prevCount + increment, value));
            }, 50); // Adjust the interval for the desired animation speed

            return () => clearInterval(timer);
        }
    }, [count, value]);

    return <span>{count}</span>;
}

const OverviewWeek: React.FC = () => {
    return (
        <>
            <div className="admin-dashboard-overview-detail-container">
                <div className="admin-dashboard-overview-detail">
                    <strong>
                        Total Posts
                    </strong>
                    <CountUpNumber value={data[0]} />
                </div>
                <div className="admin-dashboard-overview-detail">
                    <strong>
                        Total Tags
                    </strong>
                    <CountUpNumber value={data[1]} />
                </div>
                <div className="admin-dashboard-overview-detail">
                    <strong>
                        Total User
                    </strong>
                    <CountUpNumber value={data[2]} />
                </div>
                <div className="admin-dashboard-overview-detail">
                    <strong>New User</strong>
                    <CountUpNumber value={data[3]} />
                </div>
            </div>
        </>
    );
};

export default OverviewWeek;
