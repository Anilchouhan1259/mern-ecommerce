import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
const Card = ({ item }) => {
  return (
    <Link to={`/product/${item._id}`}>
      <div className="w-[150px] text-gray-600 hover:opacity-80 overflow-hidden">
        <div className="aspect-[3/4] h-[200px] ">
          <img
            className="w-full h-full object-fit rounded-md mix-blend-darken"
            src={item.thumbnail}
          ></img>
        </div>
        <div className="py-2">
          <div className="flex items-center">
            <FaStar size={12} />
            <FaStar size={12} />
            <FaStar size={12} />
            <FaStar size={12} />
            <FaStar size={12} />
          </div>
          <p className="py-1 text-xs leading-1 font-semibold">{item.title}</p>
          <span className="text-xs font-semibold">${item.price}</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
