import React from "react";

import { clsx } from "clsx";

import { spinnerStyles } from "./styles";
import { SpinnerProps } from "./types";

const Spinner: React.FC<SpinnerProps> = ({ variant, size, color }) => {
  return (
    <div className="flex justify-center items-center relative">
      <div className={clsx(spinnerStyles({ variant, size, color }))}></div>
    </div>
  );
};

export default Spinner;
