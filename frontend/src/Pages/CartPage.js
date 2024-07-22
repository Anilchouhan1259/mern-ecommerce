import CartList from "../components/CartList";
import { useNavigate } from "react-router-dom";
import { useGetCartQuery } from "../store/apis/cartApi";
import LoginRequest from "../components/LoginRequest";

const CartPage = () => {
  const navigate = useNavigate();
  const { data, isFetching, refetch, error } = useGetCartQuery(undefined, {
    refetchOnMountOrArgChange: true,
    cacheTime: 0,
  });
  console.log(isFetching, error);

  if (error) {
    if (error.data && error.data.message === "please login first") {
      return <LoginRequest />;
    } else {
      return <div>Error: {error.message}</div>;
    }
  }
  const handleClick = async () => {
    navigate("/address");
  };
  return (
    <div>
      {isFetching ? (
        "fetching"
      ) : (
        <div className="mx-4">
          <div className="flex  justify-between md:w-7/12 w-full md:pr-8 md:ml-16 h-12 mt-7 border-b-[1px] border-gray-400">
            <p className="font-semibold text-md ">Products</p>
            <p className="font-semibold text-md pl-28">Quantity</p>
            <p className="font-semibold text-md ">Total</p>
          </div>
          <div className="flex flex-col md:flex-row  md:mx-16 mt-4 ">
            <div className="md:w-8/12 pr-8">
              {data.products.map((product) => {
                return <CartList key={product.skuId} product={product} />;
              })}
            </div>

            <div className="md:w-4/12 w-full rounded-md border-[1px] border-gray-300  text-gray-800 p-4">
              <p className="font-semibold text-2xl">Cart summary</p>
              <div className="flex justify-between mt-8">
                <p className="text-medium font-semibold">Items Total</p>
                <p className="text-medium font-semibold">{data.totalItem}</p>
              </div>
              <div className="flex justify-between mt-2">
                <p className="text-medium font-semibold">Sub Total</p>
                <p className="text-medium font-semibold">500</p>
              </div>
              <div className="flex justify-between mt-2">
                <p className="text-medium font-semibold">Gst</p>
                <p className="text-medium font-semibold">18%</p>
              </div>
              <div className="h-[1px] w-full bg-gray-300 mt-2"></div>
              <div className="flex justify-between mt-2">
                <p className="text-medium font-semibold">Total</p>
                <p className="text-medium font-semibold">{data.totalAmount}</p>
              </div>
              <button
                onClick={handleClick}
                className="py-3 my-4 w-full rounded-md bg-black text-white text-medium font-semibold"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
