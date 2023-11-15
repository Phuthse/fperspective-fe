import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { blogApi } from '../../../../../../config/axios';
import Blog from '../../../../../../model/blog';


export function LineChartPostWeek() {
    const currentDate = new Date();
    const endDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;
    const startDate = new Date(currentDate);
    startDate.setDate(currentDate.getDate() - 7);
    const startDateString = `${startDate.getFullYear()}-${(startDate.getMonth() + 1).toString().padStart(2, '0')}-${startDate.getDate().toString().padStart(2, '0')}`;

    const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    const [, setBlogs] = useState<Blog[]>([]);
    const [totalPostData, setTotalPostData] = useState<number[]>([]);
    const [Loading, setLoading] = useState(true)
    const fetchBlogData = async () => {
        try {
            const response = await blogApi.get(`/sort/date/range/${startDateString}/${endDate}`, { withCredentials: true });
            setBlogs(response.data);
            // Calculate TotalPostData based on the blogs returned from the API
            const postData = response.data.reduce((acc: number[], blog: Blog) => {
                const uploadDate = new Date(blog.uploadDate);
                const index = dayAndMonthData.findIndex(date => {
                    const [day, month] = date.split(' ');
                    return (
                        uploadDate.getDate() === parseInt(day, 10) &&
                        monthNames[uploadDate.getMonth()] === month
                    );
                });
                if (index !== -1) {
                    acc[index]++;
                }
                return acc;
            }, Array(dayAndMonthData.length).fill(0));
            setTotalPostData(postData);
            setLoading(false)
        } catch (error) {
            console.error("Error fetching blog data:", error);
        }
    };
    useEffect(() => {
        fetchBlogData();
    }, []);
    const TotalPostData = totalPostData;
    const dayAndMonthData = [...Array(8)].map((_, index) => {
        const date = new Date(currentDate);
        date.setDate(currentDate.getDate() - (7 - index));
        const day = date.getDate();
        const month = monthNames[date.getMonth()];
        return `${day} ${month}`;
    });
    const data = dayAndMonthData.map((name, index) => ({ name, TotalPost: TotalPostData[index] }));

    if (Loading) {
        return (
            <h1 style={{ color: 'white' }}>Loading...</h1>
        )
    }
    else {
        return (
            <>
                <LineChart className='' width={1000} height={500} data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid stroke="#666" strokeDasharray="5 5" />
                    <Line type="monotone" dataKey="TotalPost" stroke="rgb(59, 160, 255)" />
                    <Tooltip
                        contentStyle={{
                            background: '#111',
                            border: '0.5px solid #333',
                            borderRadius: '5px'
                        }}
                    />
                    <Legend />
                </LineChart>
            </>
        );
    }
}

