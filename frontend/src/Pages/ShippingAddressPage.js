import { useGetAddressQuery } from "../store/apis/usersApi";
import AddressCard from "../components/AddressCard";
import AddAddess from "../components/AddAddess";
import { useState } from "react";
const ShippingAddressPage = () => {
  const [isOpen, setIsOPen] = useState(false);
  const { data, isFetching } = useGetAddressQuery();
  if (!isFetching) {
    console.log(data);
  }
  const showAddress = () => {
    setIsOPen(!isOpen);
  };
  return (
    <div className="md:mx-20 relative">
      <div className="font-semibold text-md text-gray-700"> Select Address</div>
      <div>
        {data && data.shippingAddress.length > 0 ? (
          data.shippingAddress.map((address) => {
            return <AddressCard address={address} />;
          })
        ) : (
          <div>no address available</div>
        )}
      </div>
      <div className="text-sm my-2">
        <button className="p-1 rounded-md bg-blue-300 " onClick={showAddress}>
          Add Address
        </button>
      </div>
      <div className="absolute top-4 z-100 left-8 w-4/5 md:w-1/2 bg-blue-200 px-2 md:py-4 md:px-12 rounded-md md:left-64">
        {isOpen && <AddAddess showAddress={showAddress} />}
      </div>
    </div>
  );
};

export default ShippingAddressPage;
