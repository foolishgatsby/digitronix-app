import React, { useEffect, useRef, useState } from "react";

// antd
import { Breadcrumb, Flex, Layout, Menu, theme } from "antd";
import { NotificationFilled, WechatOutlined } from "@ant-design/icons";
import { Outlet, useLocation, useMatch } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Clock from "../../components/Clock/Clock";
const { Header, Content, Footer, Sider } = Layout;

const activeStyle = (isActive, collapse) => {
  return {
    backgroundColor: isActive ? "#1F2530" : "rgb(41, 53, 67)",
    width: "100%",
    height: "50px",
    display: "flex",
    alignItems: "center",
    padding: "0px 12px",
    textDecoration: "none",
    color: "white",
    justifyContent: collapse ? "center" : "flex-start",
  };
};

export default function AdminTemplate(props) {
  const [collapsed, setCollapsed] = useState(true);

  // console.log(collapsed);

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{
          background: "#293543",
          maxWidth: "20%",
        }}
        collapsedWidth={50}
        onMouseEnter={() => {
          // if (collapsed === true) {
          //   setCollapsed(!collapsed);
          // }
          setCollapsed(false);
        }}
        onMouseLeave={() => {
          // if (collapsed === false) {
          //   setCollapsed(!collapsed);
          // }
          setCollapsed(true);
        }}
      >
        <div
          // className="flex justify-end items-center"
          style={{
            background: "#ffd700",
            height: "50px",
            display: "flex",
            justifyContent: collapsed ? "center" : "end",
            alignItems: "center",
          }}
        >
          <button className="btn" style={{ border: "none" }} disabled={true}>
            <i className="fa-solid fa-bars" />
          </button>
        </div>
        <div>
          <div
            style={{
              backgroundColor: "#1F2530",
              width: "100%",
              height: "50px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <NavLink
              to="account"
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}
              style={({ isActive }) => activeStyle(isActive, collapsed)}
            >
              <i
                className="fa fa-users"
                style={{ marginRight: "6px", fontSize: "20px" }}
              />{" "}
              {collapsed ? "" : "Account"}
            </NavLink>
          </div>
          <div
            style={{
              backgroundColor: "#293543",
              width: "100%",
              // height: "50px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <button
              style={{
                backgroundColor: "#293543",
                width: "100%",
                height: "50px",
                display: "flex",
                alignItems: "center",
                padding: "0px 12px",
                textDecoration: "none",
                color: "white",
                justifyContent: collapsed ? "center" : "flex-start",
              }}
              disabled={collapsed ? true : false}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#warehouseCollapse"
              aria-expanded="false"
              aria-controls="warehouseCollapse"
            >
              <i
                className="fab fa-dropbox"
                style={{ marginRight: "6px", fontSize: "20px" }}
              />{" "}
              {collapsed ? "" : "Warehouse"}
            </button>
            <div
              style={{
                width: "100%",
                textAlign: "center",
              }}
              class={`collapse ${collapsed ? "" : "show"}`}
              id="warehouseCollapse"
            >
              <NavLink
                to="warehouse/product"
                className={({ isActive }) => {
                  return isActive ? "active" : "";
                }}
                style={({ isActive }) => activeStyle(isActive)}
              >
                Product
              </NavLink>
              <NavLink
                to="warehouse/material"
                className={({ isActive }) => {
                  return isActive ? "active" : "";
                }}
                style={({ isActive }) => activeStyle(isActive)}
              >
                Material
              </NavLink>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#293543",
              width: "100%",
              height: "50px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <NavLink
              to="order"
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}
              style={({ isActive }) => activeStyle(isActive, collapsed)}
            >
              <i
                className="fa fa-file-invoice"
                style={{ marginRight: "6px", fontSize: "20px" }}
              />{" "}
              {collapsed ? "" : "Order"}
            </NavLink>
          </div>
          <div
            style={{
              backgroundColor: "#293543",
              width: "100%",
              height: "50px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <NavLink
              to="customer"
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}
              style={({ isActive }) => activeStyle(isActive, collapsed)}
            >
              <i
                className="fa fa-handshake"
                style={{ marginRight: "6px", fontSize: "20px" }}
              />{" "}
              {collapsed ? "" : "Customer"}
            </NavLink>
          </div>
          <div
            style={{
              backgroundColor: "#293543",
              width: "100%",
              height: "50px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <NavLink
              to="delivery"
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}
              style={({ isActive }) => activeStyle(isActive, collapsed)}
            >
              <i
                className="fa fa-truck"
                style={{ marginRight: "6px", fontSize: "20px" }}
              />{" "}
              {collapsed ? "" : "Delivery"}
            </NavLink>
          </div>
          <div
            style={{
              backgroundColor: "#293543",
              width: "100%",
              height: "50px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <NavLink
              to="production"
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}
              style={({ isActive }) => activeStyle(isActive)}
            >
              <i
                className="fa fa-industry"
                style={{ marginRight: "6px", fontSize: "20px" }}
              />{" "}
              {collapsed ? "" : "Production"}
            </NavLink>
          </div>
        </div>
      </Sider>
      <Layout>
        <Header
          style={{
            // padding: 0,
            backgroundColor: "#fff",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow:
              "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
          }}
        >
          <h6 style={{ textTransform: "uppercase", margin: 0 }}>{<Clock />}</h6>
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "#000",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <WechatOutlined
                style={{
                  fontSize: "30px",
                  color: "#fff",
                }}
              />
            </div>
            <div
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "#ffd700",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <NotificationFilled style={{ fontSize: "30px", color: "#000" }} />
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "0",
            backgroundColor: "#FFFCEE",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px",
            }}
          >
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              background: "#FFFCEE",
              padding: "0px 16px",
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          GEITTECH ©{new Date().getFullYear()} Created by THOAG of GEITTECH
        </Footer>
      </Layout>
    </Layout>
  );
}
