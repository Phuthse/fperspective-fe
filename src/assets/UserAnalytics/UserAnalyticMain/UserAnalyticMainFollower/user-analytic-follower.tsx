import React, { useState, useEffect } from 'react';
import './user-analytic-follower.css';
import LineChartFollowerWeek from '../FollowerCharts/FollowerWeek/user-analytic-follower-chart-week';
import LineChartFollowerMonth from '../FollowerCharts/FollowerMonth/user-analytic-follower-chart-month';
import LineChartFollowerYear from '../FollowerCharts/FollowerYear/user-analytic-follower-chart-year';
import LineChartFollowerAll from '../FollowerCharts/FollowerAll/user-analytic-follower-chart-all';

interface ChartOption {
    id: number;
    label: string;
}

const UserAnalyticFollowerCharts: React.FC = () => {
    const [selectedChart, setSelectedChart] = useState<JSX.Element | null>(<LineChartFollowerWeek />);
    const [selectedOption, setSelectedOption] = useState<number>(1);
    const [dateRange, setDateRange] = useState<string>('');

    const chartOptions: ChartOption[] = [
        { id: 1, label: 'This week' },
        { id: 2, label: 'This month' },
        { id: 3, label: 'This year' },
        { id: 4, label: 'All time' },
        { id: 5, label: 'Trafic' },
    ];

    const handleChartChange = (chartNumber: number) => {
        setSelectedChart(getSelectedChartComponent(chartNumber));
        setSelectedOption(chartNumber);
    };

    const getSelectedChartComponent = (chartNumber: number): JSX.Element => {
        switch (chartNumber) {
            case 1:
                return <LineChartFollowerWeek />;
            case 2:
                return <LineChartFollowerMonth />;
            case 3:
                return <LineChartFollowerYear />;
            case 4:
                return <LineChartFollowerAll />;
            default:
                return <LineChartFollowerWeek />;
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
            <div className="admin-dashboard-user-filter">
                {chartOptions.map(option => (
                    <a
                        key={option.id}
                        className={`admin-dashboard-user-filter-option${selectedOption === option.id ? ' selected-filter' : ''}`}
                        onClick={() => handleChartChange(option.id)}
                    >
                        {option.label}
                    </a>
                ))}
                <h2> Total Followers <span>{dateRange}</span></h2>
            </div>
            {selectedChart}
        </>
    );
};

export default UserAnalyticFollowerCharts;
