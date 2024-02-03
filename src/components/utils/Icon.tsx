import { useState, useEffect, useCallback } from "react";
import Icons from "../../images/svg-sprite.svg";

type IconProps = {
  id: string;
  width?: number;
  height?: number;
  classes?: string;
  color?: string;
  hoverColor?: string;
  viewBox?: string;
  onClick?: () => void;
};

const Icon = ({
  id,
  color,
  hoverColor,
  height = 20,
  width = 20,
  classes = "",
  viewBox,
  onClick,
}: IconProps) => {
  const [fillColor, setFillColor] = useState(color);

  const onMouseEnterHandler = useCallback(() => {
    if (hoverColor) {
      setFillColor(hoverColor);
    }
  }, [hoverColor]);

  const onMouseLeaveHandler = useCallback(() => {
    setFillColor(color);
  }, [color]);

  // set color if props.color has been changed
  useEffect(() => {
    setFillColor(color);
  }, [color]);

  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox ? viewBox : `0 0 ${width} ${height}`}
      fill={fillColor}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      data-id={id}
      className={classes}
      onClick={onClick}
    >
      <use href={Icons + `#${id}`} />
    </svg>
  );
};

export default Icon;
