import { ReactNode, MouseEvent } from "react";

type ContainerProps = {
  classes: string;
  children?: ReactNode;
  onClick?: () => void;
  onMouseEnter?: (event: MouseEvent<HTMLDivElement>) => void;
  onMouseLeave?: (event: MouseEvent<HTMLDivElement>) => void;
};

const Container = ({
  classes,
  children,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: ContainerProps) => {
  return (
    <div
      className={classes}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};

export default Container;
