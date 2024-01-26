import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
      display: false,
    },
    title: {
      display: false,
      text: 'Chart',
    },
    scales: {
      x: [
        {
          grid: {
            display: false,
          },
        },
      ],
    },
  },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const data = {
  labels,
  datasets: [
    {
      label: '',
      data: ['5000', '18000', '4000', '28000', '10000', '45000', '5000','20000', '32000', '4000', '30000', '25000', '50000'],
      borderRadius: 30,
      backgroundColor: '#EBFAF6',
      hoverBackgroundColor: '#34CAA5',
    },
  ],
};

export default function BarChart() {

  
  return (
    <>
    <div className='w-[100%] py-2 overflow-scroll lg:overflow-hidden lg:max-w-[calc(100%_-_16px)]  h-[374px]'>
      <Bar options={options} data={data} />
    </div>
    </>
  )
}
