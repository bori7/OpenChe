import React, { useContext} from "react";
import {MyContext} from '../store/context/myContext';
import { Layout, Menu, Breadcrumb } from "antd";
import { Link, withRouter } from "react-router-dom";
import * as actions from "../store/actions/auth";

const { Header, Content, Footer } = Layout;

const CustomLayout = (props) => {
  
  const {state, dispatch} = useContext(MyContext);
  const isAuthenticated = state.token !== null
  
  const logout = () => {
    actions.logout(dispatch)
    props.history.push("/");
  }
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px" }}
          >
            { isAuthenticated ? (
              <Menu.Item key="2" onClick={logout} >
                Logout
              </Menu.Item>
            ) : (
              <Menu.Item key="2">
                <Link to="/login">Login</Link>
              </Menu.Item>
            )}
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            {isAuthenticated ? (
              <Breadcrumb.Item>
                <Link to={`/profile/${state.userId}`}>Profile</Link>
              </Breadcrumb.Item>
            ) : null}
            {isAuthenticated && state.is_teacher ? (
              <Breadcrumb.Item>
                <Link to="/create">Create</Link>
              </Breadcrumb.Item>
            ) : null}
          </Breadcrumb>
          <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
            {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          CheArt for Chemical Engineering Students
        </Footer>
      </Layout>
    );

};

export default withRouter(CustomLayout);
