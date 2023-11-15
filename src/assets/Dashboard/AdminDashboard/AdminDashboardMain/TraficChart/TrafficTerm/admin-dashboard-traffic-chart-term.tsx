import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { userApi } from '../../../../../../config/axios';
import User from '../../../../../../model/user';

const PieChartTrafficTerm: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const fetchUserData = async () => {
        const response = await userApi.get('/show', { withCredentials: true });
        setUsers(response.data);
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF0080'];

    // Map user terms to more readable names
    const mapTermToReadableName = (term: string) => {
        switch (term) {
            case 'K19':
                return 'K19';
            case 'K18':
                return 'K18';
            case 'K17':
                return 'K17';
            case 'K16':
                return 'K16';
            case 'K15':
                return 'K15';
            default:
                return 'Before K15';
        }
    };

    // Count the number of users for each term
    const termCounts: Record<string, number> = users.reduce((acc, user) => {
        const term = mapTermToReadableName(user.term);
        acc[term] = (acc[term] || 0) + 1;
        return acc;
    }, {} as Record<string, number>); // Use type assertion

    // Transform data for the pie chart
    const data = Object.keys(termCounts).map((term, _) => ({
        name: term,
        value: termCounts[term],
        percentage: ((termCounts[term] / users.length) * 100).toFixed(2) + '%',
    }));

    return (
        <PieChart width={1000} height={350} >
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

export default PieChartTrafficTerm;
