import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";

import Input from "../components/Input";
import { useLoginMutation } from "../store/apis/registrationApi";

const Login = () => {
  const navigate = useNavigate();
  const [setLogin, responseInfo] = useLoginMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const formSubmit = async (data) => {
    await setLogin(data);
    navigate("/");
  };

  function inputError(errors, label) {
    console.log(errors);
    const filtered = Object.keys(errors)
      .filter((key) => key.includes(label))
      .reduce((cur, key) => {
        console.log(cur, key);
        return Object.assign(cur, { errors: errors[key] });
      }, {});
    return filtered;
  }
  const input = inputError(errors, "email");
  console.log(input);
  return (
    <div className="flex">
      <div className="w-1/2">
        <img src="headphone.jpg" alt="headpone image"></img>
      </div>
      <div className="w-1/2 mx-20 my-auto">
        <p className="text-3xl font-medium ">Sign In</p>
        <p>
          Don't have an account yet ?{" "}
          <Link className="text-lg font-medium text-green-600" to="/signup">
            signup
          </Link>
        </p>
        <form onSubmit={handleSubmit(formSubmit)} className="mt-8">
          <div className="flex flex-col gap-2 ">
            <Input
              placeholder="email address"
              type="email"
              {...register("email", {
                required: true,
              })}
            />
            {errors.email?.type === "required" && (
              <small className="animate-bounce">Username is required</small>
            )}
            <Input
              className="mt-4"
              placeholder="password"
              type="text"
              {...register("password", {
                required: true,
              })}
            />
          </div>
          <Link className="block mt-4 font-medium text-md" to="/forgetpassword">
            forgot password ?
          </Link>
          <div className="mt-4">
            <button
              className="py-3 w-full rounded-md hover:bg-blue-800  bg-blue-600 text-white text-md"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
