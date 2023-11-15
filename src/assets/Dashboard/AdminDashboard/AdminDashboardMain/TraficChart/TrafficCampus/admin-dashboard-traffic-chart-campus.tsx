import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { userApi } from '../../../../../../config/axios';
import User from '../../../../../../model/user';

const PieChartTrafficCampus: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await userApi.get('/show', { withCredentials: true });
                setUsers(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        fetchUserData();
    }, []);

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF0080'];

    // Calculate data for the pie chart based on the users' campus
    const campusCountMap: Record<string, number> = {};
    users.forEach((user) => {
        campusCountMap[user.campus] = (campusCountMap[user.campus] || 0) + 1;
    });

    const campusDisplayNames: Record<string, string> = {
        'DN': 'Da Nang',
        'HN': 'Ha Noi',
        'HL': 'Hoa Lac',
        'QN': 'Quy Nhon',
        'CT': 'Can Tho',
        // Add more mappings as needed
    };

    const data = Object.keys(campusCountMap).map((campus, index) => {
        const displayName = campusDisplayNames[campus] || campus;
        return {
            name: displayName,
            value: campusCountMap[campus],
            percentage: ((campusCountMap[campus] / users.length) * 100).toFixed(2) + '%',
            color: COLORS[index % COLORS.length],
        };
    });

    if (loading) {
        return <h1 style={{ color: 'white' }}>Loading...</h1>;
    }
    else {
        return (
            <PieChart width={1000} height={350}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={90}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percentage }) => `${name} (${percentage})`}
                >
                    {data.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip
                    contentStyle={{
                        background: '#111',
                        border: '0.5px solid #333',
                        borderRadius: '5px'
                    }}
                    itemStyle={{ color: '#efefef' }}
                />
                <Legend />
            </PieChart>
        );
    }
};

export default PieChartTrafficCampus;
