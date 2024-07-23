import OrdersList from "./OrdersList";
import ShipmentTracker from "./ShipmentTracker";
import { useGetOrderQuery } from "../store/apis/orderApi";

const Orders = () => {
  const { data, isFetching } = useGetOrderQuery();
  if (!isFetching) {
    console.log(data);
  }

  return (
    <div className="">
      {isFetching
        ? "fetching .."
        : data.map((order, index) => {
            return <OrdersList key={index} orderData={order} />;
          })}
    </div>
  );
};

export default Orders;
