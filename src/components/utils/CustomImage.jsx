import React from "react";
import propTypes from "prop-types";
import classnames from "classnames";

const CustomImage = (props) => {
  const classStr = classnames("h-auto w-auto", props.classes);
  const ImageObj = props.image;
  return <img className={classStr} src={ImageObj.src} alt={ImageObj.alt} />;
};

CustomImage.propTypes = {
  image: propTypes.object.isRequired,
  classes: propTypes.string
};

CustomImage.defaultProps = {
  classes: ''
};

export default CustomImage;
