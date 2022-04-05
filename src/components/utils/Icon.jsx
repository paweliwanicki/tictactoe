import React, { useState, useEffect } from "react";
import propTypes from "prop-types";
import Icons from "../../images/svg-sprite.svg";

const Icon = (props) => {
  const [color, setColor] = useState(props.color);
  const onMouseEnterHandler = () => {
    if (props.hoverColor) {
      setColor(props.hoverColor);
    }
  };
  const onMouseLeaveHandler = () => {
    setColor(props.color);
  };

  // set color if props.color has been changed
  useEffect(() => {
    setColor(props.color);
  }, [props.color]);

  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox={
        props.viewBox ? props.viewBox : `0 0 ${props.width} ${props.height}`
      }
      fill={color}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      data-id={props.id}
      className={props.classes}
    >
      <use href={Icons + `#${props.id}`} />
    </svg>
  );
};

Icon.propTypes = {
  id: propTypes.string.isRequired,
  height: propTypes.number,
  width: propTypes.number,
  color: propTypes.string,
  viewBox: propTypes.string,
};

Icon.defaultProps = {
  height: 20,
  width: 20,
  color: "",
  viewBox: "",
};

export default Icon;
