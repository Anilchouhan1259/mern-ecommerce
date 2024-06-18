import AccounDetails from "../components/AccounDetails";
import Orders from "../components/Orders";
import WishList from "../components/WishList";
import Address from "../components/Address";
import ProfileOptions from "../components/ui/ProfileOptions";
import { useState } from "react";

const ProfilePage = () => {
  const [option, setOption] = useState("order");
  const optionHandler = (value) => {
    setOption(value);
  };
  let renderComponent = <Orders />;
  if (option === "Orders") {
    renderComponent = <Orders />;
  } else if (option === "Address") {
    renderComponent = <Address />;
  } else if (option === "wishlists") {
    renderComponent = <WishList />;
  } else {
    renderComponent = <AccounDetails />;
  }
  return (
    <div className="mx-2 md:mx-20 md:flex">
      <div className="bg-gray-200 md:w-1/5 md:h-[450px]  rounded-md mt-10">
        <div className="py-10">
          <img
            className="h-[60px] w-[60px] rounded-full mx-auto"
            src="/table1.png"
          ></img>
          <p className="text-xl font-semibold text-center">Anil chouhan</p>
        </div>
        <div className="my-[10px] mx-3">
          <div className="hidden md:block py-1 border-b-2 border-black">
            <p className="font-semibold text-md">Account</p>
          </div>
          <div className="py-4 text-gray-500 font-medium text-md">
            <ProfileOptions optionHandler={optionHandler} />
          </div>
        </div>
      </div>

      <div className="md:w-4/5 md:ml-20 md:mt-10 pb-20">{renderComponent}</div>
    </div>
  );
};

export default ProfilePage;
