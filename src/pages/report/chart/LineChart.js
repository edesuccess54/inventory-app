import {Chart as ChartJS, LineElement, PointElement,  LinearScale, CategoryScale, Filler} from 'chart.js'
import { Line } from 'react-chartjs-2';


ChartJS.register({
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler
})


export const LineChart = ({data}) => {
    const hasData = data.length > 1
    const currency = '$'


    return (
        <Line 
        options={{
            responsive: true,
            maintainAspectRatio: false,

            scales: {
                x: {
                    ticks: {
                        autoSkip: true,
                        maxRotation: 0,
                    },
                    grid: {
                        display: false,
                    },
                },
            y: {
                ticks: {
                    stepSize: 20000,
                    callback: function (val) {
                        if (val === 0) {
                        return val;
                        } else {
                        if (val.toString().length >= 10) {
                            return `${currency}` + val / 1000000000 + 'B';
                        } else if (val.toString().length >= 7) {
                            return `${currency}` + val / 1000000 + 'M';
                        } else if (val.toString().length >= 4) {
                            return `${currency}` + val / 1000 + 'k';
                        } else if (val >= 2) {
                            return `${currency}` + val;
                        }
                        }
                    },
                },
                beginAtZero: hasData ? false : true,
                grid: {
                    display: true,
                },
            },
                
            },

            plugins: {
                legend: {
                    display: false,
                    position: 'bottom',
                },
                title: {
                    display: false,
                },
            }

        }}
        data={data}
        />
    )
}