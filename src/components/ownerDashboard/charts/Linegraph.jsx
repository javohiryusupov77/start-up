import { Line } from "react-chartjs-2";


export default function Linegraph({chartData}) {
  return (
    
     <div className="chart-container  container mx-auto md:my-4 md:py-4 my-2 py-2">
      <h2 className="text-center font-semibold font-inter text-xl my-2" >LineGraph Chart</h2>
      
      <Line data={chartData}
        className='!w-[100%]'
        options={{
          plugins: {
            title: {
              display: true,
              
              text: "Users Gained between 2016-2020"
            }
          }
        }}/>
    </div>   
      
    
  )
}
