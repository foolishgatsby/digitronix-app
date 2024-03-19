import { FloatButton, Input, Select, Space, Table, Tag } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setComponentsAction } from "../../../redux/reducers/FunctionPopupReducer";
import {
  getAllProductApi,
  setLimit,
  setProductEdit,
} from "../../../redux/reducers/ProductReducer";
import { getAllCategoryApi } from "../../../redux/reducers/CategoryReducer";
import { current } from "@reduxjs/toolkit";
import { size } from "lodash";
import { getAllTagsApi } from "../../../redux/reducers/TagsReducer";
import { useSearch } from "../../../utils/Hooks/useSearch";

// const data = [
//   {
//     key: "1",
//     image: "https://picsum.photos/200",
//     productName: "Product 1",
//     category: "1",
//     tags: ["Xanh rêu", "Tình nhân", "16x14"],
//     quantity: 4000,
//   },
//   {
//     key: "2",
//     image: "https://picsum.photos/200",
//     productName: "Product 2",
//     category: "2",
//     tags: ["Đỏ", "Tình nhân"],
//     quantity: 500,
//   },
//   {
//     key: "3",
//     image: "https://picsum.photos/200",
//     productName: "Product 3",
//     category: "2",
//     tags: ["Kính tràn", "Tình nhân", "25x25"],
//     quantity: 60000,
//   },
// ];

const mapCategoryListToOption = (categoryList) => {
  return categoryList.map((category) => {
    return {
      label: category.name,
      value: category.id,
    };
  });
};

const mapTagListToOption = (tagList) => {
  return tagList.map((tag) => {
    return {
      label: tag.name,
      value: tag.id,
    };
  });
};

export default function ProductList() {
  const dispatch = useDispatch();

  const { categoryList } = useSelector((state) => state.CategoryReducer);
  const { tagList } = useSelector((state) => state.TagsReducer);
  const { productList, loading, page, limit, totalPage } = useSelector(
    (state) => state.ProductReducer
  );

  const [search, handleInput, handleSelect] = useSearch();

  const fetchProductData = (page, limit) => {
    dispatch(getAllProductApi(page, limit));
  };

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
      title: "Product's Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Category",
      dataIndex: "category_id",
      key: "category_id",
      render: (_, { category_id }) => {
        // console.log("category_id", category_id);
        const renderCategory = categoryList.find(
          (category) => category.id === category_id
        );
        return <p>{renderCategory?.name}</p>;
      },
    },
    {
      title: "Tags",
      dataIndex: "tags",
      key: "tags",
      render: (_, { tags }) => (
        <>
          {tags.length !== 0 ? (
            tags.map((tag, index) => {
              return (
                <Tag color={"blue"} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })
          ) : (
            <p>This product dont have any tags</p>
          )}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      width: "15%",
      render: (_, record) => (
        <Space size="middle">
          <button
            onClick={() => {
              dispatch(setProductEdit(record));
              const action = {
                type: "ModalReducer/setModalOpen",
                title: "Edit Product",
                contentComponentType: "FormEditProduct",
              };
              dispatch(action);
            }}
            className="btn btn-primary"
          >
            <i className="fa fa-edit" /> Edit
          </button>
          <button className="btn btn-danger">
            <i className="fa fa-times-circle" /> Delete
          </button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    let Components = [
      {
        tooltip: "Create new product",
        icon: `<i className="fa-solid fa-plus" />`,
        contentComponentType: "FormCreateProduct",
      },
      {
        tooltip: "Category Management",
        icon: `<i className="fa-solid fa-list" />`,
        contentComponentType: "CategoryManagement",
      },
      {
        tooltip: "Tag Management",
        icon: `<i className="fa-solid fa-book" />`,
        contentComponentType: "TagManagement",
      },
    ];
    dispatch(setComponentsAction(Components));
    dispatch(getAllCategoryApi());
    dispatch(getAllTagsApi());
    fetchProductData(page, limit);
  }, []);

  const categoryOptions =
    size(categoryList) > 0 ? mapCategoryListToOption(categoryList) : [];

  const tagOptions = size(tagList) > 0 ? mapTagListToOption(tagList) : [];

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
              name="keyword"
              id="keyword"
              placeholder="Enter product's Name"
              onChange={handleInput}
            />
          </div>
          <div className="w-1/4 me-3">
            <label htmlFor="productCategory" className="form-label">
              Search Product By Category
            </label>
            <Select
              id="category"
              allowClear
              style={{
                width: "100%",
              }}
              placeholder="Please select categorys"
              defaultValue={[]}
              onChange={(value) => handleSelect(value, "category_id")}
              optionFilterProp="label"
              options={categoryOptions}
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
              onChange={(value) => handleSelect(value, "tag")}
              optionFilterProp="label"
              options={tagOptions}
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
        <Table
          rowKey={(record) => record.id}
          columns={column}
          dataSource={productList}
          loading={loading}
          pagination={{
            showSizeChanger: true,
            pageSize: limit,
            total: totalPage,
            onShowSizeChange: (current, size) => {
              if (current === page && size === limit) return;
              fetchProductData(current - 1, size);
            },
            onChange: (currentPage, pageSize) => {
              if (currentPage === page && pageSize === limit) return;
              fetchProductData(page - 1, pageSize);
            },
          }}
        ></Table>
      </div>
    </div>
  );
}
