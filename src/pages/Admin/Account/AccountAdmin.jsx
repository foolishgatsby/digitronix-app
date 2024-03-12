import { Space, Table, Tag } from "antd";
import React from "react";

const columns = [
  {
    title: "Username",
    dataIndex: "username",
    key: "username",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
  },
  {
    title: "Active",
    dataIndex: "active",
    key: "active",
  },
  {
    title: "Action",
    key: "action",
    width: "25%",
    render: (_, record) => (
      <Space size="middle">
        <button className="btn btn-primary">
          <i className="fa fa-edit" /> Edit
        </button>
        <button className="btn btn-danger">
          <i className="fa fa-times-circle" /> Deactive
        </button>
        <button className="btn btn-success">
          <i className="fa fa-check-circle" /> Active
        </button>
      </Space>
    ),
  },
];

/**
 * Fake data
 */
const data = [
  {
    key: "1",
    username: "worker 1",
    role: "worker",
    active: "Is Active",
  },
  {
    key: "2",
    username: "sales 1",
    role: "sale",
    active: "Is Active",
  },
  {
    key: "3",
    username: "Production manager",
    role: "Production Manager",
    active: "Is Active",
  },
];

export default function AccountAdmin(props) {
  return (
    <div>
      <div className="mb-3 flex justify-between items-end">
        <h5>
          <i className="fas fa-user-alt" /> Accounts
        </h5>
        <button
          className="btn"
          style={{
            background: "#FFD700",
            color: "black",
            padding: "15px",
            fontSize: "14px",
            borderRadius: "15px",
          }}
        >
          Create New Account
        </button>
      </div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}
