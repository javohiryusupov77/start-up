// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Pie } from 'react-chartjs-2'

// eslint-disable-next-line react/prop-types
export default function PieChart({chartData}) {
  return (
    <div className="chart-container container  mx-auto md:my-4 md:py-4 my-2 py-2">
      <h2 className='text-center font-semibold font-inter text-xl my-2'>Pie Chart</h2>
      
      <Pie
        data={chartData}
        className='min-900:!w-[50%] min-900:!h-[50%] mx-auto '
        options={{
          plugins: {
            title: {
              display: true,
              
              text: "Users Gained between 2016-2020"
            }
          }
        }}
      />
    </div>
  )
}
