import React, { useState } from "react";
import { usePathList } from "../../utils/Hooks/usePathList";
import { Breadcrumb, Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { NavLink, Outlet } from "react-router-dom";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { NotificationFilled, WechatOutlined } from "@ant-design/icons";
import Clock from "../../components/Clock/Clock";

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

export default function WarehouseTemplates() {
  const [collapsed, setCollapsed] = useState(true);

  const pathItem = usePathList();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{
          background: "#293543",
          maxWidth: "20%",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 99,
        }}
        collapsedWidth={50}
        onMouseEnter={() => {
          setCollapsed(false);
        }}
        onMouseLeave={() => {
          setCollapsed(true);
        }}
      >
        <div
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
                zIndex: 100,
              }}
              className={`collapse ${collapsed ? "" : "show"}`}
              id="warehouseCollapse"
            >
              <NavLink
                to="warehouse/products"
                className={({ isActive }) => {
                  return isActive ? "active" : "";
                }}
                style={({ isActive }) => {
                  return activeStyle(isActive);
                }}
              >
                Products
              </NavLink>
              <NavLink
                to="warehouse/materials"
                className={({ isActive }) => {
                  return isActive ? "active" : "";
                }}
                style={({ isActive }) => activeStyle(isActive)}
              >
                Materials
              </NavLink>
            </div>
          </div>
        </div>
      </Sider>
      <Layout
        style={{
          marginLeft: 50,
        }}
      >
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
              textTransform: "capitalize",
            }}
            items={pathItem}
          ></Breadcrumb>
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
