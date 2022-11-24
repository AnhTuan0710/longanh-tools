import { useState, useEffect } from "react";
import {
  Row,
  Col,
  Breadcrumb,
  Button,
} from "antd";
import { NavLink, Link } from "react-router-dom";
import { PROFILE, SETTING } from "../elements";
type Props = {
  placement?: any,
  name: string,
  subName: string,
  onPress: Function,
  handleSidenavColor: Function,
  handleSidenavType: Function,
  handleFixedNavbar: Function,
}
function Header(props: Props) {
  const { name, subName, onPress } = props
  const [visible, setVisible] = useState(false);
  useEffect(() => window.scrollTo(0, 0));
  const showDrawer = () => setVisible(true);
  const _renderBreadcrumb = () => {
    return (
      <Breadcrumb>
        <Breadcrumb.Item>
          <NavLink to="/">Trang</NavLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          {name.replace("/", "")}
        </Breadcrumb.Item>
      </Breadcrumb>
    )
  }
  const _renderTitlePage = () => {
    return (
      <div className="ant-page-header-heading">
        <span
          className="ant-page-header-heading-title"
          style={{ textTransform: "capitalize" }}
        >
          {subName.replace("/", "")}
        </span>
      </div>
    )
  }
  return (
    <>
      <div className="setting-drwer" onClick={showDrawer}>
        {SETTING}
      </div>
      <Row gutter={[24, 0]}>
        <Col span={24} md={6}>
          {_renderBreadcrumb()}
          {_renderTitlePage()}
        </Col>
        <Col span={24} md={18} className="header-control">
          <Link to="/sign-in">
            <span className="mx-1">User name</span>
            {PROFILE}
          </Link>
          <Link to="/invoice/create" style={{ marginRight: '100px' }}>
            <Button
              type="primary"
              className="sidebar-toggler"
              onClick={() => onPress()}
              danger
            >
              TẠO ĐƠN NHANH
            </Button>
          </Link>
        </Col>
      </Row>
    </>
  );
}

export default Header;
