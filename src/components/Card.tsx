import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  return <div className="rounded-lg flex-1 px-3 py-4 bg-[#fff]">{children}</div>;
};

export default Card;
