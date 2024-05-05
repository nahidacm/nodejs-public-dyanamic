
import React, { useState } from "react";
import ReactEcharts from "echarts-for-react";
import { Button } from 'antd';

const generateRandomData = (chartTitle = 'Weekly') => {
    let dataLength = 7;
    if (chartTitle === 'Monthly') {
        dataLength = 30;
    } else if (chartTitle === 'Yearly') {
        dataLength = 12;
    }

    const randomData = [];
    const ghats = ['ghat1', 'ghat2', 'ghat3', 'ghat4'];
    for (let i = 0; i < ghats.length; i++) {
        const seriesData = Array.from({ length: dataLength }, () => Math.floor(Math.random() * 10000));
        randomData.push([ghats[i], ...seriesData]);
    }
    return randomData;
};

const IncomePieChart = () => {
    const [chartTitle, setChartTitle] = useState('Weekly');

    const handleChartTypeChange = (type) => {
        setChartTitle(type);
    };

    const option = {
        legend: {},
        tooltip: {
            trigger: 'axis',
            showContent: false
        },
        dataset: {
            source: [
                ['ghat', ...(chartTitle === 'Weekly' ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] :
                    chartTitle === 'Monthly' ? Array.from({ length: 30 }, (_, i) => `${i + 1}`) :
                        ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])],
                ...generateRandomData(chartTitle)
            ]
        },
        xAxis: { type: 'category' },
        yAxis: {
            gridIndex: 0,
            name: 'Amount( tk )',
        },
        grid: { top: '55%' },
        series: [
            { type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: { focus: 'series' } },
            { type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: { focus: 'series' } },
            { type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: { focus: 'series' } },
            { type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: { focus: 'series' } },
            {
                type: 'pie',
                id: 'pie',
                radius: '35%',
                center: ['50%', '30%'],
                emphasis: { focus: 'self' },
                label: { formatter: '{b}: {@' + (chartTitle === 'Weekly' ? 'Sat' : chartTitle === 'Monthly' ? '1' : 'Jan') + '} ({d}%)' },
                encode: { itemName: 'ghat', value: (chartTitle === 'Weekly' ? 'Sat' : chartTitle === 'Monthly' ? '1' : 'Jan'), tooltip: (chartTitle === 'Weekly' ? 'Sat' : chartTitle === 'Monthly' ? '1' : 'Jan') }
            }
        ]
    };
    const onEvents = {
        updateAxisPointer: (event, echartsInstance) => {
            const xAxisInfo = event.axesInfo[0];
            if (xAxisInfo) {
                const dimension = xAxisInfo.value + 1;
                echartsInstance.setOption({
                    series: {
                        id: 'pie',
                        label: { formatter: '{b}: {@[' + dimension + ']} ({d}%)' },
                        encode: { value: dimension, tooltip: dimension }
                    }
                });
            }
        }
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center', color: '#FFA500', font:'bold' }}>Income by Ghat({chartTitle}) {}</h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button onClick={() => handleChartTypeChange('Weekly')}>Weekly</Button>
                <Button onClick={() => handleChartTypeChange('Monthly')}>Monthly</Button>
                <Button onClick={() => handleChartTypeChange('Yearly')}>Yearly</Button>
            </div>
            <ReactEcharts option={option} style={{ height: '400px' }} onEvents={onEvents} />
        </div>
    );
}

export default IncomePieChart;


