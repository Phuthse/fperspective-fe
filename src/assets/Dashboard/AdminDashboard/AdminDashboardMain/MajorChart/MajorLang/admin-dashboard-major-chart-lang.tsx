import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
    { name: 'CHN', value: 8422, fullName: 'Eng - Chinese Studies' },
    { name: 'ENG', value: 2312, fullName: 'English Studies' },
    { name: 'BJP', value: 5212, fullName: 'Japaneses Studies' },
    { name: 'BKR', value: 1234, fullName: 'Korean Studies' },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF0080', '#efefef'];

const PieChartMajorLang: React.FC = () => {
    const total = data.reduce((acc, actor) => acc + actor.value, 0);

    const dataWithPercentage = data.map((actor) => ({
        ...actor,
        percentage: ((actor.value / total) * 100).toFixed(2) + '%',
    }));

    return (
        <PieChart width={600} height={350} >
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
                itemStyle={{ color: '#efefef' }}
            />
            <Legend />
        </PieChart>
    );
};

export default PieChartMajorLang;
