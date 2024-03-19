import { Input, Select, Table, Tag } from "antd";
import React from "react";

const column = [
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
  { title: "Category", dataIndex: "category", key: "category" },
  {
    title: "Tags",
    dataIndex: "tags",
    key: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag, index) => {
          return (
            <Tag color={"blue"} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
  },
];

const data = [
  {
    key: "1",
    image: "https://picsum.photos/200",
    productName: "Product 1",
    category: "1",
    tags: ["Xanh rêu", "Tình nhân", "16x14"],
    quantity: 4000,
  },
  {
    key: "2",
    image: "https://picsum.photos/200",
    productName: "Product 2",
    category: "2",
    tags: ["Đỏ", "Tình nhân"],
    quantity: 500,
  },
  {
    key: "3",
    image: "https://picsum.photos/200",
    productName: "Product 3",
    category: "2",
    tags: ["Kính tràn", "Tình nhân", "25x25"],
    quantity: 60000,
  },
];

export default function ProductSale() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mt-3">
      <div className="mb-3">
        <form className="flex items-end" onSubmit={handleSubmit}>
          <div className="w-1/4 me-3">
            <label htmlFor="productName" className="form-label">
              Search Product By Name
            </label>
            <Input
              name="productName"
              id="productName"
              placeholder="Enter product's Name"
            />
          </div>
          <div className="w-1/4 me-3">
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
          <div className="w-1/4 me-3">
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
          <div className="w-1/4">
            <button
              type="submit"
              className="btn"
              style={{
                backgroundColor: "#FFD700",
                borderRadius: "15px",
                fontWeight: "500",
                padding: "5px 20px",
              }}
            >
              SEARCH
            </button>
          </div>
        </form>
      </div>
      <div className="">
        <Table columns={column} dataSource={data} />
      </div>
    </div>
  );
}
