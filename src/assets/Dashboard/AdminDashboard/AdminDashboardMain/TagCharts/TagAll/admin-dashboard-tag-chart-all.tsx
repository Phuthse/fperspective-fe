import { useState, useEffect } from 'react';
import { BarChart, Bar, YAxis, Tooltip, Cell, LabelList, XAxis } from 'recharts';
import { tagApi } from '../../../../../../config/axios';
import Tag from '../../../../../../model/tag';

function BarChartTagAll() {
    const [tags, setTags] = useState<Tag[]>([]);
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await tagApi.get('/sort/10', { withCredentials: true });
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
                    const response = await tagApi.get(`/count/${tag.tagName}`, { withCredentials: true });
                    // Use predefined colors based on the index
                    const color = predefinedColors[index % predefinedColors.length];
                    return { tagName: tag.tagName, TotalPost: response.data, color };
                } catch (error) {
                    console.error(`Error fetching count for tag ${tag.tagName}:`, error);
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
            <BarChart width={1000} height={500} data={sortedData}>
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
}

export default BarChartTagAll;
