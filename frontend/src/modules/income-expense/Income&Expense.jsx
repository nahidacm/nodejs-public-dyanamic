
import React, { useState } from "react";
import ReactEcharts from "echarts-for-react";
import { Button} from 'antd';

const generateRandomData = (chartTitle = 'Weekly') => {
    let dataLength = 7;
    if (chartTitle === 'Monthly') {
        dataLength = 30;
    } else if (chartTitle === 'Yearly') {
        dataLength = 12;
    }

    const randomIncome = Array.from({ length: dataLength }, () => Math.floor(Math.random() * 5000) + 1000);
    const randomExpense = Array.from({ length: dataLength }, () => Math.floor(Math.random() * 500) + 100); 
  
    return {
        income: randomIncome,
        expense: randomExpense,
      
    };
};

function IncomeExpenseTwinBar() {
    const [chartTitle, setChartTitle] = useState('Weekly');

    const handleChartTypeChange = (type) => {
        setChartTitle(type);
    };

    const option = {
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
            data: chartTitle === 'Weekly' ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] :
                   chartTitle === 'Monthly' ? Array.from({ length: 30 }, (_, i) => `${i + 1}`) :
                   ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        yAxis: {
            type: 'value',
            name: 'Amount',
            axisLabel: {
                formatter: '{value}'
            }
        },
        series: [
            {
                name: 'Income',
                type: 'bar',
                data: generateRandomData(chartTitle).income,
            },
            {
                name: 'Expense',
                type: 'bar',
                data: generateRandomData(chartTitle).expense,
            },
        
        ],
    };

    return (
        <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
            <div>
                <h1 style={{ color: "blue", display:"flex", justifyContent:"center" }}>{chartTitle}</h1>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <Button onClick={() => handleChartTypeChange('Weekly')}>Weekly</Button>
                    <Button onClick={() => handleChartTypeChange('Monthly')}>Monthly</Button>
                    <Button onClick={() => handleChartTypeChange('Yearly')}>Yearly</Button>
                </div>
            </div>
            <ReactEcharts option={option} />
        </div>
    );
}

export default IncomeExpenseTwinBar;

