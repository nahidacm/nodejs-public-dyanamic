// import React from "react";
// import { DiGhostSmall } from "react-icons/di";
// import { GiCargoShip } from "react-icons/gi";
// import { FaPeopleRoof } from "react-icons/fa6";
// import { GiTakeMyMoney } from "react-icons/gi";


// const KeyFigure = () => {
//     const vessel=348;
//     const Passenger=5348;
//     const Income=53485.00;
//     const year=2024;
//     return (
//         <>
//         <div style={{ display: "flex", alignItems: "center", gap: "5px", color: "#318CE7" }}>
//         <DiGhostSmall size={20} />
//         <h3>Key Figures</h3>
//       </div>
//         <div>
//             <div style={{ display: "flex", alignItems: "center", gap: "5px", color: "#318CE7" }}><GiCargoShip size={25} style={{ color: "#318CE7" }} />  <p>The port receives visits from {vessel} vessels</p></div>
//             <div><div style={{ display: "flex", alignItems: "center", gap: "5px", color: "#318CE7" }}><FaPeopleRoof size={25} style={{ color: "#318CE7" }} />  <p>{Passenger} passedengers have passed the port</p></div></div>
//             <div><div style={{ display: "flex", alignItems: "center", gap: "5px", color: "#318CE7" }}><GiTakeMyMoney size={25} style={{ color: "#318CE7" }} />  <p>{Income} BDT earned in {year}</p></div></div>
//         </div>
//         </>
//     );
// }
// export default KeyFigure;

import React from "react";
import { DiGhostSmall } from "react-icons/di";
import { GiCargoShip } from "react-icons/gi";
import { FaPeopleRoof } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";

const KeyFigure = () => {
    const vessel = 36;
    const Passenger = "59,44,600";
    const Income = '6,76,54,366.35';
    const year = 2024;
    return (
        <>
            <div style={{ display: "flex", alignItems: "center", gap: "5px", color: "#318CE7" }}>
                <DiGhostSmall size={20} />
                <h4>Key Figures</h4>
            </div>
            <div>
                <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <GiCargoShip size={25} style={{ color: "#318CE7" }} />
                    <p>The port daily receives visits from <span style={{ color: "#318CE7", fontSize: "16px" }}>{vessel}</span> vessels</p>
                </div>
                <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <FaPeopleRoof size={25} style={{ color: "#318CE7" }} />
                        <p><span style={{ color: "#318CE7", fontSize: "16px" }}>{Passenger}</span> passengers have passed the port</p>
                    </div>
                </div>
                <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <GiTakeMyMoney size={25} style={{ color: "#318CE7" }} />
                        <p><span style={{ color: "#318CE7", fontSize: "16px" }}>{Income}</span> BDT earned in {year}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default KeyFigure;
