/* LINE CHART FOR YEAR (1 YEAR PRIOR TO CURRENT MONTH */

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export function TotalUserYear() {
    const UserData = [60, 70, 90, 110, 80, 75, 60, 50, 60, 75, 80, 90, 111]; // Replace with your desired values
    const sum = UserData.reduce((acc, value) => acc + value, 0);
    return sum;
}

export function LineChartUserYear() {
    const currentDate = new Date();
    const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    // Create an array of dates with month and year, spanning one year
    const monthAndYearData = [...Array(13)].map((_, index) => {
        const date = new Date(currentDate);
        date.setMonth(currentDate.getMonth() - (12 - index));
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear().toString().slice(-2);;
        return `${month} ${year}`;
    });

    // Create an array of User values for each month
    const UserData = [60, 70, 90, 110, 80, 75, 60, 50, 60, 75, 80, 90, 111]; // Replace with your desired values

    // Combine the month and year data with User values
    const data = monthAndYearData.map((name, index) => ({ name, User: UserData[index] }));

    return (
        <LineChart className='' width={1150} height={500} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid stroke="#666" strokeDasharray="5 5" />
            <Line type="bump" dataKey="User" stroke="purple" />
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