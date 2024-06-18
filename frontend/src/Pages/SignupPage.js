import { FormProvider, useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

import Input from "../components/Input";
import { useSignUpMutation } from "../store/apis/usersApi";

const SignupPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [setSignup, { isLoading }] = useSignUpMutation();
  const methods = useForm();
  const formSubmit = async (data) => {
    try {
      await setSignup(data).unwrap();
      navigate("/login");
    } catch (err) {
      setError(err.data.message);
    }
  };
  return (
    <div className="md:flex">
      <div className="md:w-1/2">
        <img src="headphone.jpg" alt="headpone image"></img>
      </div>
      <div className=" md:w-1/2 md:mx-20 mx-4">
        <p className="text-3xl font-medium ">Sign Up</p>
        <p>
          Already have an account ?
          <Link className="text-lg font-medium text-green-600" to="/login">
            sign In
          </Link>
        </p>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(formSubmit)} className="mt-8">
            <div className="flex flex-col gap-2 ">
              <Input
                placeholder="First Name"
                type="text"
                name="firstName"
                validation={{
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                }}
              />
              <Input
                placeholder="Lirst Name"
                type="text"
                name="lastName"
                validation={{
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                }}
              />

              <Input
                placeholder="Email address"
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
                placeholder="Password"
                type="password"
                name="password"
                validation={{
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                }}
              />
              <Input
                placeholder="Confirm Password"
                type="Password"
                name="confirmPassword"
                validation={{
                  required: {
                    value: true,
                    message: "confirm password is required",
                  },
                }}
              />
              <div className="flex items-center mt-4 gap-x-2">
                <Input
                  placeholder=""
                  className="w-4"
                  type="checkbox"
                  name="tc"
                  // validation={{
                  //   required: {
                  //     value: true,
                  //     message: "Agree with Term and condition",
                  //   },
                  // }}
                />
                <span className="w-full">
                  I agree with Privacy Policy and Term of Use
                </span>
              </div>
            </div>
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

export default SignupPage;
