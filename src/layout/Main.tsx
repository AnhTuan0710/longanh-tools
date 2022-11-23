import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Layout, Drawer, Affix } from "antd";
import Header from "./Header";
import Dashboard from "../view/Dashboard";
import Sidenav from "./Sidenav";
import Test from "../view/Dashboard/Test";
// import Footer from "./Footer";

const { Header: AntHeader, Content, Sider } = Layout;

function Main() {
  const [visible, setVisible] = useState(false)
  const [sidenavType, setSidenavType] = useState("transparent");
  const openDrawer = () => setVisible(!visible);
  const handleSidenavType = (type: any) => setSidenavType(type);
  const handleSidenavColor = (color: any) => { }
  const handleFixedNavbar = (type: any) => { };

  let { pathname } = useLocation();
  pathname = pathname.replace("/", "");
  return (
    <Layout className={`layout-dashboard ${pathname === "profile" ? "layout-profile" : ""}}`}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        trigger={null}
        width={250}
        theme="light"
        className={`sider-primary ant-layout-sider-primary ${sidenavType === "#fff" ? "active-route" : ""
          }`}
        style={{ background: sidenavType }}
      >
        <Sidenav color={'red'} />
      </Sider>
      <Layout>
        <Affix>
          <AntHeader className="ant-header-fixed">
            <Header
              onPress={openDrawer}
              name={pathname}
              subName={pathname}
              handleSidenavColor={handleSidenavColor}
              handleSidenavType={handleSidenavType}
              handleFixedNavbar={handleFixedNavbar}
            />
          </AntHeader>
        </Affix>
        <Content className="content-ant">
          <Routes>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='tables' element={<Test />} />
          </Routes>
        </Content>
        {/* <Footer /> */}

      </Layout>
    </Layout>
  );
}

export default Main;
