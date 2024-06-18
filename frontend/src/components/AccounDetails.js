import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import Input from "./Input";
import {
  useUserInfoQuery,
  useChangeUserInfoMutation,
} from "../store/apis/usersApi";
const AccounDetails = () => {
  const navigate = useNavigate();
  const { data, isFetching } = useUserInfoQuery();
  const [changeInfo, responseInfo] = useChangeUserInfoMutation();
  const methods = useForm();
  const formSubmit = async (data) => {
    try {
      await changeInfo(data).unwrap();
      navigate(0);
    } catch {
      console.log("error");
    }
  };

  useEffect(() => {
    if (data) {
      methods.reset({
        firstName: data.firstName,
        lastName: data.lastName,
        displayName: data.displayName,
        phoneNumber: data.phoneNumber,
        email: data.email,
      });
    }
  }, [data, methods]);

  return (
    <div>
      <div>
        <p className="text-2xl font-semibold">Account Details</p>
      </div>
      {isFetching ? (
        "fetching"
      ) : (
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(formSubmit)}>
            <div className="my-4">
              <span className="text-sm font-medium text-gray-500">
                FIRST NAME *
              </span>
              <Input
                placeholder={`${data.firstName}`}
                type="text"
                name="firstName"
                className="mt-2"
                validation={{
                  required: {
                    value: true,
                    message: "First name is required",
                  },
                }}
              />
            </div>
            <div className="my-4">
              <span className="text-sm font-medium text-gray-500">
                LAST NAME *
              </span>
              <Input
                placeholder={`${data.lastName}`}
                type="text"
                name="lastName"
                className="mt-2"
                validation={{
                  required: {
                    value: true,
                    message: "email is required",
                  },
                }}
              />
            </div>
            <div className="my-4">
              <span className="text-sm font-medium text-gray-500">
                DISPLAY NAME *
              </span>
              <Input
                placeholder={`${data.displayName}`}
                type="text"
                name="displayName"
                className="mt-2"
                validation={{
                  required: {
                    value: true,
                    message: "email is required",
                  },
                }}
              />
            </div>
            <div>
              <span className="text-sm font-medium text-gray-500">
                PHONE NUMBER *
              </span>
              <Input
                placeholder={`${data.phoneNumber}`}
                type="number"
                name="phoneNumber"
                className="mt-2"
                validation={{
                  required: {
                    value: true,
                    message: "email is required",
                  },
                }}
              />
            </div>
            <div className="my-4">
              <span className="text-sm font-medium text-gray-500">EMAIL *</span>
              <Input
                placeholder={`${data.email}`}
                type="email"
                name="email"
                className="mt-2"
                validation={{
                  required: {
                    value: true,
                    message: "email is required",
                  },
                }}
              />
            </div>
            <div className="mt-4">
              <button
                className="py-2 px-4 rounded-md hover:bg-blue-800  bg-black text-white text-md"
                type="submit"
              >
                Save changes
              </button>
            </div>
          </form>
        </FormProvider>
      )}
    </div>
  );
};

export default AccounDetails;
