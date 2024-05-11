import { forwardRef } from "react";

const Input = ({ placeholder, type, className, ...props }, ref) => {
  return (
    <div className="">
      <input
        type={type}
        placeholder={placeholder}
        {...props}
        ref={ref}
        className={`w-full  p-2 font-medium border rounded-md border-slate-300 ${className}`}
      />
    </div>
  );
};

export default forwardRef(Input);
