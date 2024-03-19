import { CommentOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import parse from "html-react-parser";

function FunctionPopup(props) {
  const dispatch = useDispatch();

  const { Components } = useSelector((state) => state.FunctionPopupReducer);

  // when the state of Components change, the component will re-render
  useEffect(() => {
    // console.log(Components);
  }, [Components]);

  return (
    <>
      <FloatButton.Group
        trigger="hover"
        type="default"
        style={{
          right: 20,
          color: "#ffd700",
        }}
        icon={<i className="fa-solid fa-ellipsis" />}
      >
        {/* <FloatButton icon={<CommentOutlined />} />
        <FloatButton icon={<CommentOutlined />} /> */}

        {Components.map((component, index) => {
          return (
            <FloatButton
              key={index}
              icon={parse(component.icon)}
              tooltip={component.tooltip}
              onClick={() => {
                const action = {
                  type: "ModalReducer/setModalOpen",
                  title: component.tooltip,
                  contentComponentType: component.contentComponentType,
                };
                dispatch(action);
              }}
            />
          );
        })}
      </FloatButton.Group>
    </>
  );
}

export default FunctionPopup;
