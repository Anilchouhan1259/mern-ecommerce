import { Link } from "react-router-dom";
import CartDropDown from "./ui/CartDropDown";
import { useChangeQuantityMutation } from "../store/apis/cartApi";
const CartList = ({ product }) => {
  const [changeQuantity, { isLoading }] = useChangeQuantityMutation();
  const handleChangeQuantity = (value) => {
    changeQuantity({ skuId: product.skuId, quantity: value });
  };
  return (
    // <Link to={`/product/${product.productId}`}>
    <div
      key={product.skuId}
      className="mt-2 flex h-[100px] justify-between items-center"
    >
      <div className="flex w-4/5">
        <div className="flex w-4/5">
          <div className="w-[100px] h-[100px] bg-gray-100 rounded-md ">
            <img
              className="w-full h-full object-contain rounded-md mix-blend-darken"
              src={product.thumbnail}
              alt="product thumbnail"
            />
          </div>
          <div className="flex w-4/5 flex-col items-center md:flex-row md:justify-between">
            <div className="mx-2 flex  flex-col">
              <span className="text-medium font-semibold whitespace-nowrap">
                {product.title}
              </span>
              <p className="font-light">Color:{product.color}</p>
            </div>
            <div className="">
              <CartDropDown
                handleChangeQuantity={handleChangeQuantity}
                quantity={product.quantity}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="my-auto">
        <span className="text-lg font-semibold"> $ {product.price}</span>
      </div>
    </div>
    // </Link>
  );
};

export default CartList;
