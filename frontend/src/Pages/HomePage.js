import { useFetchProductsQuery } from "../store/apis/productsApi";
import Card from "../components/Card";
import { CiDeliveryTruck, CiMoneyBill, CiLock } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
const HomePage = () => {
  let newArrival;
  const { data, isFetching } = useFetchProductsQuery({ limit: 10, page: 1 });
  const items = [
    {
      icon: <CiDeliveryTruck size={50} />,
      text1: "free Shippin",
      text2: "order above $200",
    },
    {
      icon: <CiMoneyBill size={50} />,
      text1: "Money-back",
      text2: "30 days guarantee",
    },
    {
      icon: <CiLock size={50} />,
      text1: "Secure payment",
      text2: "secure with stripe",
    },
    {
      icon: <BsTelephone size={50} />,
      text1: "14/7 support",
      text2: "phone and email support",
    },
  ];
  if (!isFetching) {
    newArrival = data.map((product, index) => {
      return <Card key={index} item={product} />;
    });
  }
  return (
    <div className="w-full">
      <div className="md:flex">
        <div className="h-[500px] w-full bg-black ">
          <img
            className="h-full w-full object-contain mix-blend-difference"
            src="homepage.png"
          ></img>
        </div>
        <div className="h-[500px] w-full bg-black text-white ">
          <p className="text-7xl my-10">
            Bring the <br /> style.
          </p>
          <p className="py-4 ">
            Everyone neesds good and stylist cloth
            <br />
            Find youurs with our collection and more
          </p>
          <button className="rounded-lg bg-blue-700 p-2"> Shopping Now</button>
        </div>
      </div>
      <div className="mx-4 md:mx-20">
        <p className="text-lg font-semibold">New Arrivals</p>
        <div className="md:gap-x-12 gap-x-3 flex  flex-nowrap  mt-4 overflow-hidden">
          {newArrival}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 justify-between my-8">
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className="md:w-[250px] md:h-[250px] h-[180px] bg-gray-200 flex flex-col  justify-center items-center space-y-2 my-4 md:my-0"
              >
                <div>{item.icon}</div>
                <div className="font-semibold">{item.text1} </div>
                <div className="text-sm text-gray-700">{item.text2} </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
