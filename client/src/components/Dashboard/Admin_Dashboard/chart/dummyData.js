

// Define the labels and data for the chart
const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];


  const Userdata = {
  
      label: "Users",
      backgroundColor: "rgb(5, 99, 0)",
      borderColor:"red",
      data: [25, 30, 15, 2, 100, 30, 45,73,22,17,36,79,25],
    }
  const Revenuedata = {
  labels: labels,
 
      label: "Revenue",
      backgroundColor: "blue",
      borderColor: "blue",
      data: [0, 10, 5, 2, 20, 30, 45,59,34,50,70,88],
    }

export  const data = {
  labels: labels,
  datasets: [
    {
      label: "Sales",
      backgroundColor: "gold",
      borderColor: "gold",
      data: [0, 10, 5, 2, 20, 30, 45],
    },Userdata,Revenuedata
  ],
};
