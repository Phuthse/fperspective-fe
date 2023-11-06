import React, { useState, useEffect } from 'react';
import './user-analytic-upvote.css';
import { LineChartUpvoteWeek, TotalUpvoteWeek } from '../UpvoteCharts/UpvoteWeek/user-analytic-upvote-chart-week';
import { LineChartUpvoteMonth, TotalUpvoteMonth } from '../UpvoteCharts/UpvoteMonth/user-analytic-upvote-chart-month';
import { LineChartUpvoteYear, TotalUpvoteYear } from '../UpvoteCharts/UpvoteYear/user-analytic-upvote-chart-year';
import { LineChartUpvoteAll, TotalUpvoteAll } from '../UpvoteCharts/UpvoteAll/user-analytic-upvote-chart-all';



interface ChartOption {
    id: number;
    label: string;
}

const UserAnalyticUpvoteCharts: React.FC = () => {
    const [selectedChart, setSelectedChart] = useState<JSX.Element | null>(<LineChartUpvoteWeek />);
    const [selectedOption, setSelectedOption] = useState<number>(1);
    const [dateRange, setDateRange] = useState<string>('');
    const [totalUpvote, setTotalUpvote] = useState<number>(TotalUpvoteWeek)

    const chartOptions: ChartOption[] = [
        { id: 1, label: 'This week' },
        { id: 2, label: 'This month' },
        { id: 3, label: 'This year' },
        { id: 4, label: 'All time' },
    ];

    const handleChartChange = (chartNumber: number) => {
        setSelectedChart(getSelectedChartComponent(chartNumber));
        setSelectedOption(chartNumber);
    };

    const getSelectedChartComponent = (chartNumber: number): JSX.Element => {
        switch (chartNumber) {
            case 1:
                return <LineChartUpvoteWeek />;
            case 2:
                return <LineChartUpvoteMonth />;
            case 3:
                return <LineChartUpvoteYear />;
            case 4:
                return <LineChartUpvoteAll />;
            default:
                return <LineChartUpvoteWeek />;
        }
    };

    useEffect(() => {
        if (selectedOption === 4) {
            setDateRange("all time");
            setTotalUpvote(TotalUpvoteAll)
        } else {
            const currentDate = new Date();
            const startDate = new Date();

            if (selectedOption === 1) {
                startDate.setDate(currentDate.getDate() - 7);
                const startDateStr = formatDateMonth(startDate);
                const endDateStr = formatDateMonth(currentDate);
                setDateRange(`from ${startDateStr} to ${endDateStr}`);
                setTotalUpvote(TotalUpvoteWeek);
            } else if (selectedOption === 2) {
                startDate.setDate(currentDate.getDate() - 30);
                const startDateStr = formatDateMonth(startDate);
                const endDateStr = formatDateMonth(currentDate);
                setDateRange(`from ${startDateStr} to ${endDateStr}`);
                setTotalUpvote(TotalUpvoteMonth);
            } else if (selectedOption === 3) {
                startDate.setFullYear(currentDate.getFullYear() - 1);
                const startDateStr = formatMonthYear(startDate);
                const endDateStr = formatMonthYear(currentDate);
                setDateRange(`from ${startDateStr} to ${endDateStr}`);
                setTotalUpvote(TotalUpvoteYear);
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
            <div className="user-analytic-upvote-filter">
                {chartOptions.map(option => (
                    <a
                        key={option.id}
                        className={`user-analytic-upvote-filter-option${selectedOption === option.id ? ' selected-filter' : ''}`}
                        onClick={() => handleChartChange(option.id)}
                    >
                        {option.label}
                    </a>
                ))}
                <h2>
                    Total upvotes
                    <span className='analytic-date-range'>&nbsp;{dateRange}</span>
                    <span className='analytic-total-comment'>&nbsp;({totalUpvote})</span>
                </h2>
            </div>
            {selectedChart}
        </>
    );
};

export default UserAnalyticUpvoteCharts;
