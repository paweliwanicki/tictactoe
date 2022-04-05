import React from "react";
import propTypes from "prop-types";
import classnames from "classnames";

const Container = (props) => {
  const classStr = classnames(
    "mx-auto flex justify-center items-center",
    props.classes
  );

  return <div className={classStr}>{props.children}</div>;
};

Container.propTypes = {
  classes: propTypes.string,
  children: propTypes.node,
};

Container.defaultProps = {
  classes: "",
  children: null,
};

export default Container;
