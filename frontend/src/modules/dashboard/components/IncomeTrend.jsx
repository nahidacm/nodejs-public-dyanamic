
import React, { useState } from "react";
import ReactEcharts from "echarts-for-react"; 
import { Button } from 'antd';

function IncomeTrend() {
  const [chartType, setChartType] = useState('monthly');
  const [chartTitle, setChartTitle] = useState('Income Trend (Monthly)');

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
        data: [10000, 40000, 20000, 30300, 39000, 30300, 20200],
        itemStyle: {
          color: '#318CE7' 
        }
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
        data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 100000)),
        itemStyle: {
          color: '#318CE7' 
        }
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
        data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 200000)),
        itemStyle: {
          color: '#318CE7' 
        }
      },
    ],
  };

  const handleChartTypeChange = (type) => {
    setChartType(type);
    if (type === 'weekly') {
      setChartTitle('Income Trend (Weekly)');
    } else if (type === 'monthly') {
      setChartTitle('Income Trend (Monthly)');
    } else if (type === 'yearly') {
      setChartTitle('Income Trend (Yearly)');
    }
  };

  const option = chartType === 'weekly' ? weeklyData :
                  chartType === 'monthly' ? monthlyData :
                  yearlyData;

  return (
    <div style={{width: "100%", display: "flex", flexDirection: "column"}}>
      <div>
        <h4 style={{color: "#318CE7",margin:0}}>{chartTitle}</h4>
        <div>
          <Button onClick={() => handleChartTypeChange('weekly')}>Weekly</Button>
          <Button onClick={() => handleChartTypeChange('monthly')}>Monthly</Button>
          <Button onClick={() => handleChartTypeChange('yearly')}>Yearly</Button>
        </div>
      </div>
      <div style={{padding:0,margin:0}}><ReactEcharts option={option}/></div>
    </div>
  );
}

export default IncomeTrend;

