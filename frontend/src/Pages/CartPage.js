import CartList from "../components/CartList";
import { useGetCartQuery } from "../store/apis/cartApi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setCartPrice } from "../store/slices/cartSlice";

const CartPage = () => {
  let totalItem = 0;
  let subTotal = 0;
  const dispatch = useDispatch();
  const { data, isFetching } = useGetCartQuery();
  console.log(isFetching);
  useEffect(() => {
    if (!isFetching && data) {
      const priceData = data.products.map(
        ({ title, color, thumbnail, productId, _id, ...rest }) => rest
      );
      dispatch(setCartPrice(priceData));
    }
  }, [dispatch, data, isFetching]);
  const cartPriceArray = useSelector((state) => {
    return state.cartPrice.cartPrice;
  });
  cartPriceArray.forEach((item) => {
    totalItem += item.quantity;
    subTotal += item.price * item.quantity;
  });
  console.log(cartPriceArray);
  console.log(totalItem, subTotal);
  return (
    <div>
      {isFetching ? (
        "fetching"
      ) : (
        <div>
          <div className="flex justify-between w-7/12 pr-8 ml-16 h-12 mt-7 border-b-[1px] border-gray-400">
            <p className="font-semibold text-md ">Products</p>
            <p className="font-semibold text-md pl-28">Quantity</p>
            <p className="font-semibold text-md ">Total</p>
          </div>
          <div className="flex  mx-16 mt-4 ">
            <div className="w-8/12 pr-8">
              {data.products.map((product) => {
                return <CartList key={product.skuId} product={product} />;
              })}
            </div>

            <div className="w-4/12 rounded-md border-[1px] border-gray-300  text-gray-800 p-4">
              <p className="font-semibold text-2xl">Cart summary</p>
              <div className="flex justify-between mt-8">
                <p className="text-medium font-semibold">Items Total</p>
                <p className="text-medium font-semibold">{totalItem}</p>
              </div>
              <div className="flex justify-between mt-2">
                <p className="text-medium font-semibold">Sub Total</p>
                <p className="text-medium font-semibold">{subTotal}</p>
              </div>
              <div className="flex justify-between mt-2">
                <p className="text-medium font-semibold">Gst</p>
                <p className="text-medium font-semibold">18%</p>
              </div>
              <div className="h-[1px] w-full bg-gray-300 mt-2"></div>
              <div className="flex justify-between mt-2">
                <p className="text-medium font-semibold">Total</p>
                <p className="text-medium font-semibold">
                  {0.18 * subTotal + subTotal}
                </p>
              </div>
              <button className="py-3 my-4 w-full rounded-md bg-black text-white text-medium font-semibold">
                Checkout
              </button>
            </div>
          </div>{" "}
        </div>
      )}
    </div>
  );
};

export default CartPage;
