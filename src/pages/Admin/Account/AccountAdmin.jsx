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
    width: "10%",
    render: (_, record) => (
      <Space size="middle">
        <button className="btn btn-primary">Edit</button>
        <button className="btn btn-danger">Deactive</button>
        <button className="btn btn-success">Active</button>
      </Space>
    ),
  },
];
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
      <Table columns={columns} dataSource={data} />
    </div>
  );
}
