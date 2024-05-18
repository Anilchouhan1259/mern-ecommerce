import { FormProvider, useForm } from "react-hook-form";

import Input from "../components/Input";

const CheckoutPage = () => {
  const formSubmit = () => {};
  const methods = useForm();
  return (
    <div className="mt-2 mx-20 w-3/5">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(formSubmit)}>
          <div className="px-4 py-8 border-2 rounded-md border-gray-300 ">
            <p className="text-2xl font-semibold ">Contact Information</p>
            <div className="flex gap-2 mt-2">
              <Input
                placeholder="First Name"
                type="text"
                name="firstName"
                className={"flex-1"}
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
                validation={{
                  required: {
                    value: true,
                    message: "Last name is required",
                  },
                }}
              />
            </div>
            <div className="mt-2 flex flex-col gap-y-2 ">
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
                placeholder="phone number"
                type="number"
                name="phoneNumber"
                validation={{
                  required: {
                    value: true,
                    message: "phone number is required",
                  },
                }}
              />
            </div>
          </div>
          <div className="px-4 py-8 border-2 mt-2 rounded-md border-gray-300">
            <p className="text-2xl font-semibold ">Address</p>
            <div className="mt-2 flex flex-col gap-y-2 ">
              <Input
                placeholder="Street address"
                type="text"
                name="streetAddress"
                validation={{
                  required: {
                    value: true,
                    message: "adress is required",
                  },
                }}
              />
              <Input
                placeholder="Country"
                type="text"
                name="country"
                validation={{
                  required: {
                    value: true,
                    message: "country is required",
                  },
                }}
              />
              <Input
                placeholder="town"
                type="text"
                name="town"
                validation={{
                  required: {
                    value: true,
                    message: "town is required",
                  },
                }}
              />
            </div>
            <div className="mt-2 flex gap-2">
              <Input
                placeholder="state"
                type="text"
                name="state"
                validation={{
                  required: {
                    value: true,
                    message: "state is required",
                  },
                }}
              />
              <Input
                placeholder="Zip code"
                type="number"
                name="lastName"
                validation={{
                  required: {
                    value: true,
                    message: "zipcode is required",
                  },
                }}
              />
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default CheckoutPage;
