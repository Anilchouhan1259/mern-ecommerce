import { FaStar } from "react-icons/fa6";

const Star = () => {
  return (
    <div className="flex items-center">
      <FaStar size={12} color="yellow" />
      <FaStar size={12} />
      <FaStar size={12} />
      <FaStar size={12} />
      <FaStar size={12} />
    </div>
  );
};

export default Star;
