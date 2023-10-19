/* LINE CHART FOR YEAR (1 YEAR PRIOR TO CURRENT MONTH */

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function LineChartCommentAll() {
    const currentDate = new Date();
    const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    // Create an array of dates with month and year, spanning one year
    const monthAndYearData = [...Array(12)].map((_, index) => {
        const date = new Date(currentDate);
        date.setMonth(currentDate.getMonth() - (11 - index));
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear().toString().slice(-2);
        return `${month} ${year}`;
    });

    // Create an array of Comment values for each month
    const CommentData = [30, 40, 20, 110, 280, 375, 60, 40, 80, 175, 480, 890]; // Replace with your desired values

    // Combine the month and year data with Comment values
    const data = monthAndYearData.map((name, index) => ({ name, TotalComment: CommentData[index] }));

    return (
        <LineChart className='' width={1150} height={500} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid stroke="#666" strokeDasharray="5 5" />
            <Line type="bump" dataKey="TotalComment" stroke="purple" />
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

export default LineChartCommentAll;
