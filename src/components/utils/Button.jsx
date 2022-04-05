import React from "react";
import propTypes from "prop-types";
import classnames from "classnames";

const Button = (props) => {
  const typeClasses = props.primary
    ? "text-md rounded-15px"
    : props.icon
    ? "p-4"
    : "px-4 text-sm-custom rounded-10px";

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
