import React from "react";
import propTypes from "prop-types";
import Container from "./Container";
import TextBox from "./TextBox";
import Button from "./Button";

const SubMenu = (props) => {
  const confirmBtnHandler = () => {
    props.onConfirm();
  };

  const cancelBtnHandler = () => {
    props.onCancel();
  };

  return (
    <Container classes="w-full h-full fixed inset-0 ">
      <Container classes="w-screen fixed inset-0 opacity-50 bg-black" />
      <Container classes="flex items-center w-screen h-266px bg-semi-dark fixed inset-0 justify-center  my-auto flex-col">
        <Container
          classes={`flex items-center text-sm-custom text-silver mb-24px font-bold text-xl-custom justify-center `}
        >
          <TextBox
            classes={`text-ml-custom sm:text-xl-custom mb-24px font-bold  text-silver mb-0`}
          >
            {props.header}
          </TextBox>
        </Container>

        <Container classes="flex justify-center  ">
          <Button
            classes={`w-76px h-52px bg-silver hover:bg-silver-light text-dark mr-16px shadow-sm-silver-custom`}
            primary={false}
            type="button"
            text={props.cancelBtnText}
            onClick={cancelBtnHandler}
          />
          <Button
            classes={`w-146px h-52px bg-orange hover:bg-orange-light text-dark shadow-sm-orange-custom`}
            primary={false}
            type="button"
            text={props.confirmBtnText}
            onClick={confirmBtnHandler}
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
