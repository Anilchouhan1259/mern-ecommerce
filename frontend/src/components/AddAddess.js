import Input from "./Input";
import { usePostAddressMutation } from "../store/apis/usersApi";
import { FormProvider, useForm } from "react-hook-form";
const AddAddess = ({ showAddress }) => {
  const [postAddress, { isLoading }] = usePostAddressMutation();
  const methods = useForm();
  const handleClick = () => {
    showAddress();
  };
  const formSubmit = (data) => {
    try {
      postAddress(data).unwrap();
      showAddress();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="absolute top-4 z-100 left-8 w-4/5 md:w-1/2 bg-blue-200 px-2 md:py-4 md:px-12 rounded-md md:left-64">
      <button className="w-1" onClick={handleClick}>
        X
      </button>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(formSubmit)}>
          <Input
            placeholder="First Name"
            type="text"
            name="firstName"
            className={"mt-1"}
            validation={{
              required: {
                value: true,
                message: "First name is required",
              },
            }}
          />
          <Input
            placeholder="Last Name"
            type="text"
            name="lastName"
            className={"mt-1"}
            validation={{
              required: {
                value: true,
                message: "Last name is required",
              },
            }}
          />
          <Input
            placeholder="Phone Number"
            type="number"
            name="contactNumber"
            className={"mt-1"}
            validation={{
              required: {
                value: true,
                message: "Phone Number is required",
              },
            }}
          />
          <Input
            placeholder="Email"
            type="email"
            name="email"
            className={"mt-1"}
            validation={{
              required: {
                value: true,
                message: "email is required",
              },
            }}
          />
          <Input
            placeholder="street"
            type="text"
            name="street"
            className={"mt-1"}
            validation={{
              required: {
                value: true,
                message: "street is required",
              },
            }}
          />
          <Input
            placeholder="State"
            type="text"
            name="state"
            className={"mt-1"}
            validation={{
              required: {
                value: true,
                message: "state is required",
              },
            }}
          />
          <Input
            placeholder="Postal code"
            type="number"
            name="postalCode"
            className={"mt-1"}
            validation={{
              required: {
                value: true,
                message: "Postal Number is required",
              },
            }}
          />
          <div className="mt-4">
            <button
              className="py-3 w-full rounded-md hover:bg-blue-800  bg-blue-600 text-white text-md"
              type="submit"
            >
              Add Address
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default AddAddess;
