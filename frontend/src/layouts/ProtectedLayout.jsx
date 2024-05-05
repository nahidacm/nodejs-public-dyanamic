import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
// import { MdOndemandVideo } from "react-icons/md";
import {BiCctv} from 'react-icons/bi'
import { Button, Layout,theme, Row, Col} from "antd";
import { useState } from "react";
import UserAvatar from "../modules/user/components/UserAvatar";
import { Outlet } from "react-router-dom";
import LeftMenu from "./partials/LeftMenu";
import { Link } from "react-router-dom";



const { Header, Sider, Content } = Layout;

function ProtectedLayout() {
  const [collapsed, setCollapsed] = useState(false);
  // const [selectedMenu, setSelectedMenu] = useState('dashboard');

  // const handleMenuSelect = (menuKey) => {
  //   setSelectedMenu(menuKey);
  //   console.log(menuKey);
  // };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
        <div className="demo-logo-vertical" style={{ padding: "0 20px",margin:0 }} ><img src=".././logo.png" alt="" width="100%" /></div>
        <LeftMenu />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >

          <Row justify={"space-between"} style={{ paddingRight: 24 }}>
            <Col>
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                }}
              />
            </Col>
        
            <Col> 
            <div style={{ display: "flex", alignItems: "center", gap: "25px", color: "#318CE7"}}>
             <h1 style={{ margin: 0, color: "#318CE7",marginBottom:"10px" }}>Smart River Port</h1>
             
              <Link to="cctv/cam-all">
                {" "}
                <BiCctv style={{ fontSize: "25px",marginTop:"20px" }} />
              </Link>
            </div>
            </Col>
            <Col>
              <UserAvatar />
            </Col>
          </Row>
        </Header>
        <Content
          style={{
            margin: "10px 10px",
            padding: 4,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default ProtectedLayout;
