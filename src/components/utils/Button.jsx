import React from "react";
import propTypes from "prop-types";
import classnames from "classnames";

const Button = (props) => {
  let typeClasses = "px-4 text-sm-custom rounded-10px";

  if (props.primary) {
    typeClasses = "text-md rounded-15px";
  }
  if (props.icon) {
    typeClasses = "p-4";
  }

  const classStr = classnames(
    "font-bold uppercase",
    typeClasses,
    props.classes
  );

  return (
    <button
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
      className={classStr}
    >
      {props.text}
    </button>
  );
};

Button.propTypes = {
  text: propTypes.any.isRequired,
  type: propTypes.string.isRequired,
  classes: propTypes.string,
  icon: propTypes.bool,
  primary: propTypes.bool,
  onClick: propTypes.func,
  disabled: propTypes.bool,
};

Button.defaultProps = {
  classes: "",
  icon: false,
  primary: true,
  onClick: null,
  disabled: false,
};

export default Button;
