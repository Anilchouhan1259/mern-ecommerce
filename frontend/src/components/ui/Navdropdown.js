import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
const Navdropdown = ({ children }) => {
  const [isClicked, setIsClicked] = useState(false);
  const lists = ["product1", "product2", "product3"];
  const renderList = lists.map((item) => {
    return <div className="py-1">{item}</div>;
  });

  return (
    <div>
      <div
        onClick={() => setIsClicked(!isClicked)}
        className="flex justify-between"
      >
        <div>{children}</div>
        <FaChevronDown />
      </div>

      <div className={`${isClicked ? "" : "hidden"}`}>{renderList}</div>
    </div>
  );
};

export default Navdropdown;
