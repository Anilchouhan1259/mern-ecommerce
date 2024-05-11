import { FiShoppingCart } from "react-icons/fi";
import NavButton from "./ui/NavButton";
import NavLinks from "./NavLinks";
import { NavLink } from "react-router-dom";
import Notification from "./ui/Notification";
import { useState } from "react";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    console.log("click");
    setIsClicked(!isClicked);
  };
  return (
    <div className="border-b-[1px] border-gray-200">
      {/* <Notification /> */}
      <nav className="flex justify-between items-center mx-20 my-2  ">
        <div className="block md:hidden absolute aspect-square  z-10000 left-2 top-2">
          <NavButton handleClick={handleClick} />
        </div>
        <div className="text-xl font-semibold">Fieren</div>
        <NavLinks isClicked={isClicked} />
        <NavLink to="/cart">
          <FiShoppingCart />
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
