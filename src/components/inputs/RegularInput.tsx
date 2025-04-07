
import { useState } from "react";
import { EyeNoneIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import { mergeClassess } from "@/utils";

const RegularInput: React.FC<RegularInputProps> = ({
  type,
  id,
  label,
  name,
  placeholder,
  className,
  icon: Icon,
  onChange,
}) => {
  const [passwordVissible, setPasswordVisible] = useState<boolean>(false);

  return (
    <div className={clsx(mergeClassess('mb-5', className))}>
      {label && (
        <label htmlFor={id} className="block mb-1 text-[#48505E]">
          {label}
        </label>
      )}
      <div className="py-2 flex justify-between items-center rounded-lg w-full border border-border-primary px-3 gap-3">
        {Icon && <Icon width={18} height={18} />}

        <input
          type={type === "password" && passwordVissible ? "text" : type}
          id={id}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          className="placeholder:text-[#667085] placeholder:text-sm  text-[#858D9D] outline-0 flex-1"
          pattern={type === "number" ? "[0-9]*" : undefined}
          inputMode={type === "number" ? "numeric" : undefined}
        />

        {type === "password" && (
          <button
            type="button"
            className="cursor-pointer"
            onClick={() => {
              setPasswordVisible(!passwordVissible);
            }}
          >
            {passwordVissible ? (
              <EyeNoneIcon width={18} height={18} />
            ) : (
              <EyeOpenIcon width={18} height={18} />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default RegularInput;
