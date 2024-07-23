import { GrInProgress } from "react-icons/gr";
import { MdCurrencyRupee } from "react-icons/md";
import AddressCard from "./AddressCard";
import { formatDate } from "../utils/formatDate";
const OrdersList = ({ orderData }) => {
  const arrivingDate = formatDate(orderData.deliveryDate.split("T")[0]);
  return (
    <div>
      <div className="bg-blue-100 w-full h-16 rounded-md flex items-center justify-between">
        <span className="text-gray-700 text-lg font-medium mx-2 ">
          Order Id: {orderData._id}
        </span>
        <div className="text-sm font-semibold flex flex-col mr-4 ">
          <span>Order Date: {orderData.orderDate.split("T")[0]}</span>

          <span>
            Expected Delivery Date: {orderData.deliveryDate.split("T")[0]}
          </span>
        </div>
      </div>
      {orderData.products.map((product, index) => {
        return (
          <div
            key={index}
            className="flex justify-between border-[1px] border-gray-300 rounded-md mt-3 p-4"
          >
            <div className="flex gap-x-4">
              <div className="w-[80px] h-[80px] ">
                <img
                  className="w-full h-full object-contain rounded-lg "
                  src={product.sku.images}
                  alt="product thumbnail"
                />
              </div>
              <div className="text-gray-700">
                <span className="font-medium text-xl">{product.title}</span>
                <div className="flex gap-x-4">
                  <span>
                    <span className="">Qnt: </span>
                    <span className="font-medium">{product.quantity}</span>
                  </span>
                  <span>|</span>
                  <span>
                    <span className="">color: </span>
                    <span className="font-medium">{product.sku.color}</span>
                  </span>
                </div>
                <span className="flex items-center gap-x-1">
                  <MdCurrencyRupee />
                  800
                </span>
              </div>
            </div>
            <div className="font-medium text-sm">
              <div className="flex items-center text-orange-500">
                <GrInProgress />
                <span>In progress</span>
              </div>
              <span>Arriving by {arrivingDate}</span>
            </div>
          </div>
        );
      })}
      <AddressCard
        className={"w-full bg-slate-300"}
        address={orderData.shippingAddress}
      />
    </div>
  );
};

export default OrdersList;
