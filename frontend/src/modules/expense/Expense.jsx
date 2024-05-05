

import React, { useState } from "react";
import ReactEcharts from "echarts-for-react"; 
import { Button} from 'antd';
function ExpenseBar() {
  const [chartType, setChartType] = useState('weekly');
  const [chartTitle, setChartTitle] = useState('Weekly Expense');
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
        name: 'Expense',
        type: 'bar',
        data: [100, 400, 200, 330, 390, 330, 220],
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
        name: 'Expense',
        type: 'bar',
        data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 100)),
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
        name: 'Expense',
        type: 'bar',
        data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 20000)),
      },
    ],
  };

//   const handleChartTypeChange = (type) => {
//     setChartType(type);
//   };
  
  const option = chartType === 'weekly' ? weeklyData :
                  chartType === 'monthly' ? monthlyData :
                  yearlyData;


                  const handleChartTypeChange = (type) => {
                    setChartType(type);
                    if (type === 'weekly') {
                      setChartTitle('Weekly Expense');
                    } else if (type === 'monthly') {
                      setChartTitle('Monthly Expense');
                    } else if (type === 'yearly') {
                      setChartTitle('Yearly Expense');
                    }
                  };

  return (
    <div style={{width: "100%" ,display: "flex", flexDirection: "column"}}>
    <div>  <h1 style={{color: "blue"}} >{chartTitle}</h1>
      <div>
        <Button onClick={() => handleChartTypeChange('weekly')}>Weekly</Button>
        <Button onClick={() => handleChartTypeChange('monthly')}>Monthly</Button>
        <Button onClick={() => handleChartTypeChange('yearly')}>Yearly</Button>
      </div></div>
      <ReactEcharts option={option} />
    </div>
  );
}

export default ExpenseBar;
