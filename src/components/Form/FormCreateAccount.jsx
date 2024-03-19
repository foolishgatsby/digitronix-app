import { connect, useDispatch, useSelector } from "react-redux";

import { withFormik } from "formik";
import React, { forwardRef, useEffect, useImperativeHandle } from "react";
import { Col, Form, Input, Row, Select } from "antd";
import { Option } from "antd/es/mentions";
import { useRoleList } from "../../utils/Hooks/useRoleList";
import { setSubmitFunc } from "../../redux/reducers/ModalReducer";
import { registerApi, updateUserApi } from "../../redux/reducers/UserReducer";
import { values } from "lodash";

function FormCreateAccount(props) {
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
        <Col span={24}>
          <Form.Item
            rules={[{ required: true, message: "Username is required" }]}
            name="username"
            label="Username"
          >
            <Input placeholder="Type username" onChange={handleChange} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            rules={[{ required: true, message: "Password is required" }]}
            name="password"
            label="Password"
          >
            <Input
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            dependencies={["password"]}
            rules={[
              { required: true, message: "Retype Password is required" },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    "The two passwords that you entered do not match!"
                  );
                },
              }),
            ]}
            name="retype_password"
            label="Retype Password"
          >
            <Input
              type="password"
              placeholder="Retype Password"
              onChange={handleChange}
            />
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

const CreateAccountFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => {
    return {
      username: "",
      password: "",
      retype_password: "",
      role_id: null,
    };
  },
  handleSubmit: (values, { props, setSubmitting }) => {
    // nhấn submit form => dispatch edit account
    console.log(values);
    const newAccount = {
      username: values.username,
      password: values.password,
      retype_password: values.retype_password,
      role_id: values.role_id,
    };
    props.dispatch(registerApi(newAccount));
    // props.dispatch();
  },
  displayName: "CreateAccountFormik",
})(FormCreateAccount);

export default forwardRef((props, ref) => (
  <CreateAccountFormik {...props} formRef={ref} />
));
