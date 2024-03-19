import { connect, useDispatch, useSelector } from "react-redux";

import { withFormik } from "formik";
import React, { forwardRef, useEffect, useImperativeHandle } from "react";
import { Col, Form, Input, Row, Select } from "antd";
import { Option } from "antd/es/mentions";
import { useRoleList } from "../../utils/Hooks/useRoleList";
import { setSubmitFunc } from "../../redux/reducers/ModalReducer";
import { updateUserApi } from "../../redux/reducers/UserReducer";

function FormEidtAccount(props) {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = props;

  const handleChangeRole = (value) => {
    setFieldValue("role_id", value);
  };

  const roleList = useRoleList();

  const dispatch = useDispatch();

  useEffect(() => {
    // set sự kiện submit edit account
    dispatch(setSubmitFunc(handleSubmit));
  }, []);

  useImperativeHandle(props.formRef, () => ({
    submitForm: handleSubmit,
  }));

  return (
    <Form layout="vertical" onFinish={handleSubmit}>
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item name="id" label="Account Id" initialValue={values.id}>
            <Input disabled placeholder="ID" onChange={handleChange} />
          </Form.Item>
        </Col>
        <Col span={16}>
          <Form.Item
            name="username"
            label="Account Username"
            initialValue={values.username}
          >
            <Input disabled placeholder="Username" onChange={handleChange} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item name="role_id" label="Role" initialValue={values.role_id}>
            <Select placeholder="Role select" onChange={handleChangeRole}>
              {roleList.map((role, index) => {
                return (
                  <Option value={role.id} key={index}>
                    {role.name}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}

const EditAccountFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => {
    const { accountEdit } = props;
    return {
      id: accountEdit.id,
      username: accountEdit.username,
      role_id: accountEdit.role?.id,
    };
  },
  handleSubmit: (values, { props, setSubmitting }) => {
    // nhấn submit form => dispatch edit account
    console.log(values);
    props.dispatch(updateUserApi(values.id, values.role_id));
  },
  displayName: "EditAccountFormik",
})(FormEidtAccount);

const mapStateToProps = (state) => {
  return {
    accountEdit: state.UserReducer.accountEdit,
  };
};

export default connect(mapStateToProps)(
  forwardRef((props, ref) => <EditAccountFormik {...props} formRef={ref} />)
);
