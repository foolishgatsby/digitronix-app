import { Modal } from "antd";
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setModalCancel,
  setModalOpen,
} from "../../redux/reducers/ModalReducer";
import FormEditAccount from "../../components/Form/FormEditAccount";
import { updateUserApi } from "../../redux/reducers/UserReducer";
import FormCreateAccount from "../../components/Form/FormCreateAccount";
import FormCreateProduct from "../../components/Form/FormCreateProduct";
import FormEditProduct from "../../components/Form/FormEditProduct";

// mapping componet from component type
const componentMapping = {
  FormEditAccount: FormEditAccount,
  FormCreateAccount: FormCreateAccount,
  FormCreateProduct: FormCreateProduct,
  FormEditProduct: FormEditProduct,
  // Add more mappings here if needed
};

// const submitFuncMapping = {
//   updateUserApi: updateUserApi,
// };

export default function ModalComponent(props) {
  // const formRef = useRef();

  // const handleOk = () => {

  // };

  const { isModalOpen, title, contentComponentType, submitFunc } = useSelector(
    (state) => state.ModalReducer
  );

  // const { accountEdit } = useSelector((state) => state.UserReducer);

  const dispatch = useDispatch();

  const ModalContent = componentMapping[contentComponentType];

  // const submitFunc = submitFuncMapping[submitFuncName];

  useEffect(() => {
    // console.log("ModalContent", ModalContent);
    // console.log("accountEdit", accountEdit);
  }, [isModalOpen]);

  return isModalOpen ? (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">{title}</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => {
                  dispatch(setModalCancel());
                }}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <ModalContent
                // ref={formRef}
                dispatch={dispatch}
                // accountEdit={accountEdit}
              />
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => {
                  dispatch(setModalCancel());
                }}
              >
                Close
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => submitFunc()}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="hidden opacity-25 fixed inset-0 z-40 bg-black"
        id="modal-id-backdrop"
      ></div>
    </>
  ) : null;
}
