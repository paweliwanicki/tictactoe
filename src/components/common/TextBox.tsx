import { ReactNode } from "react";

type TextBoxProps = {
  children: ReactNode;
  classes?: string;
  onClick?: () => void;
};

const TextBox = ({ classes, children, onClick }: TextBoxProps) => {
  return (
    <p className={classes} onClick={onClick}>
      {children}
    </p>
  );
};

export default TextBox;
