import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
    { name: 'SE', value: 8422, fullName: 'Software Engineering' },
    { name: 'AI', value: 2312, fullName: 'Artificial Intelligence' },
    { name: 'GD', value: 5212, fullName: 'Digital Art Design' },
    { name: 'IA', value: 1234, fullName: 'Information Assurance' },
    { name: 'IS', value: 4321, fullName: 'Information System' },
    { name: 'FIN', value: 8422, fullName: 'Finance' },
    { name: 'HM', value: 2312, fullName: 'Hotel Management' },
    { name: 'IB', value: 5212, fullName: 'International Business' },
    { name: 'MC', value: 1234, fullName: 'Multimedia Communications' },
    { name: 'MKT', value: 4321, fullName: 'Marketing' },
    { name: 'CHN', value: 8422, fullName: 'Eng - Chinese Studies' },
    { name: 'ENG', value: 2312, fullName: 'English Studies' },
    { name: 'BJP', value: 5212, fullName: 'Japaneses Studies' },
    { name: 'BKR', value: 1234, fullName: 'Korean Studies' },
];

const COLORS = [
    'red', 'orange', 'yellow', 'blue', 'green', 'cyan',
    '#efefef', 'pink', 'purple', '#32CD32', '#9370DB', '#FFD700', '#E75480', '#1E90FF'
];

const PieChartMajorAll: React.FC = () => {
    const total = data.reduce((acc, actor) => acc + actor.value, 0);

    const dataWithPercentage = data.map((actor) => ({
        ...actor,
        percentage: ((actor.value / total) * 100).toFixed(2) + '%',
    }));

    return (
        <PieChart width={1000} height={500} >
            <Pie
                data={dataWithPercentage}
                cx="50%"
                cy="50%"
                innerRadius={120}
                outerRadius={150}
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

export default PieChartMajorAll;
