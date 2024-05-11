import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { increaseQuantity, decreaseQuantity } from "../store/slices/cartSlice";
const CartList = ({ product }) => {
  let quantity = 1;
  const dispatch = useDispatch();
  const cartPriceArray = useSelector((state) => {
    return state.cartPrice.cartPrice;
  });
  quantity = cartPriceArray.map((item) => {
    if (item.skuId === product.skuId) {
      return item.quantity;
    }
  });
  const handleDecrease = () => {
    dispatch(decreaseQuantity(product.skuId));
    quantity -= quantity;
  };
  const handleIncrease = () => {
    quantity += quantity;
    dispatch(increaseQuantity(product.skuId));
  };
  return (
    <div
      key={product.skuId}
      className="mt-2 flex h-[100px] justify-between items-center"
    >
      <div className="flex">
        <div className="w-[80px] h-[100px] ">
          <img
            className="w-full h-full object-contain rounded-md "
            src={product.thumbnail}
            alt="product thumbnail"
          />
        </div>
        <div className="mx-2 flex flex-col justify-between my-3">
          <span className="text-lg font-semibold whitespace-nowrap">
            {product.title}
          </span>
          <p className="font-light">Color:{product.color}</p>
          <AiOutlineClose />
        </div>
      </div>
      <div className="my-auto">
        <div className="h-7 w-20  flex items-center border-[1px] rounded-lg">
          <button onClick={handleDecrease} className="px-2">
            {" "}
            -{" "}
          </button>
          <p className="px-2 font-Quicksand">{quantity}</p>
          <button onClick={handleIncrease} className="px-2">
            {" "}
            +{" "}
          </button>
        </div>
      </div>
      <div className="my-auto">
        <span className="text-lg font-semibold"> $ {product.price}</span>
      </div>
    </div>
  );
};

export default CartList;
