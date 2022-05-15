import React from "react";
import Container from "./utils/Container";
import TextBox from "./utils/TextBox";
import Button from "./utils/Button";
import propTypes from "prop-types";

const SubMenu = (props) => {
  let textColor = "text-silver";

  const okBtnHandler = () => {
    props.onConfirm();
  };

  const cancelBtnHandler = () => {
    props.onCancel();
  };

  return (
    <Container classes="w-full h-full fixed inset-0 align-center">
      <Container classes="w-screen fixed inset-0 opacity-50 bg-black" />
      <Container classes="w-screen h-266px bg-semi-dark fixed inset-0 justify-center align-center my-auto flex-col">
        <Container
          classes={`text-sm-custom text-silver mb-24px font-bold text-xl-custom justify-center align-center`}
        >
          <TextBox
            classes={`text-sm-custom mb-24px font-bold text-xl-custom ${textColor} mb-0`}
          >
            {props.header}
          </TextBox>
        </Container>

        <Container classes="flex justify-center align-center ">
          <Button
            classes={`w-76px h-52px bg-silver hover:bg-silver-light text-dark mr-16px shadow-sm-silver-custom`}
            primary={false}
            type="button"
            text="NO, CANCEL"
            onClick={cancelBtnHandler}
          />
          <Button
            classes={`w-146px h-52px bg-orange hover:bg-orange-light text-dark shadow-sm-orange-custom`}
            primary={false}
            type="button"
            text="YES, RESTART"
            onClick={okBtnHandler}
          />
        </Container>
      </Container>
    </Container>
  );
};

SubMenu.propTypes = {
  onConfirm: propTypes.func.isRequired,
  onCancel: propTypes.func.isRequired,
  header: propTypes.string,
};

SubMenu.defaultProps = {
  header: "",
};

export default SubMenu;
