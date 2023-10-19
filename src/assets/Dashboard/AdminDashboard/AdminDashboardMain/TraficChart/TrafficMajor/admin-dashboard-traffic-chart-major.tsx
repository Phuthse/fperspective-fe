import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
    { name: 'Business Administrator', value: 2233 },
    { name: 'Information Technology', value: 4020 },
    { name: 'English Studies', value: 1234 },
    { name: 'Korean Studies', value: 4232 },
    { name: 'Japanese Studies', value: 3842 },
];

const COLORS = ['#0088FE', '#00C49F', '#FF8042', '#AF19FF', '#FF0080'];

const PieChartTrafficMajor: React.FC = () => {
    const total = data.reduce((acc, actor) => acc + actor.value, 0);

    const dataWithPercentage = data.map((actor) => ({
        ...actor,
        percentage: ((actor.value / total) * 100).toFixed(2) + '%',
    }));

    return (
        <>
            <PieChart width={900} height={350} >
                <Pie
                    data={dataWithPercentage}
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
        </>
    );
};

export default PieChartTrafficMajor;
