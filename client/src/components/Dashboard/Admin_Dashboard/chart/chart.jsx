import Chart from "chart.js/auto";
import { Bar, Bubble } from "react-chartjs-2";
import {data} from "./dummyData"

//const NewlineS =new Chart().Line(data)
// Create a Line component with the data prop
const LineChart = () => {
return (
<div className="mx-2">
     <h1 className="font-extrabold text-slate-400">Analytics</h1>
<Bar data={data} />

</div>
);
};

export default LineChart;