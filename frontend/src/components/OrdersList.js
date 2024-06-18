import { GrInProgress } from "react-icons/gr";
import { MdCurrencyRupee } from "react-icons/md";

const OrdersList = ({ orderData }) => {
  console.log(orderData);
  return (
    <div>
      <div className="bg-blue-100 w-full h-16 rounded-md flex items-center">
        <span className="text-gray-700 text-lg font-medium mx-2 ">
          Order Id: {orderData._id}
        </span>
      </div>
      {orderData.products.map((product) => {
        return (
          <div className="flex justify-between border-[1px] border-gray-300 rounded-md mt-3 p-4">
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
              <span>Arriving by Friday,11 April</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrdersList;
