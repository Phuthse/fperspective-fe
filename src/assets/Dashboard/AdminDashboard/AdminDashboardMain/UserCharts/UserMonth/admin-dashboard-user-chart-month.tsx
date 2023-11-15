
/* LINE CHART FOR MONTH (30 DAYS PRIOR TO TODAY */

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import User from '../../../../../../model/user';
import { useState, useEffect } from 'react';
import { userApi } from '../../../../../../config/axios';


export function LineChartUserMonth() {
    const currentDate = new Date();
    const [, setUsers] = useState<User[]>([]);
    const [totalUserData, setTotalUserData] = useState<number[]>([]);
    const [Loading, setLoading] = useState(true)

    const fetchUserData = async () => {
        try {
            const response = await userApi.get(`/show`, { withCredentials: true });
            setUsers(response.data);

            // Calculate TotalPostData based on the blogs returned from the API
            const userData = response.data.reduce((acc: number[], user: User) => {
                // Only count the posts with attribute.status === true
                const createdDate = new Date(user.createdDate);
                const index = dayAndMonthData.findIndex(date => {
                    const [day, month] = date.split(' ');
                    const parseDate = parseInt(day, 10)
                    return (
                        (createdDate.getDate() >= parseDate - 6 && createdDate.getDate() <= parseDate) &&
                        monthNames[createdDate.getMonth()] === month
                    );
                });

                // Include the data of the previous day for each data point
                if (index !== -1) {
                    acc[index]++;
                }
                return acc;
            }, Array(dayAndMonthData.length).fill(0));

            setTotalUserData(userData);
            setLoading(false)
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };
    useEffect(() => {
        fetchUserData();
    }, []);

    const TotalUserData = totalUserData;
    // Create an array of dates with day and month
    const dayAndMonthData = [...Array(4)].map((_, index) => {
        const date = new Date(currentDate);
        date.setDate(currentDate.getDate() - 7 * (3 - index)); // Subtract in ascending order
        const day = date.getDate();
        const month = monthNames[date.getMonth()];
        return `${day} ${month}`;
    });

    // Combine the day and month data with User values
    const data = dayAndMonthData.map((name, index) => ({ name, User: TotalUserData[index] }));

    if (Loading) {
        return (
            <h1 style={{ color: 'white' }}>Loading...</h1>
        )
    }
    else {
        return (
            <LineChart className='' width={1150} height={500} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid stroke="#666" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="User" stroke="#82ca9d" />
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
}
const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];
