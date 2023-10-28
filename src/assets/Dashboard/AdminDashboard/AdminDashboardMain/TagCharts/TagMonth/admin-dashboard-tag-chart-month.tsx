/* BAR CHART FOR MOST POPULAR TAG */


import { BarChart, Bar, YAxis, Tooltip, Cell, LabelList, XAxis } from 'recharts';

function BarChartTagMonth() {
    const data = [
        { tagName: '#css', TotalPost: 210, color: '#4B0082' },
        { tagName: '#react', TotalPost: 421, color: '#CC5500' },
        { tagName: '#python', TotalPost: 531, color: '#FFC72C' },
        { tagName: '#C++', TotalPost: 942, color: 'red' },
        { tagName: '#webdev', TotalPost: 214, color: '#006400' },
        { tagName: '#html', TotalPost: 372, color: '#800000' },
        { tagName: '#java', TotalPost: 692, color: '#800080' },
        { tagName: '#springboot', TotalPost: 761, color: '#FF1493' },
        { tagName: '#.NET', TotalPost: 801, color: 'orange' },
        { tagName: '#SQL', TotalPost: 941, color: '#708090' },
    ];

    // Sort the data array based on TotalPost in ascending order
    const sortedData = [...data].sort((a, b) => a.TotalPost - b.TotalPost);

    return (
        <BarChart width={900} height={500} data={sortedData}>
            <YAxis />
            <XAxis dataKey="tagName" tick={false} />
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
                <LabelList dataKey="tagName" position="top" fill="#efefef" />
            </Bar>
        </BarChart>
    );
}

export default BarChartTagMonth;
