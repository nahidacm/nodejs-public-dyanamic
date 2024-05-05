
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import {
    TooltipComponent,
    TitleComponent,
    GridComponent,
    LegendComponent
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';


echarts.use([TooltipComponent, TitleComponent, GridComponent, LegendComponent, LineChart, CanvasRenderer]);

const PassengerRaceChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            // Mock data for passenger traffic (replace this with actual data fetching)
            const passengerTrafficData = [
                { year: 2010, station1: 1000, station2: 1400, station3: 1600 },
                { year: 2011, station1: 1200, station2: 1600, station3: 1900 },
                { year: 2012, station1: 1300, station2: 1700, station3: 1800 },
                { year: 2013, station1: 1000, station2: 1500, station3: 2000 },
                { year: 2014, station1: 1600, station2: 1800, station3: 2200 },
                { year: 2015, station1: 1700, station2: 1900, station3: 2300 },
                { year: 2016, station1: 1800, station2: 2000, station3: 2100 },
                { year: 2017, station1: 1500, station2: 1900, station3: 2800 },
                { year: 2018, station1: 1900, station2: 1700, station3: 2900 },
                { year: 2019, station1: 2000, station2: 2100, station3: 3100 },
                { year: 2020, station1: 2300, station2: 2400, station3: 3200 },
                { year: 2021, station1: 2700, station2: 2500, station3: 3300 },
                { year: 2010, station1: 1000, station2: 1400, station3: 1600 },
                { year: 2011, station1: 1200, station2: 1600, station3: 1900 },
                { year: 2012, station1: 1300, station2: 1700, station3: 1800 },
                { year: 2013, station1: 1000, station2: 1500, station3: 2000 },
                { year: 2014, station1: 1600, station2: 1800, station3: 2200 },
                { year: 2015, station1: 1700, station2: 1900, station3: 2300 },
                { year: 2016, station1: 1800, station2: 2000, station3: 2100 },
                { year: 2017, station1: 1500, station2: 1900, station3: 2800 },
                { year: 2018, station1: 1900, station2: 1700, station3: 2900 },
                { year: 2019, station1: 2000, station2: 2100, station3: 3100 },
                { year: 2020, station1: 2300, station2: 2400, station3: 3200 },
                { year: 2021, station1: 2700, station2: 2500, station3: 3300 },
            ];

            const chartData = {
                years: passengerTrafficData.map(entry => entry.year),
                stations: Object.keys(passengerTrafficData[0]).filter(key => key !== 'year'),
                series: []
            };

            chartData.stations.forEach(station => {
                const seriesData = passengerTrafficData.map(entry => entry[station]);
                chartData.series.push({ name: station, data: seriesData });
            });

            renderChart(chartData);
        };

        fetchData();
    }, []);

    const renderChart = chartData => {
        const chart = echarts.init(chartRef.current);

        const option = {
            animationDuration: 10000,
            title: {
                text: 'Passenger Traffic by Station'
            },
            tooltip: {
                order: 'valueDesc',
                trigger: 'axis'
            },
            //   legend: {
            //     data: chartData.stations
            //   },
            xAxis: {
                type: 'category',
                data: chartData.years
            },
            yAxis: {
                type: 'value'
            },
            grid: {
                right: 140
            },
              series: chartData.series.map(series => ({
                name: series.name,
                type: 'line',
                showSymbol: false,
                data: series.data,

                endLabel: {
                    show: true,
                    formatter: function(params) {
                        const value = params.value; 
                      const stationName = series.name;
                      return stationName + ': ' + value;
                    },
                    valueAnimation: true, // Adding valueAnimation property
                    distance: 8,
                    },
                  labelLayout: {
                    moveOverlap: 'shiftY'
                  },
                  emphasis: {
                    focus: 'series'
                  },
                //   encode: {
                //     x: 'Year',
                //     y: 'Income',
                //     label: ['Station', 'Count'],
                //     itemName: 'Year',
                //     tooltip: ['Count']
                //   }
              }))
            };
        //     series: chartData.series.map(series => ({
        //         name: series.name,
        //         type: 'line',
        //         showSymbol: false,
        //         data: series.data,
        //         animation: { // Add animation property
        //             duration: 'auto', // 'auto' enables automatic animation duration based on data length
        //             easing: 'linear', // Animation easing, linear for constant speed
        //             onFrame(index, model) {

        //                 if (index === model.get('data').length - 1) {
        //                     // Show endLabel only at the end of the line
        //                     model.getData().setItemLayout(index, { // Set layout position for the endLabel
        //                         label: {
        //                             show: true, // Show endLabel
        //                             formatter: function (params) {
        //                                 const value = params.value;
        //                                 const stationName = series.name;
        //                                 return stationName + ': ' + value;
        //                             },
        //                             position: 'end' // Position the endLabel at the end of the line
        //                         }
        //                     });
        //                 }
        //             }
        //         },
        //         labelLayout: {
        //             moveOverlap: 'shiftY'
        //         },
        //         emphasis: {
        //             focus: 'series'
        //         }
        //     }))
        // };

        chart.setOption(option);


    };

    return <div ref={chartRef} style={{ width: '100%', height: '400px' }} />;
};

export default PassengerRaceChart;

