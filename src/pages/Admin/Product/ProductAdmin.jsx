import { Input, Select, Space, Table } from "antd";
import React, { useState } from "react";

export default function ProductAdmin(props) {
  const [searchOption, setSearchOption] = useState({
    productName: "",
    category: [],
    tag: [],
  });

  // Submit Search
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // columns of table
  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (text, record, index) => (
        <img style={{ width: 50 }} src={text} alt={`product ${index}`} />
      ),
    },
    {
      title: "Name",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
  ];
  const importExportColumns = [
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
      render: (text, record, index) => <p>{text}</p>,
    },
    {
      title: "Name",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
  ];

  /**
   * Fake data
   */
  const data = [
    {
      key: "1",
      image: "https://picsum.photos/200",
      productName: "Product 1",
      quantity: 4000,
    },
    {
      key: "2",
      image: "https://picsum.photos/200",
      productName: "Product 2",
      quantity: 500,
    },
    {
      key: "3",
      image: "https://picsum.photos/200",
      productName: "Product 3",
      quantity: 60000,
    },
  ];
  const importData = [
    {
      key: "1",
      time: "12 THG 3, 2024 9:20:21 AM",
      productName: "Product 1",
      quantity: 4000,
    },
    {
      key: "2",
      time: "12 THG 3, 2024 9:20:21 AM",
      productName: "Product 2",
      quantity: 12,
    },
    {
      key: "3",
      time: "12 THG 3, 2024 9:20:21 AM",
      productName: "Product 3",
      quantity: 120,
    },
    {
      key: "4",
      time: "12 THG 3, 2024 9:20:21 AM",
      productName: "Product 1",
      quantity: 120,
    },
    {
      key: "5",
      time: "12 THG 3, 2024 9:20:21 AM",
      productName: "Product 1",
      quantity: 200,
    },
    {
      key: "6",
      time: "12 THG 3, 2024 9:20:21 AM",
      productName: "Product 2",
      quantity: 200,
    },
  ];
  const exportData = [
    {
      key: "1",
      time: "12 THG 3, 2024 9:20:21 AM",
      productName: "Product 1",
      quantity: 4000,
    },
    {
      key: "2",
      time: "12 THG 3, 2024 9:20:21 AM",
      productName: "Product 2",
      quantity: 12,
    },
    {
      key: "3",
      time: "12 THG 3, 2024 9:20:21 AM",
      productName: "Product 3",
      quantity: 120,
    },
    {
      key: "4",
      time: "12 THG 3, 2024 9:20:21 AM",
      productName: "Product 1",
      quantity: 120,
    },
    {
      key: "5",
      time: "12 THG 3, 2024 9:20:21 AM",
      productName: "Product 1",
      quantity: 200,
    },
    {
      key: "6",
      time: "12 THG 3, 2024 9:20:21 AM",
      productName: "Product 2",
      quantity: 200,
    },
  ];

  return (
    <div>
      <div>
        <div className="mb-3 d-flex justify-content-end">
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
            <i className="fa fa-list-alt" style={{ marginRight: "5px" }} />
            Product List
            <i className="fa fa-caret-right" style={{ marginLeft: "15px" }} />
          </button>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-2">
            <h5>
              <i className="fas fa-list" /> Product List
            </h5>
            <Table columns={columns} dataSource={data} />
          </div>
          <form className="col-span-1" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="productName" className="form-label">
                Search Product By Name
              </label>
              <Input
                name="productName"
                id="productName"
                placeholder="Enter product's Name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="productCategory" className="form-label">
                Search Product By Category
              </label>
              <Select
                id="category"
                mode="multiple"
                allowClear
                style={{
                  width: "100%",
                }}
                placeholder="Please select categorys"
                defaultValue={[]}
                onChange={() => {}}
                options={[
                  { label: "Category 1", value: "Category 1" },
                  { label: "Category 2", value: "Category 2" },
                  { label: "Category 3", value: "Category 3" },
                  { label: "Category 4", value: "Category 4" },
                ]}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="productTag" className="form-label">
                Search Product By Category
              </label>
              <Select
                id="tag"
                mode="multiple"
                allowClear
                style={{
                  width: "100%",
                }}
                placeholder="Please select tags"
                defaultValue={[]}
                onChange={() => {}}
                options={[
                  { label: "Tag 1", value: "Tag 1" },
                  { label: "Tag 2", value: "Tag 2" },
                  { label: "Tag 3", value: "Tag 3" },
                  { label: "Tag 4", value: "Tag 4" },
                ]}
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="btn"
                style={{
                  backgroundColor: "#FFD700",
                  borderRadius: "15px",
                  fontWeight: "500",
                }}
              >
                SEARCH
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="col-span-1">
          <h5>
            <i className="fas fa-history" /> Import history
          </h5>
          <Table columns={importExportColumns} dataSource={importData} />
        </div>
        <div className="col-span-1">
          <h5>
            <i className="fas fa-history" /> Export history
          </h5>
          <Table columns={importExportColumns} dataSource={exportData} />
        </div>
      </div>
    </div>
  );
}
