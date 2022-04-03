import React from "react";
import propTypes from "prop-types";

const Button = (props) => {
  const colorPalleteClasses = {
    bg: `bg-${props.color}`,
    bgH: `bg-${props.color}-light`,
    shadow: `shadow-${props.color}-custom`,
  };

  const sizeClasses = props.primary ? "w-410 h-67" : "w-226 h-52";

  return (
    <button
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
      className={`bg-${props.color} hover:bg-${props.color}-light ${sizeClasses} font-bold uppercase rounded-15 pt-17 pb-25 text-md ${colorPalleteClasses.shadow}`}
    >
      {props.text}
    </button>
  );
};

Button.propTypes = {
  type: propTypes.string.isRequired,
  color: propTypes.string.isRequired,
  primary: propTypes.bool,
  onClick: propTypes.func,
  disabled: propTypes.bool,
};

export default Button;
