import { useState } from "react";
import { CiDiscount1 } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

const Notification = () => {
  const [isShow, setIsShow] = useState(true);
  const handleClick = () => {
    setIsShow(false);
  };

  return (
    <div
      className={` bg-blue-500 h-8 flex items-center text-sm  text-white justify-end ${
        isShow ? "" : "hidden"
      }`}
    >
      <div className="flex items-center gap-x-4 sm:pr-96 ">
        <CiDiscount1 />
        <p>30% off store wide - Limited time!</p>
      </div>

      <button className="mr-4" onClick={handleClick}>
        <IoCloseOutline />
      </button>
    </div>
  );
};

export default Notification;
