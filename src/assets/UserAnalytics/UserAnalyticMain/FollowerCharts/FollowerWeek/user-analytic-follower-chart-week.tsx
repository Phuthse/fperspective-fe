/* LINE CHART FOR WEEK (6 DAYS PRIOR TO TODAY) */


import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function LineChartFollowerWeek() {
    const currentDate = new Date();
    const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    // Create an array of the past 7 days, including today, with day and month
    const dayAndMonthData = [...Array(8)].map((_, index) => {
        const date = new Date(currentDate);
        date.setDate(currentDate.getDate() - (7 - index));
        const day = date.getDate();
        const month = monthNames[date.getMonth()];
        return `${day} ${month}`;
    });

    // Create an array of Follower values for each day
    const FollowerData = [10, 30, 123, 421, 320, 321, 832, 200];

    // Combine the day and month data with Follower values
    const data = dayAndMonthData.map((name, index) => ({ name, TotalFollower: FollowerData[index] }));

    return (
        <LineChart className='' width={1000} height={500} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid stroke="#666" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="TotalFollower" stroke="rgb(59, 160, 255)" />
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

export default LineChartFollowerWeek;
