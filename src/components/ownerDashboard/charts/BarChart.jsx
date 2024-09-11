// eslint-disable-next-line no-unused-vars
import { CategoryScale, Chart, LinearScale } from 'chart.js';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Bar } from 'react-chartjs-2';

// eslint-disable-next-line react/prop-types
const BarChart = ({chartData}) => {

  return  <div className="chart-container container mx-auto md:my-4 md:py-4 my-2 py-2">
  <h2 className='text-center font-semibold font-inter text-xl my-2' >Bar Chart</h2>
  <Bar
  className='!w-full'
    data={chartData}
    options={{
      plugins: {
        title: {
          display: true,
          text: "Users Gained between 2016-2020"
        },
        legend: {
          display: false
        }
      }
    }}
  />
</div>;
};

export default BarChart;
