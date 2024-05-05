
import React, { useState } from "react";
import ReactEcharts from "echarts-for-react"; 
import { Button } from 'antd';

function IncomeBar() {
  const [chartType, setChartType] = useState('weekly');
  const [chartTitle, setChartTitle] = useState('Weekly Income');

  const weeklyData = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Income',
        type: 'bar',
        data: [1000, 4000, 2000, 3300, 3900, 3300, 2200],
      },
    ],
  };

  const monthlyData = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
    xAxis: {
      type: 'category',
      data: Array.from({ length: 30 }, (_, i) => `${i + 1}`),
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Income',
        type: 'bar',
        data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 10000)),
      },
    ],
  };

  const yearlyData = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Income',
        type: 'bar',
        data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 20000)),
      },
    ],
  };

  const handleChartTypeChange = (type) => {
    setChartType(type);
    if (type === 'weekly') {
      setChartTitle('Weekly Income');
    } else if (type === 'monthly') {
      setChartTitle('Monthly Income');
    } else if (type === 'yearly') {
      setChartTitle('Yearly Income');
    }
  };

  const option = chartType === 'weekly' ? weeklyData :
                  chartType === 'monthly' ? monthlyData :
                  yearlyData;

  return (
    <div style={{width: "100%", display: "flex", flexDirection: "column"}}>
      <div>
        {/* <h1 style={{color: "blue"}}>{chartTitle}</h1> */}
        <div>
          <Button onClick={() => handleChartTypeChange('weekly')}>Weekly</Button>
          <Button onClick={() => handleChartTypeChange('monthly')}>Monthly</Button>
          <Button onClick={() => handleChartTypeChange('yearly')}>Yearly</Button>
        </div>
      </div>
      <ReactEcharts option={option} />
    </div>
  );
}

export default IncomeBar;

