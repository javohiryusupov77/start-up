import { useState } from "react";
import BarChart from "./charts/BarChart";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import PieChart from "./charts/PieChart";
import { Line } from "react-chartjs-2";
import Linegraph from "./charts/Linegraph";
Chart.register(CategoryScale);

export default function DashboardOwner() {
  const data = {
    labels: ["Red", "Orange", "Blue"],
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
      {
        label: "Popularity of colours",
        data: [55, 23, 96],
        // you can set indiviual colors for each bar
        backgroundColor: ["red", "yellow", "blue"],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };
  const [chartData, setChartData] = useState(data);
  return (
    <div>
      <PieChart chartData={chartData} />
      <BarChart chartData={chartData} />
      <Linegraph chartData={chartData}/>
    </div>
  );
}
