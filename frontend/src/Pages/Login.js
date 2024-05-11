import { FormProvider, useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";

import Input from "../components/Input";
import { useLoginMutation } from "../store/apis/registrationApi";

const Login = () => {
  const navigate = useNavigate();
  const [setLogin, responseInfo] = useLoginMutation();
  const methods = useForm();
  const formSubmit = async (data) => {
    await setLogin(data);
    navigate("/");
  };

  return (
    <div className="md:flex">
      <div className="md:w-1/2">
        <img src="headphone.jpg" alt="headpone image"></img>
      </div>
      <div className="md:w-1/2 mx-4 md:mx-20 my-auto">
        <p className="text-3xl font-medium ">Sign In</p>
        <p>
          Don't have an account yet ?{" "}
          <Link className="text-lg font-medium text-green-600" to="/signup">
            signup
          </Link>
        </p>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(formSubmit)} className="mt-8">
            <div className="flex flex-col gap-2 ">
              <Input
                placeholder="email address"
                type="email"
                name="email"
                validation={{
                  required: {
                    value: true,
                    message: "email is required",
                  },
                }}
              />
              <Input
                className="mt-4"
                placeholder="password"
                type="password"
                name="password"
                validation={{
                  required: {
                    value: true,
                    message: "password is required",
                  },
                }}
              />
            </div>
            <Link
              className="block mt-4 font-medium text-md"
              to="/forgetpassword"
            >
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
        </FormProvider>
      </div>
    </div>
  );
};

export default Login;
