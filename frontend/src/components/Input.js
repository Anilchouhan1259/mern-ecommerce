import { useFormContext } from "react-hook-form";
import { inputError } from "../utils/inputError";
import { isFormInvalid } from "../utils/isFormInvalid";
const Input = ({
  placeholder,
  type,
  validation,
  name,
  className,
  ...props
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const isError = inputError(errors, name);
  const isInvalid = isFormInvalid(isError);
  return (
    <div className="">
      {isInvalid && (
        <div className="animate-bounce text-sm text-red-600">
          {isError.error.message}
        </div>
      )}
      <input
        type={type}
        placeholder={placeholder}
        {...props}
        {...register(name, validation)}
        className={`w-full  p-2 font-medium border rounded-md border-slate-300 ${className}`}
      />
    </div>
  );
};

export default Input;
