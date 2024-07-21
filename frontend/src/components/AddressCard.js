const AddressCard = ({ address, className, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`font-medium w-96 mx-auto mt-2 p-2 border-[1px] rounded-lg border-gray-600 text-sm cursor-pointer ${className}`}
    >
      <div className="font-semibold text-md flex gap-x-1">
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
