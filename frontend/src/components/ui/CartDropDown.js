import { useState } from "react";
const CartDropDown = ({ handleChangeQuantity, quantity }) => {
  const [currentQuantity, setCurrentQuantity] = useState(quantity);
  const handleChange = (e) => {
    setCurrentQuantity(e.target.value);
    handleChangeQuantity(e.target.value);
  };
  return (
    <select
      className="px-2 font-medium border-[1px] border-gray-500 rounded-lg"
      value={currentQuantity}
      onChange={handleChange}
    >
      {[...Array(10)].map((_, index) => (
        <option key={index + 1} value={index + 1}>
          {index + 1}
        </option>
      ))}
    </select>
  );
};

export default CartDropDown;
