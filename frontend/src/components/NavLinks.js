import { RiAccountCircleLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import SearchBar from "./ui/SearchBar";

const NavLinks = ({ isClicked }) => {
  return (
    <div className="z-10  text-black">
      <ul
        className={`flex flex-col w-full bg-white
           md:flex-row fixed md:static  inset-y-0 my-10 md:my-0 left-0 px-4  gap-y-4 md:gap-x-4 md:gap-y-0 -translate-x-0 md:translate-x-0 md:top-0 md:right-4 
         ${isClicked ? "" : "-translate-x-full"} `}
      >
        <li className="py-4 md:py-0 border-gray-200 border-b-[1px] md:border-0 ">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="py-4 md:py-0 border-gray-200 border-b-[1px] md:border-0">
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li className="py-4 md:py-0 border-gray-200 border-b-[1px] md:border-0">
          <NavLink to="">Product</NavLink>
        </li>
        <li className="py-4 md:py-0 border-gray-200 border-b-[1px] md:border-0">
          <NavLink to="">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
