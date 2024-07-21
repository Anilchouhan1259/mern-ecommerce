import { useGetAddressQuery } from "../store/apis/usersApi";
import AddressCard from "../components/AddressCard";
import AddAddess from "../components/AddAddess";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
const ShippingAddressPage = () => {
  const [isOpen, setIsOPen] = useState(false);
  const { data, isFetching } = useGetAddressQuery();
  const [addressInd, setAddressInd] = useState(null);
  const showAddress = () => {
    setIsOPen(!isOpen);
  };
  const handleAddressClick = (index) => {
    setAddressInd(index);
  };
  const handlePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51PFXg4SHA2LTzl7um6gLTHPCrF0cURi3qeKtenQf21tXV0ypkFum9N6cVNm7xEWmiDSkVYgePnXoOTVqjf44oy1T00BGcRoFcG"
    );
    const response = await fetch(
      "http://localhost:8000/create-checkout-session",
      {
        method: "POST",
        body: JSON.stringify({ addressInd }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        credentials: "include",
      }
    );
    const session = await response.json();
    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (result.error) {
      console.log(result.error);
    }
  };
  return (
    <div className="md:mx-20 relative">
      <div className="font-semibold text-md text-gray-700"> Select Address</div>
      <div className="md:grid grid-cols-2 items-center">
        {data && data.shippingAddress.length > 0 ? (
          data.shippingAddress.map((address, index) => {
            return (
              <AddressCard
                key={index}
                onClick={() => handleAddressClick(index)}
                address={address}
                className={addressInd === index ? "bg-blue-400" : "white"}
              />
            );
          })
        ) : (
          <div>no address available</div>
        )}
      </div>
      <div className="text-sm my-2 md:mx-20 flex justify-between">
        <button
          className="py-1 px-4 rounded-md bg-blue-800 text-white "
          onClick={showAddress}
        >
          Add Address
        </button>
        <button
          className="py-1 px-4 rounded-md bg-blue-800 text-white "
          onClick={handlePayment}
        >
          Check Out
        </button>
      </div>

      {isOpen && <AddAddess showAddress={handlePayment} />}
    </div>
  );
};

export default ShippingAddressPage;
