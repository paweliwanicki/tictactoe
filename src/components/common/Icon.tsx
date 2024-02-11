import { useState, useEffect, useCallback } from 'react';
import Icons from '../../assets/svg-sprite.svg';

type IconProps = {
  id: string;
  elementId?: string;
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
  elementId,
  viewBox,
  height = 20,
  width = 20,
  classes = '',
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

  useEffect(() => {
    setFillColor(color);
  }, [color]);

  return (
    <svg
      id={elementId}
      width={width}
      height={height}
      viewBox={viewBox ? viewBox : `0 0 ${width} ${height}`}
      fill={fillColor}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      className={classes}
      onClick={onClick}
    >
      <use href={Icons + `#${id}`} />
    </svg>
  );
};

export default Icon;
