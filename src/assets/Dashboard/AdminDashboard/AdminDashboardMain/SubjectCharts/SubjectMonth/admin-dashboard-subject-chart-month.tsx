/* BAR CHART FOR MOST POPULAR TAG */


import { BarChart, Bar, YAxis, Tooltip, Cell, LabelList, XAxis } from 'recharts';

function BarChartSubjectMonth() {
    const data = [
        { subjectName: 'PRF192', TotalPost: 95, color: '#4B0082' },
        { subjectName: 'PRO192', TotalPost: 42, color: '#CC5500' },
        { subjectName: 'SWT301', TotalPost: 31, color: '#FFC72C' },
        { subjectName: 'SWR302', TotalPost: 42, color: 'red' },
        { subjectName: 'SWP301', TotalPost: 12, color: '#006400' },
        { subjectName: 'DBI202', TotalPost: 5, color: '#800000' },
        { subjectName: 'JPD301', TotalPost: 94, color: '#800080' },
        { subjectName: 'PRN211', TotalPost: 72, color: '#FF1493' },
        { subjectName: 'MAD101', TotalPost: 81, color: 'orange' },
        { subjectName: 'MAS101', TotalPost: 60, color: '#708090' },
    ];

    // Sort the data array based on TotalPost in ascending order
    const sortedData = [...data].sort((a, b) => a.TotalPost - b.TotalPost);

    return (
        <BarChart width={900} height={500} data={sortedData} >
            <YAxis />
            <XAxis dataKey="subjectName" tick={false} />
            <Tooltip
                contentStyle={{
                    background: '#111',
                    color: '#efefef',
                    border: '0.5px #333',
                    borderRadius: '5px',
                }}
                itemStyle={{ color: '#efefef' }}
                cursor={{ display: 'none' }}
            />
            <Bar dataKey="TotalPost">
                {sortedData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                ))}
                <LabelList dataKey="subjectName" position="top" fill="#efefef" />
            </Bar>
        </BarChart>
    );
}

export default BarChartSubjectMonth;
