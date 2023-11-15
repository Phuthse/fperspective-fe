/* LINE CHART FOR YEAR (1 YEAR PRIOR TO CURRENT MONTH */

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import User from '../../../../../../model/user';
import { useState, useEffect } from 'react';
import { userApi } from '../../../../../../config/axios';

export function LineChartUserYear() {
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
                const index = monthAndYearData.findIndex(monthYear => {
                    const [month, year] = monthYear.split(' ');
                    return (
                        createdDate.getFullYear() === parseInt(`20${year}`, 10) &&
                        monthNames[createdDate.getMonth()] === month
                    );
                });

                // Include the data of the current month for each data point
                if (index !== -1) {
                    acc[index]++;
                }
                return acc;
            }, Array(monthAndYearData.length).fill(0));

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

    // Create an array of dates with month and year, spanning one year
    const monthAndYearData = [...Array(13)].map((_, index) => {
        const date = new Date(currentDate);
        date.setMonth(currentDate.getMonth() - (12 - index));
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear().toString().slice(-2);;
        return `${month} ${year}`;
    });
    const data = monthAndYearData.map((name, index) => ({ name, User: TotalUserData[index] }));
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
}
const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];