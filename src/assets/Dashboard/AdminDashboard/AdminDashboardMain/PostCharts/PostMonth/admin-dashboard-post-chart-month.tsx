
/* LINE CHART FOR MONTH (30 DAYS PRIOR TO TODAY */

import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { blogApi } from '../../../../../../config/axios';
import Blog from '../../../../../../model/blog';


export function LineChartPostMonth() {
    const currentDate = new Date();
    const endDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;

    const startDate = new Date(currentDate);
    startDate.setDate(currentDate.getDate() - 28);

    const startDateString = `${startDate.getFullYear()}-${(startDate.getMonth() + 1).toString().padStart(2, '0')}-${startDate.getDate().toString().padStart(2, '0')}`;

    const [, setBlogs] = useState<Blog[]>([]);
    const [totalPostData, setTotalPostData] = useState<number[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchBlogData = async () => {
        try {
            const response = await blogApi.get(`/sort/date/range/${startDateString}/${endDate}`, { withCredentials: true });
            setBlogs(response.data);

            // Calculate TotalPostData based on the blogs returned from the API
            const postData = response.data.reduce((acc: number[], blog: Blog) => {
                // Only count the posts with attribute.status === true
                if (blog.status === true) {
                    const uploadDate = new Date(blog.uploadDate);
                    const index = dayAndMonthData.findIndex(date => {
                        const [day, month] = date.split(' ');
                        const parseDate = parseInt(day, 10)
                        return (
                            (uploadDate.getDate() >= parseDate - 6 && uploadDate.getDate() <= parseDate) &&
                            monthNames[uploadDate.getMonth()] === month
                        );
                    });

                    if (index !== -1) {
                        acc[index]++;
                    }
                }
                return acc;
            }, Array(dayAndMonthData.length).fill(0));

            setTotalPostData(postData);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching blog data:", error);
        }
    };
    useEffect(() => {
        fetchBlogData();
    }, []);

    const TotalPostData = totalPostData;
    const dayAndMonthData = [...Array(4)].map((_, index) => {
        const date = new Date(currentDate);
        date.setDate(currentDate.getDate() - 7 * (3 - index)); // Subtract in ascending order
        const day = date.getDate();
        const month = monthNames[date.getMonth()];
        return `${day} ${month}`;
    });

    const data = dayAndMonthData.map((name, index) => ({ name, TotalPost: TotalPostData[index] }));

    if (loading) {
        return (
            <h1 style={{ color: 'white' }}>Loading...</h1>
        );
    } else {
        return (
            <LineChart width={1150} height={500} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid stroke="#666" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="TotalPost" stroke="#82ca9d" />
                <Tooltip
                    contentStyle={{
                        background: '#111',
                        border: '0.5px solid #333',
                        borderRadius: '5px'
                    }}
                />
                <Legend />
            </LineChart>
        );
    }
}

const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];