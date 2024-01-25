import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


type Props = {}


export default function BarChart({}: Props) {

    const [chartData, setChartData] = useState<any>({
        datasets: [],
      });
    
    const [chartOptions, setChartOptions] = useState<any>({});
    
    useEffect(() => {
        setChartData({
            // labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            // datasets: [
            //     {
            //         label: 'Sales $',
            //         data: [18127, 22201, 19490, 17938, 24182, 17842, 22475],
            //         borderColor: 'rgb(52, 202, 165)',
            //         backgroundColor: 'rgb(52, 202, 165)',
            //       }, 
            // ]
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
              datasets: [
                {
                  label: 'uv',
                  data: [4000, 3000, 2000, 2780, 1890, 2390,],
                  borderColor: '#8884d8',
                  backgroundColor: 'rgb(52, 202, 165)',
                  fill: false,
                },
              ],
        });
    
        setChartOptions({
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Daily Revenue'
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })
      }, [])


  return (
    <>
        <div className='max-w-[calc(100%_-_16px)]  h-[350px] px-2'>
            <Bar data={chartData} options={chartOptions} />
        </div>
    </>
  )
}