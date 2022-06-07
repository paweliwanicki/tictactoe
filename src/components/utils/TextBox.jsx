import React from "react";
import propTypes from "prop-types";
import classnames from "classnames";

const TextBox = (props) => {
  const classStr = classnames(props.classes);

  return <p className={classStr} onClick={props.onClick}>{props.children}</p>;
};

TextBox.propTypes = {
  children: propTypes.node.isRequired,
  classes: propTypes.string,
  onClick: propTypes.func
};

TextBox.defaultProps = {
  classes: "",
  onClick: null,
};

export default TextBox;
