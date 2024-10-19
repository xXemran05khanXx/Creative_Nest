"use client";
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";
import { BiRupee } from "react-icons/bi";


type InputProps = {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
};
export const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  disabled,
  formatPrice,
  required,
  register,
  errors,
}) => {
  return (
    <div className="w-full relative">
      {formatPrice && (
        <BiRupee
          size={24}
          className="text-neutral-500 absolute top-5 left-2"
        />
      )}
      <input
        type={type}
        id={id}
        {...register(id, { required })}
        placeholder=" "
        className={`
         peer
         w-full
         p-4
         pt-6
         font-light
         bg-white
         border-2
         rounded-md
         outline-none
         transition
         disabled:opacity-70
         disabled:cursor-not-allowed
         ${formatPrice ? "pl-9" : "pl-4"}
         ${errors[id] ? "border-red-600" : "border-neutral-300"}
         ${errors[id] ? "focus:border-red-600" : "focus:border-black"}
        `}
      />
      <label
        htmlFor={id}
        className={`
      absolute
      text-md
      duration-150
      transform-translate-y-3
      top-5
      z-10
      origin-[0]
      ${formatPrice ? "left-9" : "left-4"}
      peer-placeholder-shown:scale-100
      peer-placeholder-shown:translate-y-0
      peer-focus:scale-75
      peer-focus:-translate-y-4
      ${errors[id] ? "border-red-600" : "border-zink-400"}


      `}
      >
        {label}
      </label>
    </div>
  );
};
