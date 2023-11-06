
/* LINE CHART FOR MONTH (30 DAYS PRIOR TO TODAY */

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Create an array of Upvote values for each day
const UpvoteData = [10, 30, 123, 421, 320, 321, 421, 50, 60, 75, 80, 110, 90, 70, 60, 1000];

export function TotalUpvoteMonth() {
    const totalPostData = UpvoteData;
    const sum = totalPostData.reduce((acc, value) => acc + value, 0);
    return sum;
}

export function LineChartUpvoteMonth() {
    const currentDate = new Date();
    const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    // Create an array of dates with day and month
    const dayAndMonthData = [...Array(16)].map((_, index) => {
        const date = new Date(currentDate);
        date.setDate(currentDate.getDate() - 2 * (15 - index));
        const day = date.getDate();
        const month = monthNames[date.getMonth()];
        return `${day} ${month}`;
    });

    // Combine the day and month data with Upvote values
    const data = dayAndMonthData.map((name, index) => ({ name, TotalUpvote: UpvoteData[index] }));

    return (
        <LineChart className='' width={1150} height={500} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid stroke="#666" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="TotalUpvote" stroke="#82ca9d" />
            <Tooltip
                contentStyle={{
                    background: '#111',
                    border: '0.5px solid #333',
                    borderRadius: '5px'
                }}
            />
            <Legend />
        </LineChart>
    );
}

