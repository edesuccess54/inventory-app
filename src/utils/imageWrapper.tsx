import React from "react";

interface ImageWrapperProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
  className?: string;
}

const ImageWrapper: React.FC<ImageWrapperProps> = ({
  src,
  alt,
  className,
  ...rest
}) => {
  return <img src={src} alt={alt ?? "image"} className={className} {...rest} />;
};

export default ImageWrapper;
