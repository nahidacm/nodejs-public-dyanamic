import React from "react";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router-dom";
import UserLogin from "./modules/user/components/UserLogin.jsx";
import UserCreate from "./modules/user/components/UserCreate.jsx";
import UserList from "./modules/user/components/UserList.jsx";
import DashBoard from "./modules/dashboard/DashBoard.tsx";
import CreatePort from "./modules/port/CreatePort.jsx";
import CreateHumanResource from "./modules/human-resource/CreateHuman.jsx";
import AddTicketIncome from "./modules/income/AddTicketIncome.jsx";
import PortList from "./modules/port/PortList.jsx";
import HumanResourceList from "./modules/human-resource/List.jsx";
import AddCPincome from "./modules/income/Add_c_p_income.jsx";
import AddExpense from "./modules/expense/AddExpense.jsx";
import CreateLaunchSchedule from "./modules/launch-schedule/AddSchedule.jsx";
import LaunchSchedules from "./modules/launch-schedule/Schedules.jsx";
import CreatePlan from "./modules/plan/CreatePlan.jsx";
import PlanListTable from "./modules/plan/PlanList.jsx";
import AssetList from "./modules/assets/Assets.jsx";
import AddAssetForm from "./modules/assets/AddAsset.jsx";
import PlayerOne from "./modules/cctv/Camera-one.jsx";
import PlayerTwo from "./modules/cctv/Camera-two.jsx";
import PlayerAll from "./modules/cctv/All-Camera.jsx";
import PassengerTraffic from "./modules/traffic/PassengerTraffic.jsx";
import AddPassengerTraffic from "./modules/traffic/AddPassengerTraffic.jsx";
import LaunchTraffic from "./modules/traffic/LaunchTraffic.jsx";
import AddLaunchTraffic from "./modules/traffic/AddLaunchTraffic.jsx";
import TicketBooking from "./modules/ticket-booking/TicketBooking.jsx";
import CreateGhatForm from "./modules/ghats/CreateGhat.jsx";
import GhatList from "./modules/ghats/GhatList.jsx";
const router = createBrowserRouter([
  {
    path: "/login",
    element: <UserLogin />,
  },
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <DashBoard />,
      },
      {
        path: "user/list",
        element: <UserList />,
      },
      {
        path: "user/create",
        element: <UserCreate />,
      },

      {
        path: "port/create",
        element: <CreatePort />,
      },
      {
        path: "human-resource/create",
        element: <CreateHumanResource />
      },
      {
        path: "income/add",
        element: <AddTicketIncome />
      },
      {
        path: "income/add-c-p",
        element: <AddCPincome />

      },
      {
        path: "port/list",
        element: <PortList />
      },
      {
        path: "human-resource/list",
        element: <HumanResourceList />
      },
      {
        path: "expense/add",
        element: <AddExpense />
      },
      {
        path: "launch-schedule/create",
        element: <CreateLaunchSchedule />
      },
      {
        path: "launch-schedule/list",
        element: <LaunchSchedules />
      },
      {
        path: "plan/create",
        element: <CreatePlan />
      },
      {
        path: "plan/list",
        element: <PlanListTable />
      },
      {
        path: "asset/list",
        element: <AssetList />
      },
      {
        path: "asset/create",
        element: <AddAssetForm />
      },
      {
        path: "cctv/cam-one",
        element: <PlayerOne />
      },
      {
        path: "cctv/cam-two",
        element: <PlayerTwo />
      },
      {
        path: "cctv/cam-all",
        element: <PlayerAll />
      },
      {
        path: "traffic/passenger",
        element: <PassengerTraffic />
      },
      {
        path: "traffic/launch",
        element: <LaunchTraffic />
      },
      {
        path: "traffic/add-launch",
        element: <AddLaunchTraffic />
      },
      {
        path: "traffic/add-passenger",
        element: <AddPassengerTraffic />
      },
      {
        path:"ticket-booking",
        element:<TicketBooking/>
      },
      {
        path:"ghats/create",
        element:<CreateGhatForm/>
      },
      {
        path:"ghats/list",
        element:<GhatList/>
      }

    ],
  },
]);

export default router;
