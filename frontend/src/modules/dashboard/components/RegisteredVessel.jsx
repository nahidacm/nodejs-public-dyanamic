import React from 'react';
import ReactECharts from 'echarts-for-react';

const colors = ['#5470C6'];
const option = {
    color: colors,
    tooltip: {
        trigger: 'none',
        axisPointer: {
            type: 'cross'
        }
    },
    legend: {   itemStyle: {
        color: '#318CE7' // Color of the series name
    }},
    grid: {
        top: 70,
        bottom: 50
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return (
                            'Registered Vessel  ' +
                            params.value +
                            (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                        );
                    }
                }
            },
            data: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024']
        }
    ],
    yAxis: [
        {
            type: 'value',
            show: false

        }
    ],
    series: [
        {
            name: 'Registered Vessel(Yearly)',
            textStyle: {
                color: '#318CE7',
            },
            type: 'line',
            smooth: true,
            emphasis: {
                focus: 'series'
            },
        
              label: {
                show: true,
                color: '#318CE7',
              },
            data: [39, 59, 49, 41, 63, 19, 62, 26, 46, 54]
        }
    ]
};

function RegisteredVessel() {
    return (
        <ReactECharts option={option} style={{ height: '100%', width: '100%',  color: '#318CE7'}} />
    );
}

export default RegisteredVessel;
