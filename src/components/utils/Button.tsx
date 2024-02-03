import { ReactNode } from "react";

type ButtonType = "button" | "submit";

type ButtonProps = {
  classes: string;
  type: ButtonType;
  text: ReactNode;
  primary?: boolean;
  icon?: ReactNode;
  disabled?: boolean;
  onClick: () => void;
};

const Button = ({
  primary,
  icon,
  type,
  classes,
  disabled,
  text,
  onClick,
}: ButtonProps) => {
  let typeClasses = "px-4 text-sm-custom rounded-10px";

  if (primary) {
    typeClasses = "text-md rounded-15px";
  }
  if (icon) {
    typeClasses = "p-4";
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`font-bold uppercase ${typeClasses} ${classes}`}
    >
      {text}
    </button>
  );
};

export default Button;
