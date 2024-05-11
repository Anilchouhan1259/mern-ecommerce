import React from "react";

const CartButton = ({ quantity, id }) => {
  return (
    <div className="h-7 w-20  flex items-center border-[1px] rounded-lg">
      <button className="px-2"> - </button>
      <p className="px-2 font-Quicksand">1</p>
      <button className="px-2"> + </button>
    </div>
  );
};

export default CartButton;
