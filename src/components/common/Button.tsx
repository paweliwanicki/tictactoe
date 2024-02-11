import { ReactNode, ButtonHTMLAttributes } from 'react';

type ButtonType = 'button' | 'submit';

type ButtonProps = {
  classes: string;
  type: ButtonType;
  text: ReactNode;
  primary?: boolean;
  icon?: ReactNode;
  disabled?: boolean;
  onClick: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  primary,
  icon,
  type,
  classes,
  disabled,
  text,
  onClick,
}: ButtonProps) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`font-bold uppercase px-4 text-sm-custom rounded-10px ${
      primary ? 'text-md rounded-15px' : ''
    } 
      ${icon ? 'p-4' : ''} 
      ${classes}`}
  >
    {text}
  </button>
);

export default Button;
