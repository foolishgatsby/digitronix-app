import { Col, Form, Input, Row, Select } from "antd";
import { Option } from "antd/es/mentions";
import { withFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createProductApi } from "../../redux/reducers/ProductReducer";
import { forwardRef, useEffect, useImperativeHandle } from "react";
import { setSubmitFunc } from "../../redux/reducers/ModalReducer";

function FormCreateProduct(props) {
  const { categoryList } = useSelector((state) => state.CategoryReducer);

  const {
    values,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSubmitFunc(handleSubmit));
  }, []);

  useImperativeHandle(props.formRef, () => ({
    submitForm: handleSubmit,
  }));

  return (
    <Form layout="vertical" onFinish={handleSubmit}>
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            rules={[{ required: true, message: "Product name is required" }]}
            name="product_name"
            label="Product Name"
          >
            <Input placeholder="Type product name" onChange={handleChange} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            rules={[
              { required: true, message: "Product price is required" },
              {
                pattern: new RegExp(/^\d+(\.\d+)?$/),
                message: "Price must be a number",
              },
              {
                validator(_, value) {
                  if (!value || value >= 1) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The price must be greater than 0")
                  );
                },
              },
            ]}
            name="price"
            label="Product Price"
          >
            <Input
              type="number"
              placeholder="Type product price"
              onChange={handleChange}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item
            rules={[{ required: true, message: "Product price is required" }]}
            name="category_id"
            label="Category"
          >
            <Select
              placeholder="Category select"
              onChange={(value) => {
                setFieldValue("category_id", value);
              }}
            >
              {categoryList.map((category, index) => {
                return (
                  <Option value={category.id} key={index}>
                    {category.name}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>
        </Col>
        <Col span={16}>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Product quantity is required",
              },
              () => ({
                validator(_, value) {
                  if (!value || value >= 1) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The quantity must be greater than 0")
                  );
                },
              }),
            ]}
            name="quantity"
            label="Product Quantity"
          >
            <Input
              type="number"
              placeholder="Type product quantity"
              onChange={handleChange}
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}

const CreateProductFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    product_name: "",
    price: 0,
    category_id: "",
    quantity: 0,
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    const newProduct = {
      product_name: values.product_name,
      price: values.price,
      category_id: values.category_id,
      quantity: values.quantity,
    };
    props.dispatch(createProductApi(newProduct));
  },
})(FormCreateProduct);

export default forwardRef((props, ref) => (
  <CreateProductFormik {...props} formRef={ref} />
));
