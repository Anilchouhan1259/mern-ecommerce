import { VscAccount } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import LoginLink from "./LoginLink";
import SearchBar from "./ui/SearchBar";

const NavLinks = ({ isClicked }) => {
  return (
    <div className=" z-10  md:pl-80  text-gray-800 hover:text-black font-semibold  ">
      <ul
        className={`flex flex-col w-full bg-white md:items-center transition ease delay-1500
           md:flex-row h-full absolute md:static  inset-y-0 my-10 md:my-0 left-0 px-4  gap-y-4 md:gap-x-4 md:gap-y-0 -translate-x-0 md:translate-x-0 md:top-0 md:right-4 
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
        <div className="md:ml-72 flex  flex-col md:flex-row md:items-center md:gap-x-5 gap-y-6 ">
          <LoginLink />
          <div className="">
            <div className="md:hidden">Your Profile</div>
            <div className="hidden md:block">
              <NavLink to="/profile">
                <VscAccount size={22} />
              </NavLink>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default NavLinks;
