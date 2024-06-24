import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const DropDown = ({ handler }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleChange = (e) => {
    e.preventDefault();
    handler(e.target.value);
  };
  return (
    <div>
      <select
        className="border-2 border-gray-600 w-56 p-1 rounded-md"
        onChange={handleChange}
      >
        <option
          value="earbud"
          onClick={() => setIsClicked(!isClicked)}
          className="my-1 mx-1 p-1 font-normal rounded-md text-gray-400 hover:text-black hover:font-semibold hover:bg-gray-200"
        >
          Earbuds
        </option>
        <option
          value="neckband"
          onClick={() => setIsClicked(!isClicked)}
          className="my-1 mx-1 p-1 font-normal rounded-md text-gray-400 hover:text-black hover:font-semibold hover:bg-gray-200"
        >
          Neckbands
        </option>
        <option
          value="wiredheadphone"
          onClick={() => setIsClicked(!isClicked)}
          className="my-1 mx-1 p-1 font-normal rounded-md text-gray-400 hover:text-black hover:font-semibold hover:bg-gray-200"
        >
          Wired Headphones
        </option>
        <option
          value="smartwatch"
          onClick={() => setIsClicked(!isClicked)}
          className="my-1 mx-1 p-1 font-normal rounded-md text-gray-400 hover:text-black hover:font-semibold hover:bg-gray-200"
        >
          Smart watches
        </option>
      </select>
    </div>
  );
};

export default DropDown;
