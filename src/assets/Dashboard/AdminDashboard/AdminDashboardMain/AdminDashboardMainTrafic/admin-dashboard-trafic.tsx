import React, { useEffect, useState } from 'react';
import './admin-dashboard-trafic.css';
import PieChartTrafficCampus from '../TraficChart/TrafficCampus/admin-dashboard-traffic-chart-campus';
import PieChartTrafficTerm from '../TraficChart/TrafficTerm/admin-dashboard-traffic-chart-term';
import PieChartTrafficMajor from '../TraficChart/TrafficMajor/admin-dashboard-traffic-chart-major';

interface ChartOption {
    id: number;
    label: string;
}

const AdminDashoardTraficCharts: React.FC = () => {
    const [selectedChart, setSelectedChart] = useState<JSX.Element | null>(<PieChartTrafficCampus />);
    const [selectedOption, setSelectedOption] = useState<number>(1);
    const [message, setMessage] = useState<string>('');

    const chartOptions: ChartOption[] = [
        { id: 1, label: 'By Campus' },
        { id: 2, label: 'By Term' },
        { id: 3, label: 'By Major' },
    ];

    const handleChartChange = (chartNumber: number) => {
        setSelectedChart(getSelectedChartComponent(chartNumber));
        setSelectedOption(chartNumber);
    };

    const getSelectedChartComponent = (chartNumber: number): JSX.Element => {
        switch (chartNumber) {
            case 1:
                return <PieChartTrafficCampus />;
            case 2:
                return <PieChartTrafficTerm />;
            case 3:
                return <PieChartTrafficMajor />;
            default:
                return <PieChartTrafficCampus />;
        }
    };

    useEffect(() => {
        if (selectedOption === 1) {
            setMessage("Campus");
        } else if (selectedOption === 2) {
            setMessage('Term');
        } else if (selectedOption === 3) {
            setMessage('Major');
        }
    }, [selectedOption]);

    return (
        <>
            <div className="admin-dashboard-traffic-filter">
                {chartOptions.map(option => (
                    <a
                        key={option.id}
                        className={`admin-dashboard-traffic-filter-option${selectedOption === option.id ? ' selected-filter' : ''}`}
                        onClick={() => handleChartChange(option.id)}
                    >
                        {option.label}
                    </a>
                ))}
                <h2>Traffic by <span>{message}</span></h2>
            </div>
            {selectedChart}
        </>
    );
};

export default AdminDashoardTraficCharts;
