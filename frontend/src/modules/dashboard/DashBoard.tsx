import React from "react";
// import { Card } from "antd";
import "./Dashboard.css";
import OperationalIncome from "./components/OperationalIncome";
import IncomeTarget from "./components/IncomeTarget";
import PassengerTravel from "./components/PassengerTravel";
import KeyFigure from "./components/KeyFigure";
import Map from "./components/Map";
import IncomeTrend from "./components/IncomeTrend";
import ForshoreIncome from "./components/ForshoreIncome";
import RegisteredVessel from "./components/RegisteredVessel";
import ImageSlide from "./components/ImageSlider/ImageSlide";
import { SliderData } from "./components/ImageSlider/SliderData";
// import { MdOndemandVideo } from "react-icons/md";
// import { Link } from "react-router-dom";
import ActivitySlider from "./components/ActivitySlider/ActivitySlider";
import PortMap from "./components/PortMap";

function DashBoard() {
 
  return (
    <>
      <div style={{ display: "flex", gap: "5px" }}>
        <div style={{ display: "flex", gap: "2px", width: "70%" }}>
          <div style={{ flex: "1 1 0" }}>
            <PassengerTravel />
          </div>
          <div style={{ flex: "1 1 0" }}>
            <IncomeTarget />
          </div>
          <div style={{ flex: "1 1 0" }}>
            <OperationalIncome />
          </div>
        </div>
        <div style={{ width: "30%" }}>
          <KeyFigure />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <hr
          style={{
            width: "100%",
            border: "none",
            borderBottom: "1px solid #E5E4E2",
          }}
        />
      </div>

      <div style={{ display: "flex", gap: "20px", marginBottom:0 }}>
        <div style={{ width: "70%" ,}}>
          {/* <Card style={{ height: "100%",  }}> */}
             <PortMap/>
          {/* </Card> */}
        </div>

        <div style={{ width: "30%", display: "flex-col" }}>
          <div>
            <IncomeTrend />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <hr
              style={{
                width: "100%",
                border: "none",
                borderBottom: "1px solid #E5E4E2",
              }}
            />
          </div>
          <div>
            <ForshoreIncome />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <hr
              style={{
                width: "100%",
                border: "none",
                borderBottom: "1px solid #E5E4E2",
              }}
            />
          </div>
          <div style={{ padding: "10px" }}>
            <RegisteredVessel />
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <hr
          style={{
            width: "100%",
            border: "none",
            borderBottom: "1px solid #E5E4E2",
          }}
        />
      </div>
      <div style={{marginTop:0}}>
        {/* <ImageSlide slides={SliderData} /> */}
        <ActivitySlider />
      </div>
    </>
  );
}

export default DashBoard;
