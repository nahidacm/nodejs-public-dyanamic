
import React from 'react';
import './IncomeTarget.css';
import { RiMoneyDollarCircleLine } from "react-icons/ri";


const IncomeTarget = () => {

    const incomeData = [
        { source: 'Ticket Income', target: 10000, achieved: 8000 },
        { source: 'Lease Income', target: 5000, achieved: 4500 },
        { source: 'CP Income', target: 7000, achieved: 6200 }
    ];

    const calculatePercentage = (achieved, target) => {
        return Math.round((achieved / target) * 100);
    };

    return (
        <div>
            <div style={{ display: "flex", alignItems: "center", gap: "5px", color: "#318CE7"}}>
                <RiMoneyDollarCircleLine size={25} style={{ color: "#318CE7" }} />
                <h4 style={{ color: "#318CE7" }}>Income Target</h4>
            </div>

            {incomeData.map((income, index) => (
                <div key={index}>
                    <p style={{margin: "0px"}}>{income.source}</p>
                    <div className="progress-bar">
                        <div
                            className="progress"
                            style={{ width: `${calculatePercentage(income.achieved, income.target)}%` }}
                        >
                            {calculatePercentage(income.achieved, income.target)}%
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default IncomeTarget;
