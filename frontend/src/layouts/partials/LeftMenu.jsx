import React from "react";
import { Menu } from "antd";
import {
  UserOutlined
} from "@ant-design/icons";
import { RiDashboardFill } from "react-icons/ri";
import { GiHumanPyramid,GiChecklist,GiTakeMyMoney,GiExpense,GiCargoCrate } from "react-icons/gi";
import { MdOutlineList, MdOutlinePersonAdd, MdOutlineAdd,MdOutlineInventory2,MdOutlineSchedule } from "react-icons/md";
import { BiCctv,BiSolidTrafficBarrier  } from "react-icons/bi";
import { PiAnchorThin,PiTicketThin } from "react-icons/pi";
import { FaAnchorLock,FaPeopleRoof  } from "react-icons/fa6";
import { SiLaunchpad } from "react-icons/si";



import { Link } from "react-router-dom";

const items = [
  {

    label: <Link to='/'>Dasboard</Link>,
    key: "dashboard",
    icon: <RiDashboardFill />
  },
  {
    label: "Users",
    key: "users",
    icon: <UserOutlined />,
    children: [
      {
        label: <Link to={`user/list`}>User List</Link>,
        key: "user-list",
        icon: <MdOutlineList />
      },
      {
        label: <Link to={`user/create`}>Create User</Link>,
        key: "create-user",
        icon: <MdOutlinePersonAdd />
      },
    ]
  },
  {
    label: "CCTV",
    key: "web-cams",
    icon: <BiCctv />,
    children: [
      {
        label: <Link to={`cctv/cam-all`}>All-Cam</Link>,
        key: "cam-all"
      },
      {
        label: <Link to={`cctv/cam-one`}>Camera-one</Link>,
        key: "cctv/cam-one"
      },
      {
        label: <Link to={`cctv/cam-two`}>Camera-two</Link>,
        key: "cam-two"
      },
      // {
      //   label: <Link to={`cctv/cam-three`}>Camera-three</Link>,
      //   key: "cam-three"
      // }
    ]
  },
  {
    label: "Port",
    key: "port",
    icon: <PiAnchorThin />,
    children: [
      {
        label: <Link to={`port/list`}>Port List</Link>,
        key: "port-list",
        icon: <MdOutlineList />
      },
      {
        label: <Link to={`port/create`}>Create Port</Link>,
        key: "port-create",
        icon: <MdOutlineAdd />
      },

    ]
  },
  {
    label:"Ghats",
    key:"ghats",
    icon:<SiLaunchpad/>,
    children:[
      {
        label:<Link to={`ghats/create`}> Add Ghat</Link>,
        key:'create',
        icon: <MdOutlineAdd />
      },
      {
        label:<Link to={`ghats/list`}>List</Link>,
        key:'list',
        icon:<MdOutlineList/>
      }
    ]
    

  },
  {
    label: "Human Resource",
    key: "human-resource",
    icon: <GiHumanPyramid />,
    children: [
      {
        label: <Link to={`human-resource/list`}>List</Link>,
        key: "human-resource-list",
        icon: <MdOutlineList />
      },
      {
        label: <Link to={`human-resource/create`}>Create</Link>,
        key: "human-resource-create",
        icon: <MdOutlinePersonAdd />
      },

    ]
  },
  // {
  //   label: "Plan",
  //   key: "plan",
  //   icon: <GiChecklist />,
  //   children: [
  //     {
  //       label: <Link to={`plan/list`}>List</Link>,
  //       key: "plan-list",
  //       icon: <MdOutlineList />
  //     },
  //     {
  //       label: <Link to={`plan/create`}>Create</Link>,
  //       key: "plan-create",
  //       icon: <MdOutlineAdd />
  //     }
  //   ]
  // },
  {
    label: "Asset",
    key: "asset",
    icon: <MdOutlineInventory2 />,
    children: [
      {
        label: <Link to={`asset/list`}>List</Link>,
        key: "asset-list",
        icon: <MdOutlineList />
      },
      {
        label: <Link to={`asset/create`}>Create</Link>,
        key: "asset-create",
        icon: <MdOutlineAdd />
      }
    ]

  },

  // {
  //   label: "Income",
  //   key: "income",
  //   icon: <GiTakeMyMoney />,
  //   children: [
  //     {
  //       label: <Link to={`income/add`}>Add Ticket Income</Link>,
  //       key: "income-add",
  //       icon: <MdOutlineAdd />
  //     },
  //     {
  //       label: <Link to={`income/add-c-p`}>Add C/P Income</Link>,
  //       key: "income-add-c-p",
  //       icon: <MdOutlineAdd />
  //     }
  //   ]
  // },
  // {
  //   label: "Expense",
  //   key: "expense",
  //   icon: <GiExpense/>,
  //   children: [
  //     {
  //       label: <Link to={`expense/add`}>Add Expense</Link>,
  //       key: "expense-add",
  //       icon: <MdOutlineAdd />
  //     }
  //   ]
  // },
  {
    label: "Launch Schedule",
    key: "launch-schedule",
   icon: <MdOutlineSchedule />,
    children: [
      {
        label: <Link to={`launch-schedule/create`}>Create</Link>,
        key: "launch-schedule-create",
        icon: <MdOutlineAdd />
      },
      {
        label: <Link to={`launch-schedule/list`}>List</Link>,
        key: "launch-schedule-list",
        icon: <MdOutlineList />
      }
    ]
  },
  {
    label: "Traffic",
    key: "traffic",
    icon: <BiSolidTrafficBarrier />,
    children: [
  //     {
  //       label: <Link to={`traffic/launch`}>Launch Traffic</Link>,
  //       key: "launch-traffic",

  //     },
  //     {
  //       label: <Link to={`traffic/add-launch`}>Add Launch Traffic</Link>,
  //       key: "add-launch-traffic"
  //     },
      {
        label: <Link to={`traffic/passenger`}>Passenger Traffic</Link>,
        icon:<FaPeopleRoof/>,
        key: "passenger-traffic"
      },

      // {
      //   label: <Link to={`traffic/add-passenger`}>Add Passenger Traffic</Link>,
      //   icon:<MdOutlineAdd/>,
      //   key: "add-passenger-traffic"
      // }
    ]
  },
  // {
  //   label: "Ticket Booking Requesition",
  //   key: "ticket-booking",
  //   icon: <PiTicketThin />,
  //   children: [
  //     {
  //       label: <Link to={`ticket-booking/`}>Create Booking</Link>,
  //       key: "ticket-booking-create"
  //     }
  //   ]
  // },
  // {
  //   label: "Port Activities",
  //   key: "port-activities",
  //   icon:<GiCargoCrate/>,
  //   children: [
  //     {
  //       label: <Link to={`port-activities/`}>List</Link>,
  //       key: "port-activities-list",
  //       icon: <MdOutlineList />
  //     },
  //     {
  //       label: <Link to={`port-activities/create`}>Create</Link>,
  //       key: "port-activities-create",
  //       icon: <MdOutlineAdd />
  //     }
  //   ]
  // },
  // {
  //   label: "Marine Courte Cases",
  //   key: "marine-courte",
  //   icon: <FaAnchorLock/>,
  //   children: [
  //     {
  //       label: <Link to={`marine-courte/`}>Case List</Link>,
  //       key: "marine-courte-list",
  //       icon: <MdOutlineList />

  //     },
  //     {
  //       label: <Link to={`marine-courte-case/create`}>Create Case</Link>,
  //       key: "marine-courte-case-create",
  //       icon: <MdOutlineAdd />
  //     }
  //   ]
  // }
];


function LeftMenu() {
  // const handleMenuClick = ({ key }) => {
  //   onSelect(key);
  // };

  return (

    <Menu
    mode="inline"
    defaultSelectedKeys={['1']}
      items={items}
    />
  );
}

export default LeftMenu;
