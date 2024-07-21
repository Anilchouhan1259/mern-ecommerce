import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="md:px-20 md:flex bg-black py-10 text-white text-sm ">
      <div className="text-white space-y-4  py-4 px-4 md:border-0 border-b-[1px] border-white">
        <p className="text-xl font-semibold"> Fieren</p>
        <p>Unleash the Sound: Premium Headphones for Every Ear</p>
        <div className="flex gap-x-2">
          <FaInstagram size={20} />
          <FaFacebook size={20} />
          <FaYoutube size={20} />
        </div>
      </div>
      <div className=" md:ml-40 md:flex gap-x-16 ">
        <div className="space-y-4 flex flex-col py-4 px-4 md:border-0 border-b-[1px] border-white">
          <p className="font-semibold ">Page</p>

          <NavLink to="/">Home</NavLink>
          <NavLink to="/">Shop</NavLink>
          <NavLink to="/">Products</NavLink>
          <NavLink to="/">Contactus</NavLink>
        </div>
        <div className="space-y-4  py-4 px-4 md:border-0 border-b-[1px] border-white">
          <p className="font-semibold">Info</p>
          <p>Shipping Policies</p>
          <p>Return & refund</p>
          <p>Support</p>
          <p>FAQs</p>
        </div>
        <div className="space-y-2  py-4 px-4 md:border-0 border-b-[1px] border-white">
          <p className="font-semibold">Office</p>
          <p> 908, Raheja Chambers,</p>
          <p>Journal Marg</p>
          <p>Assam</p>
          <p>6000638487</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
