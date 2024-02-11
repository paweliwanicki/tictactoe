import { ReactNode, MouseEvent, HTMLProps } from 'react';

type ContainerProps = {
  id?: string;
  classes: string;
  children?: ReactNode;
  onClick?: () => void;
  onMouseEnter?: (event: MouseEvent<HTMLDivElement>) => void;
  onMouseLeave?: (event: MouseEvent<HTMLDivElement>) => void;
} & HTMLProps<HTMLDivElement>;

const Container = ({
  id,
  classes,
  children,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: ContainerProps) => (
  <div
    id={id}
    className={classes}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {children}
  </div>
);

export default Container;
