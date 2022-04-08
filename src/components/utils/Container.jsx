import React from "react";
import propTypes from "prop-types";
import classnames from "classnames";

const Container = (props) => {
  const classStr = classnames(
    "mx-auto flex justify-center items-center",
    props.classes
  );

  return <div className={classStr} onClick={props.onClick}>{props.children}</div>;
};

Container.propTypes = {
  classes: propTypes.string,
  children: propTypes.node,
  onClick: propTypes.func,
};

Container.defaultProps = {
  classes: "",
  children: null,
  onClick: null,
};

export default Container;
