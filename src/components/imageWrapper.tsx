import Image,{ StaticImageData }  from "next/image";
import React from "react";

interface ImageWrapperProps {
  src: string | StaticImageData;
  alt?: string;
  className?: string;
}

const ImageWrapper: React.FC<ImageWrapperProps> = ({
  src,
  alt,
  className,
  ...rest
}) => {
  return <Image src={src} alt={alt ?? "image"} className={className} {...rest} />;
};

export default ImageWrapper;
