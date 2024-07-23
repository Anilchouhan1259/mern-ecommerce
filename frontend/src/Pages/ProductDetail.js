import { useFetchProductDetailQuery } from "../store/apis/productDetailApi";
import { useAddToCartMutation } from "../store/apis/cartApi";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LoginRequest from "../components/LoginRequest";
import Star from "../components/Star";
import Carousel from "../components/ui/Carousel";
import Skeleton from "../components/ui/Skeleton";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GoHeart } from "react-icons/go";

const ProductDetail = () => {
  const { id } = useParams();
  const [skuInd, setSkuInd] = useState(0);
  const { data, isFetching } = useFetchProductDetailQuery(id);
  const [addToCart, result] = useAddToCartMutation();

  console.log(result.error);
  if (result.isError) {
    if (
      result.error.data &&
      result.error.data.message === "please login first"
    ) {
      return <LoginRequest />;
    } else {
      return <div>Error: {result.error.message}</div>;
    }
  }

  const handleClick = () => {
    addToCart({
      skuId: data.sku[skuInd]._id,
      quantity: 1,
      thumbnail: data.sku[skuInd].images[0],
      productId: id,
      title: data.title,
      color: data.sku[skuInd].color,
      price: data.price,
    });
    toast.success("Items added to cart");
  };

  return (
    <div className="m-4">
      {isFetching ? (
        <Skeleton />
      ) : (
        <div className="flex flex-col md:flex-row md:mx-20 my-3 ">
          <div className="md:w-1/2">
            <Carousel images={data.sku[skuInd].images} />
          </div>
          <div className="md:w-1/2">
            <div className="flex items-center">
              <Star />
              <span className="pl-4 text-sm font-medium"> 11 Reviews</span>
            </div>
            <div className="text-2xl font-semibold my-2">
              <span>{data.title}</span>
            </div>
            <div>
              <p className="text-sm text-gray-600">{data.discription}</p>
            </div>
            <div className="text-2xl my-2">
              <span>$ {data.price}</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-gray-600">Choose color</span>
              <MdKeyboardArrowRight size={20} />
            </div>
            <div className="flex gap-x-2">
              {data.sku.map((sku, index) => {
                return (
                  <div
                    onClick={() => setSkuInd(index)}
                    key={sku.color}
                    className={`w-6 h-6 bg-${
                      sku.color === "black" || sku.color === "white"
                        ? sku.color
                        : sku.color + "-600"
                    } rounded-full`}
                  ></div>
                );
              })}
            </div>
            <div className="my-2">
              <button className="bg-transparent flex items-center py-1 px-32 border border-black rounded-md">
                <GoHeart /> <span className="text-sm">Wishlist</span>
              </button>
              <button
                onClick={handleClick}
                className="bg-black my-2  py-1 px-28 rounded-md text-white"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      )}
      <ToastContainer autoClose={2000} theme="light" />
    </div>
  );
};

export default ProductDetail;
