/* LINE CHART FOR WEEK (6 DAYS PRIOR TO TODAY) */


import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { userApi } from '../../../../../../config/axios';
import { useState, useEffect } from 'react';
import User from '../../../../../../model/user';

export function LineChartUserWeek() {

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
                const createdDate = new Date(user.createdDate);
                const index = dayAndMonthData.findIndex(date => {
                    const [day, month] = date.split(' ');
                    return (
                        createdDate.getDate() === parseInt(day, 10) &&
                        monthNames[createdDate.getMonth()] === month
                    );
                });

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

    const TotalUserData = totalUserData
    // Create an array of the past 7 days, including today, with day and month
    const dayAndMonthData = [...Array(8)].map((_, index) => {
        const date = new Date(currentDate);
        date.setDate(currentDate.getDate() - (7 - index));
        const day = date.getDate();
        const month = monthNames[date.getMonth()];
        return `${day} ${month}`;
    });
    const data = dayAndMonthData.map((name, index) => ({ name, User: TotalUserData[index] }));

    if (Loading) {
        return (
            <h1 style={{ color: 'white' }}>Loading...</h1>
        )
    }
    else {
        return (
            <LineChart width={1000} height={500} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid stroke="#666" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="User" stroke="rgb(59, 160, 255)" />
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