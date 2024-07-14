import React from "react";

const AddressCard = ({ address }) => {
  return (
    <div className="w-96 p-2 border-[1px] rounded-lg border-gray-600 text-sm">
      <div className="flex gap-x-1">
        <div>{address.firstName}</div>
        <div> {address.lastName}</div>
      </div>
      <div>{address.email} </div>
      <div>{address.contactNumber} </div>
      <div>{address.street} </div>
      <div className="flex ">
        <div>{address.state + ","} </div>
        <div>{address.postalCode} </div>
      </div>
    </div>
  );
};

export default AddressCard;
