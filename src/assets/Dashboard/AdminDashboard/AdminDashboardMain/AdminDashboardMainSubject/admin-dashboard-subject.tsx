import React, { useState, useEffect } from 'react';
import './admin-dashboard-subject.css';
import BarChartSubjectWeek from '../SubjectCharts/SubjectWeek/admin-dashboard-subject-chart-week';
import BarChartSubjectMonth from '../SubjectCharts/SubjectMonth/admin-dashboard-subject-chart-month';
import BarChartSubjectYear from '../SubjectCharts/SubjectYear/admin-dashboard-subject-chart-year';
import BarChartSubjectAll from '../SubjectCharts/SubjectAll/admin-dashboard-subject-chart-all';


interface ChartOption {
    id: number;
    label: string;
}

const AdminDashoardSubjectCharts: React.FC = () => {
    const [selectedChart, setSelectedChart] = useState<JSX.Element | null>(<BarChartSubjectWeek />);
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
                return <BarChartSubjectWeek />;
            case 2:
                return <BarChartSubjectMonth />;
            case 3:
                return <BarChartSubjectYear />;
            case 4:
                return <BarChartSubjectAll />;
            default:
                return <BarChartSubjectWeek />;
        }
    };

    useEffect(() => {
        if (selectedOption === 4) {
            setDateRange("all time");
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
            <div className="admin-dashboard-subject-filter">
                {chartOptions.map(option => (
                    <a
                        key={option.id}
                        className={`admin-dashboard-subject-filter-option${selectedOption === option.id ? ' selected-filter' : ''}`}
                        onClick={() => handleChartChange(option.id)}
                    >
                        {option.label}
                    </a>
                ))}
                <h2>Most popular subject <span>{dateRange}</span></h2>
            </div>
            {selectedChart}
        </>
    );
};

export default AdminDashoardSubjectCharts;
