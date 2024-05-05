import React from "react";
import { TbReportMoney } from "react-icons/tb";

const ForshoreIncome = () => {
    const duration= '   July 2022-June 2023 ';
    const revenue= 'BDT 37,12,555';
    const target= ' BDT 50,00,000';
    return (
        <div style={{padding:"2px",marginLeft:"10px"}}>
            <div style={{ display: "flex", alignItems: "center", gap: "5px", color: "#318CE7" }}>
                <TbReportMoney size={20} style={{ color: "#318CE7" }} />
                <p style={{fontSize: "18px"}}>Forshore Income</p>
            </div>
           <div style={{ }}>
                <p style={{ margin: "0px" }}>{duration}</p>
                <p style={{ marginTop: "0px", color: "#318CE7", fontSize: "16px"}}>{revenue}</p> 
                <p style={{ margin: "0px", }}>Target for {duration}</p> 
                <p style={{ margin: "0px", color: "#318CE7", fontSize: "16px"}}>{target}</p> 
           </div>
        </div>
    );
}
export default ForshoreIncome;