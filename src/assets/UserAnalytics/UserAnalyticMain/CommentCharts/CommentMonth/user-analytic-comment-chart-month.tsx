
/* LINE CHART FOR MONTH (30 DAYS PRIOR TO TODAY */

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export function TotalCommentMonth() {
    const totalCommentData = [50, 20, 123, 21, 220, 421, 221, 380, 120, 575, 180, 210, 40, 360, 30, 500];
    const sum = totalCommentData.reduce((acc, value) => acc + value, 0);
    return sum;
}

export function LineChartCommentMonth() {
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

    // Create an array of Comment values for each day
    const CommentData = [50, 20, 123, 21, 220, 421, 221, 380, 120, 575, 180, 210, 40, 360, 30, 500];

    // Combine the day and month data with Comment values
    const data = dayAndMonthData.map((name, index) => ({ name, TotalComment: CommentData[index] }));

    return (
        <LineChart className='' width={1150} height={500} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid stroke="#666" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="TotalComment" stroke="#82ca9d" />
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

