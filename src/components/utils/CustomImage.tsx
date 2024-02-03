type CustomImageProps = {
  image: {
    src: string;
    alt: string;
  };
  classes: string;
};

const CustomImage = ({ image, classes }: CustomImageProps) => {
  const { src, alt } = image;
  return <img className={`h-auto w-auto ${classes}`} src={src} alt={alt} />;
};

export default CustomImage;
