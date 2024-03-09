"use client";
import { useRef, useEffect, useState } from "react";
import { Chart } from "chart.js/auto";


export default function BarChart() {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios("https://dummyjson.com/users");
      if (response.status != 200) {
        console.error("Bad response");
      }
      const data = response.data;
      // console.log(data);
      const firstSix = data.users.splice(0, 6);
      setChartData(firstSix);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      const context = chartRef.current.getContext("2d");

      const label = chartData.map((items) => items.firstName);
      const data = chartData.map((items) => items.weight);

      const newChart = new Chart(context, {
        type: "bar",
        data: {
          labels: label,
          datasets: [
            {
              // barPercentage: 0.9,
              // barThickness: 50,
              label: "Info",
              data: data,
              backgroundColor: ["#9DBC98"],
            },
          ],
        },
        options: {
          plugins: {
            title: {
            },
          },
          layout: {
            padding: 40,
          },
          responsive: true,
          scales: {
            x: {
              type: "category",
            },
            y: {
              beginAtZero: true,
            },
          },
        },
      });

      chartRef.current.chart = newChart;
    }
  }, [chartData]);

  
  return (
    <div className="relative">
      <canvas ref={chartRef} />
      
    </div>
  );
}