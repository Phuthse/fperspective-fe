import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
    { name: 'SE', value: 8422, fullName: 'Software Engineering' },
    { name: 'AI', value: 2312, fullName: 'Artificial Intelligence' },
    { name: 'GD', value: 5212, fullName: 'Digital Art Design' },
    { name: 'IA', value: 1234, fullName: 'Information Assurance' },
    { name: 'IS', value: 4321, fullName: 'Information System' },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF0080', '#efefef'];

const PieChartMajorIT: React.FC = () => {
    const total = data.reduce((acc, actor) => acc + actor.value, 0);

    const dataWithPercentage = data.map((actor) => ({
        ...actor,
        percentage: ((actor.value / total) * 100).toFixed(2) + '%',
    }));

    return (
        <PieChart width={1000} height={400} >
            <Pie
                data={dataWithPercentage}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={100}    
                fill="#8884d8"
                dataKey="value"
                label={({ fullName, percentage }) => `${fullName} (${percentage})`}
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
                itemStyle={{
                    color: '#efefef'
                }}
            />
            <Legend />
        </PieChart>
    );
};

export default PieChartMajorIT;
