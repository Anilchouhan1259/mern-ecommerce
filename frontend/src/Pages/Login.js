import { FormProvider, useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

import Input from "../components/Input";
import { useLoginMutation } from "../store/apis/usersApi";
import { setIsLogin } from "../store/slices/profileSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [setLogin, responseInfo] = useLoginMutation();
  const methods = useForm();
  const formSubmit = async (data) => {
    try {
      await setLogin(data).unwrap();
      dispatch(setIsLogin(true));
      navigate("/");
    } catch (err) {
      setError(err.data.message);
    }
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
            {error && (
              <div className="my-1 font-medium text-red-600">{error}</div>
            )}
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
