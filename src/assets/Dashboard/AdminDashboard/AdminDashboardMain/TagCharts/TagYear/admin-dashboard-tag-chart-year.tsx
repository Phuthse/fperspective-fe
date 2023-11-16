/* BAR CHART FOR MOST POPULAR TAG */

import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell, LabelList } from 'recharts';
import { tagApi, blogApi } from '../../../../../../config/axios';
import Tag from '../../../../../../model/tag';

function BarChartTagYear() {
    const [tags, setTags] = useState<Tag[]>([]);
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const currentDate = new Date();
    const endDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;
    const startDate = new Date(currentDate);
    startDate.setFullYear(currentDate.getFullYear() - 1);
    const startDateString = `${startDate.getFullYear()}-${(startDate.getMonth() + 1).toString().padStart(2, '0')}-${startDate.getDate().toString().padStart(2, '0')}`;

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await tagApi.get(`/date/10/${startDateString}/${endDate}`, { withCredentials: true });
                setTags(response.data);
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

            const tagDataPromises = tags.map(async (tag, index) => {
                try {
                    const response = await blogApi.get(`/sort/tag/date/${startDateString}/${endDate}/${tag.tagName}`, { withCredentials: true });
                    console.log(`/sort/subject/month/${startDateString}/${endDate}/${tag.tagName}`)
                    const color = predefinedColors[index % predefinedColors.length];
                    return { tagName: tag.tagName, TotalPost: response.data.length, color };
                } catch (error) {
                    console.error(`Error fetching count for subject ${tag.tagName}:`, error);
                    return { tagName: tag.tagName, TotalPost: 0, color: '#000000' }; // Default color
                }
            });

            const resolvedTagData = await Promise.all(tagDataPromises);
            setData(resolvedTagData);
        };

        if (tags.length > 0) {
            fetchData();
        }
    }, [tags]);

    // Sort the data array based on TotalPost in ascending order
    const sortedData = [...data].sort((a, b) => a.TotalPost - b.TotalPost);

    if (loading) {
        return <h1 style={{ color: 'white' }}>Loading...</h1>;
    }
    else {
        return (
            <>
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
            </>
        );
    }
}

export default BarChartTagYear;
