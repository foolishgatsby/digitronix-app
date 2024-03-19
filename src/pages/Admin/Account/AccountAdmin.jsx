import { FloatButton, Space, Table, Tag } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setComponentsAction } from "../../../redux/reducers/FunctionPopupReducer";
import {
  getAllUserApi,
  setAccountEdit,
  setActiveUserApi,
  // updateUserApi,
  // getAllUserWithRole,
} from "../../../redux/reducers/UserReducer";
import { getAllRoleApi } from "../../../redux/reducers/RoleReducer";
import { editAccount } from "../../../redux/reducers/ModalReducer";
import FormEditAccount from "../../../components/Form/FormEditAccount";
import { useRoleList } from "../../../utils/Hooks/useRoleList";

/**
 * Fake data
 */
// const data = [
//   {
//     key: "1",
//     username: "worker 1",
//     role: "worker",
//     active: "Is Active",
//   },
//   {
//     key: "2",
//     username: "sales 1",
//     role: "sale",
//     active: "Is Active",
//   },
//   {
//     key: "3",
//     username: "Production manager",
//     role: "Production Manager",
//     active: "Is Active",
//   },
// ];

export default function AccountAdmin(props) {
  const dispatch = useDispatch();

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
      render: (_, { role }) => <p>{role.name}</p>,
    },
    {
      title: "Active",
      dataIndex: "active",
      key: "active",
      render: (_, { active }) =>
        active ? <p>Is active</p> : <p>Non Active</p>,
    },
    {
      title: "Action",
      key: "action",
      width: "25%",
      // render: (_, record) => console.log(record),
      render: (_, record) => (
        <Space size="middle">
          <button
            className="btn btn-primary"
            onClick={() => {
              dispatch(setAccountEdit(record));
              const action = {
                type: "ModalReducer/setModalOpen",
                title: "Edit Account",
                contentComponentType: "FormEditAccount",
              };
              dispatch(action);
            }}
          >
            <i className="fa fa-edit" /> Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              dispatch(setActiveUserApi(record.id, 0, record.role_id));
            }}
          >
            <i className="fa fa-times-circle" /> Deactive
          </button>
          <button
            className="btn btn-success"
            onClick={() => {
              dispatch(setActiveUserApi(record.id, 1, record.role_id));
            }}
          >
            <i className="fa fa-check-circle" /> Active
          </button>
        </Space>
      ),
    },
  ];

  const { userList, loading } = useSelector((state) => state.UserReducer);

  useEffect(() => {
    // let Component = (
    //   <FloatButton
    //     icon={<i className="fa-solid fa-plus" />}
    //     tooltip={<div>Create new account</div>}
    //   />
    // );

    let Components = [
      {
        tooltip: "Create new account",
        icon: `<i className="fa-solid fa-plus" />`,
        contentComponentType: "FormCreateAccount",
      },
    ];

    dispatch(setComponentsAction(Components));
    dispatch(getAllUserApi());
    dispatch(getAllRoleApi());
  }, []);

  return (
    <div>
      <div className="mb-3 flex justify-between items-end">
        <h5>
          <i className="fas fa-user-alt" /> Accounts
        </h5>
      </div>
      <Table
        rowKey={"id"}
        loading={loading}
        columns={columns}
        dataSource={userList}
      />
    </div>
  );
}
