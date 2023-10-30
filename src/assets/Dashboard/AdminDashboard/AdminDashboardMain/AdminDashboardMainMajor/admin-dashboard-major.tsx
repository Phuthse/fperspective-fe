import React, { useEffect, useState } from 'react';
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
    const [message, setMessage] = useState<string>('');

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

    useEffect(() => {
        if (selectedOption === 1) {
            setMessage("Information Technology");
        } else if (selectedOption === 2) {
            setMessage('Business Administrator');
        } else if (selectedOption === 3) {
            setMessage('Language Studies');
        } else if (selectedOption === 4) {
            setMessage('All Major');
        }
    }, [selectedOption]);

    return (
        <>
            <div className="admin-dashboard-major-filter">
                {chartOptions.map(option => (
                    <a
                        key={option.id}
                        className={`admin-dashboard-post-major-option${selectedOption === option.id ? ' selected-filter' : ''}`}
                        onClick={() => handleChartChange(option.id)}
                    >
                        {option.label}
                    </a>
                ))}
                <h2> Traffic in  <span>{message}</span></h2>
            </div>
            {selectedChart}
        </>
    );
};

export default AdminDashoardMajorCharts;
