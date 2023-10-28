import React, { useState } from 'react';
import './admin-dashboard-major.css';
import PieChartMajorIT from '../MajorChart/MajorIT/admin-dashboard-major-chart-it';
import PieChartMajorBA from '../MajorChart/MajorBA/admin-dashboard-major-chart-ba';
import PieChartMajorLang from '../MajorChart/MajorLang/admin-dashboard-major-chart-lang';
import PieChartMajorAll from '../MajorChart/MajorAll/admin-dashboard-major-chart-all';


interface ChartOption {
    id: number;
    label: string;
}

const AdminDashoardMajorCharts: React.FC = () => {

    const [selectedChart, setSelectedChart] = useState<JSX.Element | null>(<PieChartMajorIT />);
    const [selectedOption, setSelectedOption] = useState<number>(1);

    const chartOptions: ChartOption[] = [
        { id: 1, label: 'IT' },
        { id: 2, label: 'Business' },
        { id: 3, label: 'Language' },
        { id: 4, label: 'All Majors' },
    ];

    const handleChartChange = (chartNumber: number) => {
        setSelectedChart(getSelectedChartComponent(chartNumber));
        setSelectedOption(chartNumber);
    };

    const getSelectedChartComponent = (chartNumber: number): JSX.Element => {
        switch (chartNumber) {
            case 1:
                return <PieChartMajorIT />;
            case 2:
                return <PieChartMajorBA />;
            case 3:
                return <PieChartMajorLang />;
            case 4:
                return <PieChartMajorAll />
            default:
                return <PieChartMajorIT />;
        }
    };

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
            </div>
            {selectedChart}
        </>
    );
};

export default AdminDashoardMajorCharts;
