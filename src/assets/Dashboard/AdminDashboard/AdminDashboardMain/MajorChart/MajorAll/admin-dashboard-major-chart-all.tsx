import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { userApi } from '../../../../../../config/axios';
import User from '../../../../../../model/user';

const PieChartMajorAll: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    const fetchUserData = async () => {
        const response = await userApi.get('/show', { withCredentials: true });
        setUsers(response.data);
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF0080'];

    // Count the number of users for each category
    const categoryCounts: Record<string, number> = users.reduce((acc, user) => {
        const category = user.category;
        acc[category] = (acc[category] || 0) + 1;
        return acc;
    }, {} as Record<string, number>); // Use type assertion

    // Transform data for the pie chart
    const data = Object.keys(categoryCounts).map((category, _) => ({
        name: category,
        value: categoryCounts[category],
        percentage: ((categoryCounts[category] / users.length) * 100).toFixed(2) + '%',
    }));

    if (data.length === 0) {
        return <h1 style={{ color: '#FFF' }}>No data found</h1>;
    }

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
};

export default PieChartMajorAll;
