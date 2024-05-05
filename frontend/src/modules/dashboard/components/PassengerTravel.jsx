
import React from 'react';
import ReactEcharts from 'echarts-for-react';

const PassengerTravel = () => {
  const option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: [ 'Passenger Travel'],
      textStyle: {
        color: '#318CE7',
        fontSize: 16 ,
        font: 'bold'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [

      {
        name: 'Passenger Travel',
        type: 'line',
        stack: 'Total',
        smooth: true,
        data: [22000,40300,30500, 53020, 90010,65700, 43040]
      }
    ]
  };

  return (
    <>
      <ReactEcharts
        option={option}
        className='react_for_echarts'
        style={{ width: '90%', height: '85%', marginTop: '15px' }}
      />
    </>
  );
};

export default PassengerTravel;
