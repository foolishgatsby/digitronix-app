import { Col, Form, Input, Row } from "antd";
import { connect, withFormik } from "formik";
import { forwardRef, useEffect, useImperativeHandle } from "react";
import { useDispatch } from "react-redux";
import { setSubmitFunc } from "../../redux/reducers/ModalReducer";

function FormEditProduct(props) {
  const {
    values,
    touched,
    errors,
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
        <Col span={8}>
          <Form.Item name="id" label="Product Id" initialValue={values.id}>
            <Input disabled placeholder="ID" onChange={handleChange} />
          </Form.Item>
        </Col>
        <Col span={16}>
          <Form.Item
            name="product_name"
            label="Product Name"
            initialValue={values.product_name}
          >
            <Input placeholder="Product Name" onChange={handleChange} />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}

const EditProductFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => {
    const { productEdit } = props;
    return {
      id: productEdit.id,
      product_name: productEdit.product_name,
      price: productEdit.price,
      category_id: productEdit.category_id,
      quantity: productEdit.quantity,
    };
  },
  handleSubmit: (values, { props, setSubmitting }) => {
    // nhấn submit form => dispatch edit account
    console.log(values);

    const editProduct = {
      id: values.id,
      product_name: values.product_name,
      price: values.price,
      category_id: values.category_id,
      quantity: values.quantity,
    };

    const asignTagToProduct = {
      id: values.id,
      tag_id: values.tag_id,
    };

    // props.dispatch(updateUserApi(values.id, values.role_id));
  },
  displayName: "EditAccountFormik",
});

const mapStateToProps = (state) => {
  return {
    productEdit: state.ProductReducer.productEdit,
  };
};

export default connect(mapStateToProps)(
  forwardRef((props, ref) => <EditProductFormik {...props} formRef={ref} />)
);
