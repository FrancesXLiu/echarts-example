import ReactEcharts from "echarts-for-react";
import './App.css';
import CsvChart from "./csv-chart";

function App() {

  const barOptions = {
    title: { text: 'bar chart' },
    tooltip: {},
    xAxis: {
      data: ['ps4', 'xbox', 'switch', 'pc']
    },
    yAxis: {},
    series: [{
      name: 'sales',
      type: 'bar',
      data: [5, 20, 36, 10]
    }]
  };

  const pieOptions = {
    title: { text: 'pie chart' },
    tooltip: {},
    series: [{
      name: 'sales',
      type: 'pie',
      data: [
        { name: 'ps4', value: 5 },
        { name: 'xbox', value: 20 },
        { name: 'switch', value: 36 },
        { name: 'pc', value: 10 }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }],

  };

  return (
    <div className="App">
      <div id="bar">
        <ReactEcharts option={barOptions} />
      </div>
      <div id="pie">
        <ReactEcharts option={pieOptions} />
      </div>
      <div id="nightingale">
        <CsvChart />
      </div>

    </div>
  );
}

export default App;
