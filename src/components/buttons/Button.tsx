import React from "react";
import { mergeClassess } from "@/utils";
import { clsx } from "clsx";
import { buttonStyles } from "./styles";

const Button = ({
  type,
  onClick,
  children,
  className,
  variant,
}: {
  type: "submit" | "reset" | "button";
  className?: string,
  variant?: "solid" | "outline" | "ghost" | "danger"
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}) => {


  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event);
    }
    if (type === "submit") {
      event.stopPropagation();
    }
  };
  
  return (
    <button
      type={type}
      className={clsx(mergeClassess(buttonStyles({variant})), className)}
      onClick={handleClick}
    >
      {children}
    </button>
    
  );
};

export default Button;
