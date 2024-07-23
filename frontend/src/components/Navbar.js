import { FiShoppingCart } from "react-icons/fi";
import NavButton from "./ui/NavButton";
import NavLinks from "./NavLinks";
import { NavLink } from "react-router-dom";
import Notification from "./ui/Notification";

const Navbar = () => {
  return (
    <div className=" border-b-[1px] border-gray-200 w-full">
      <nav className=" flex justify-between items-center mx-20 my-2  ">
        <div className="block md:hidden absolute aspect-square  z-100 left-2 top-2">
          <NavButton />
        </div>
        <div className="text-xl font-semibold">Fieren</div>
        <NavLinks />

        <NavLink to="/cart">
          <FiShoppingCart
            className="text-gray-700 hover:text-black"
            size={22}
          />
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
