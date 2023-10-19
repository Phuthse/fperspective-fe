import React, { useState, useEffect } from 'react';
import './user-analytic-comment.css';
import LineChartCommentWeek from '../CommentCharts/CommentWeek/user-analytic-comment-chart-week';
import LineChartCommentMonth from '../CommentCharts/CommentMonth/user-analytic-comment-chart-month';
import LineChartCommentYear from '../CommentCharts/CommentYear/user-analytic-comment-chart-year';
import LineChartCommentAll from '../CommentCharts/CommentAll/user-analytic-comment-chart-all';


interface ChartOption {
    id: number;
    label: string;
}

const UserAnalyticCommentCharts: React.FC = () => {
    const [selectedChart, setSelectedChart] = useState<JSX.Element | null>(<LineChartCommentWeek />);
    const [selectedOption, setSelectedOption] = useState<number>(1);
    const [dateRange, setDateRange] = useState<string>('');

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
                return <LineChartCommentWeek />;
            case 2:
                return <LineChartCommentMonth />;
            case 3:
                return <LineChartCommentYear />;
            case 4:
                return <LineChartCommentAll />;
            default:
                return <LineChartCommentWeek />;
        }
    };

    useEffect(() => {
        if (selectedOption === 4) {
            setDateRange("all time");
        } else if (selectedOption === 5) {
            setDateRange("percentage");
        } else {
            const currentDate = new Date();
            const startDate = new Date();

            if (selectedOption === 1) {
                startDate.setDate(currentDate.getDate() - 7);
                const startDateStr = formatDateMonth(startDate);
                const endDateStr = formatDateMonth(currentDate);
                setDateRange(`from ${startDateStr} to ${endDateStr}`);
            } else if (selectedOption === 2) {
                startDate.setDate(currentDate.getDate() - 30);
                const startDateStr = formatDateMonth(startDate);
                const endDateStr = formatDateMonth(currentDate);
                setDateRange(`from ${startDateStr} to ${endDateStr}`);
            } else if (selectedOption === 3) {
                startDate.setFullYear(currentDate.getFullYear() - 1);
                const startDateStr = formatMonthYear(startDate);
                const endDateStr = formatMonthYear(currentDate);
                setDateRange(`from ${startDateStr} to ${endDateStr}`);
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
            <div className="user-analytic-comment-filter">
                {chartOptions.map(option => (
                    <a
                        key={option.id}
                        className={`user-analytic-comment-filter-option${selectedOption === option.id ? ' selected-filter' : ''}`}
                        onClick={() => handleChartChange(option.id)}
                    >
                        {option.label}
                    </a>
                ))}
                <h2> Total Comments <span>{dateRange}</span></h2>
            </div>
            {selectedChart}
        </>
    );
};

export default UserAnalyticCommentCharts;
