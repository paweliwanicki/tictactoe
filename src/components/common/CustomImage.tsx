import { HTMLProps } from 'react';

type CustomImageProps = {
  classes: string;
  image: {
    src: string;
    alt: string;
  };
} & HTMLProps<HTMLImageElement>;

const CustomImage = ({ image, classes }: CustomImageProps) => {
  const { src, alt } = image;
  return <img className={`h-auto w-auto ${classes}`} src={src} alt={alt} />;
};

export default CustomImage;
