/* LINE CHART FOR YEAR (1 YEAR PRIOR TO CURRENT MONTH */

import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { blogApi } from '../../../../../../config/axios';
import Blog from '../../../../../../model/blog';


export function LineChartPostYear() {
    const currentDate = new Date();
    const endDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;

    // Calculate startDate by subtracting 1 year from the currentDate
    const startDate = new Date(currentDate);
    startDate.setFullYear(currentDate.getFullYear() - 1);
    const startDateString = `${startDate.getFullYear()}-${(startDate.getMonth() + 1).toString().padStart(2, '0')}-${startDate.getDate().toString().padStart(2, '0')}`;

    const [, setBlogs] = useState<Blog[]>([]);
    const [totalPostData, setTotalPostData] = useState<number[]>([]);
    const [Loading, setLoading] = useState(true);

    const fetchBlogData = async () => {
        try {
            const response = await blogApi.get(`/sort/date/range/${startDateString}/${endDate}`, { withCredentials: true });
            setBlogs(response.data);

            // Calculate TotalPostData based on the blogs returned from the API
            const postData = response.data.reduce((acc: number[], blog: Blog) => {
                // Only count the posts with attribute.status === true
                if (blog.status === true) {
                    const uploadDate = new Date(blog.uploadDate);
                    const index = monthAndYearData.findIndex(monthYear => {
                        const [month, year] = monthYear.split(' ');
                        return (
                            uploadDate.getFullYear() === parseInt(`20${year}`, 10) &&
                            monthNames[uploadDate.getMonth()] === month
                        );
                    });

                    // Include the data of the current month for each data point
                    if (index !== -1) {
                        acc[index]++;
                    }
                }
                return acc;
            }, Array(monthAndYearData.length).fill(0));

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
    // Create an array of dates with month and year, spanning one year
    const monthAndYearData = [...Array(13)].map((_, index) => {
        const date = new Date(currentDate);
        date.setMonth(currentDate.getMonth() - (12 - index));
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear().toString().slice(-2);;
        return `${month} ${year}`;
    });
    const data = monthAndYearData.map((name, index) => ({ name, TotalPost: TotalPostData[index] }));

    if (Loading) {
        return (
            <h1 style={{ color: 'white' }}>Loading...</h1>
        )
    }
    else {
        return (
            <LineChart className='' width={1150} height={500} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid stroke="#666" strokeDasharray="5 5" />
                <Line type="bump" dataKey="TotalPost" stroke="purple" />
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