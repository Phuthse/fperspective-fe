import React, { useEffect, useState } from 'react';
import './admin-dashboard-post.css';
import { LineChartPostWeek, TotalPostWeek } from '../PostCharts/PostWeek/admin-dashboard-post-chart-week';
import {LineChartPostMonth, TotalPostMonth} from '../PostCharts/PostMonth/admin-dashboard-post-chart-month';
import {LineChartPostYear, TotalPostYear} from '../PostCharts/PostYear/admin-dashboard-post-chart-year';
import { LineChartPostAll, TotalPostAll } from '../PostCharts/PostAllTime/admin-dashboard-post-chart-all';

interface ChartOption {
    id: number;
    label: string;
}

const AdminDashoardPostCharts: React.FC = () => {

    const [selectedChart, setSelectedChart] = useState<JSX.Element | null>(<LineChartPostWeek />);
    const [selectedOption, setSelectedOption] = useState<number>(1);
    const [dateRange, setDateRange] = useState<string>('');
    const [totalPost, setTotalPost] = useState<number>(TotalPostWeek);

    const chartOptions: ChartOption[] = [
        { id: 1, label: 'This week' },
        { id: 2, label: 'This month' },
        { id: 3, label: 'This year' },
        { id: 4, label: ' All time' },
    ];

    const handleChartChange = (chartNumber: number) => {
        setSelectedChart(getSelectedChartComponent(chartNumber));
        setSelectedOption(chartNumber);
    };

    const getSelectedChartComponent = (chartNumber: number): JSX.Element => {
        switch (chartNumber) {
            case 1:
                return <LineChartPostWeek />;
            case 2:
                return <LineChartPostMonth />;
            case 3:
                return <LineChartPostYear />;
            case 4:
                return <LineChartPostAll />
            default:
                return <LineChartPostWeek />;
        }
    };

    useEffect(() => {
        if (selectedOption === 4) {
            setDateRange("all time");
            setTotalPost(TotalPostAll);
        } else {
            const currentDate = new Date();
            const startDate = new Date();

            if (selectedOption === 1) {
                startDate.setDate(currentDate.getDate() - 7);
                const startDateStr = formatDateMonth(startDate);
                const endDateStr = formatDateMonth(currentDate);
                setDateRange(`from ${startDateStr} to ${endDateStr}`);
                setTotalPost(TotalPostWeek);
            } else if (selectedOption === 2) {
                startDate.setDate(currentDate.getDate() - 30);
                const startDateStr = formatDateMonth(startDate);
                const endDateStr = formatDateMonth(currentDate);
                setDateRange(`from ${startDateStr} to ${endDateStr}`);
                setTotalPost(TotalPostMonth);
            } else if (selectedOption === 3) {
                startDate.setFullYear(currentDate.getFullYear() - 1);
                const startDateStr = formatMonthYear(startDate);
                const endDateStr = formatMonthYear(currentDate);
                setDateRange(`from ${startDateStr} to ${endDateStr}`);
                setTotalPost(TotalPostYear);
            }
        }
    }, [selectedOption]);


    const formatDateMonth = (date: Date) => {
        const day = date.getDate();
        const month = date.toLocaleString('en-US', { month: 'short' });
        return `${day} ${month}`;
    }

    const formatMonthYear = (date: Date) => {
        const month = date.toLocaleString('en-US', { month: 'short' });
        const year = date.getFullYear();
        return ` ${month} ${year}`;
    }


    return (
        <>
            <div className="admin-dashboard-post-filter">
                {chartOptions.map(option => (
                    <a
                        key={option.id}
                        className={`admin-dashboard-post-filter-option${selectedOption === option.id ? ' selected-filter' : ''}`}
                        onClick={() => handleChartChange(option.id)}
                    >
                        {option.label}
                    </a>
                ))}
                <h2>
                    Total posts
                    <span className='admin-dashboard-date-range'>&nbsp;{dateRange}</span>
                    <span className='admin-dashboard-total-post'>&nbsp;({totalPost})</span>
                </h2>
            </div>
            {selectedChart}
        </>
    );
};

export default AdminDashoardPostCharts;
