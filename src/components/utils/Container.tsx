import { ReactNode } from "react";

type ContainerProps = {
  classes: string;
  children?: ReactNode;
  onClick?: () => void;
};

const Container = ({ classes, children, onClick }: ContainerProps) => {

  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
};

export default Container;
