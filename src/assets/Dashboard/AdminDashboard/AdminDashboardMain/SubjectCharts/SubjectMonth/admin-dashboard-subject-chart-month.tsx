/* BAR CHART FOR MOST POPULAR TAG */


import { useState, useEffect } from 'react';
import { BarChart, Bar, YAxis, Tooltip, Cell, LabelList, XAxis } from 'recharts';
import { blogApi, subjectApi } from '../../../../../../config/axios';
import Subject from '../../../../../../model/subject';

function BarChartSubjectMonth() {
    const [subjects, setSubjects] = useState<Subject[]>([]);
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [maxYValue, setMaxYValue] = useState<number>(0);

    const currentDate = new Date();
    const endDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;
    const startDate = new Date(currentDate);
    startDate.setDate(currentDate.getDate() - 28);
    const startDateString = `${startDate.getFullYear()}-${(startDate.getMonth() + 1).toString().padStart(2, '0')}-${startDate.getDate().toString().padStart(2, '0')}`;

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await subjectApi.get(`date/10/${startDateString}/${endDate}`, { withCredentials: true });
                setSubjects(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching tag data:", error);
            }
        };
        fetchUserData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const predefinedColors = [
                '#4B0082', '#CC5500', '#FFC72C', 'red', '#006400',
                '#800000', '#800080', '#FF1493', 'orange', '#708090'
            ];

            const tagDataPromises = subjects.map(async (subject, index) => {
                try {
                    const response = await blogApi.get(`/sort/subject/month/${startDateString}/${endDate}/${subject.subjectName}`, { withCredentials: true });
                    console.log(`/sort/subject/month/${startDateString}/${endDate}/${subject.subjectName}`)
                    const color = predefinedColors[index % predefinedColors.length];
                    return { subjectName: subject.subjectName, TotalPost: response.data.length, color };
                } catch (error) {
                    console.error(`Error fetching count for subject ${subject.subjectName}:`, error);
                    return { subjectName: subject.subjectName, TotalPost: 0, color: '#000000' }; // Default color
                }
            });

            const resolvedTagData = await Promise.all(tagDataPromises);
            setData(resolvedTagData);

            // Calculate the maximum Y value
            const maxTotalPost = Math.max(...resolvedTagData.map(entry => entry.TotalPost));
            setMaxYValue(maxTotalPost + 1); // Add 1 to extend one unit higher
        };

        if (subjects.length > 0) {
            fetchData();
        }
    }, [subjects]);

    // Sort the data array based on TotalPost in ascending order
    const sortedData = [...data].sort((a, b) => a.TotalPost - b.TotalPost);

    if (loading) {
        return (
            <h1 style={{ color: 'white' }}>Loading...</h1>
        );
    } else {
        return (
            <BarChart width={900} height={500} data={sortedData}>
                <YAxis domain={[0, maxYValue]} />
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
}

export default BarChartSubjectMonth;
