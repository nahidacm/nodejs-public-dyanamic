// import React from 'react';
// import { AiTwotoneMoneyCollect } from "react-icons/ai";
// import { TbDatabaseDollar } from "react-icons/tb";
// import { RiMoneyPoundCircleLine } from "react-icons/ri";


// import { Card } from 'antd';

// const OperationalIncome = () => {
//   const leaseIncome = "3454.000";
//   const ticketIncome = "3454.000";

//   return (
//     <>
//       {/* Header */}
//       <div style={{ display: "flex", alignItems: "center", gap: "5px", color: "#318CE7" }}>
//         <AiTwotoneMoneyCollect size={20} />
//         <h3>Operational Income</h3>
//       </div>
//       {/* Header */}

//       {/* Ticket Income */}
//       <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//         <Card style={{ alignItems: "center", display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center" }}>
//           <TbDatabaseDollar size={25} style={{ color: "#318CE7" }} /> 
//           <p style={{ color: "#318CE7" }}>{ticketIncome}BDT</p>
//           <p>Ticket Income</p>
//         </Card>
//       </div>
//       {/* Ticket Income */}
    
//       {/* Lease Income */}
//       <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//         <Card style={{ alignItems: "center", display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center" }}>
//           <RiMoneyPoundCircleLine size={25} style={{ color: "#318CE7" }} />
//           <h2 style={{ color: "#318CE7" }}>{leaseIncome}BDT</h2>
//           <p>Lease Income</p>
//         </Card>
//       </div>
//       {/* Lease Income */}
//     </>
//   );
// };

// export default OperationalIncome;


import React from 'react';
import { AiTwotoneMoneyCollect } from "react-icons/ai";
import { TbDatabaseDollar } from "react-icons/tb";
import { RiMoneyPoundCircleLine } from "react-icons/ri";

const OperationalIncome = () => {
  const leaseIncome = "4,57,99,151";
  const ticketIncome = "1,49,37,959";

  return (
    <>
      {/* Header */}
      <div style={{ display: "flex", gap: "5px",alignItems: "center", color: "#318CE7", justifyContent: "center"}}>
        <div><AiTwotoneMoneyCollect size={20} /></div>
        <h4>Operational Income</h4>
      </div>
      {/* Header */}

      {/* Ticket Income */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",margin:0 }}>
        <TbDatabaseDollar size={22} style={{ color: "#318CE7" }} /> 
        <p style={{ color: "#318CE7", margin: "0px", fontSize: "14px" }}>{ticketIncome} BDT</p>
        <p style={{ margin: "0px" }}>Ticket Income</p>
      </div>
      {/* Ticket Income */}
      <div style={{display: "flex", alignItems: "center",justifyContent: "center", margin:0 }}>
        <hr style={{ width: "40%", border: "none", borderBottom: "1px solid #808080" }} />
      </div>
      {/* Lease Income */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
        <RiMoneyPoundCircleLine size={25} style={{ color: "#318CE7" }} />
        <p style={{ color: "#318CE7", margin: "0px",fontSize: "14px" }}>{leaseIncome} BDT</p>
        <p style={{ margin: "0px" }}>Lease Income</p>
      </div>
      {/* Lease Income */}
    </>
  );
};

export default OperationalIncome;

