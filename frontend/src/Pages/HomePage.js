import { useFetchProductsQuery } from "../store/apis/productsApi";
import Card from "../components/Card";
const HomePage = () => {
  let newArrival;
  const { data, isFetching } = useFetchProductsQuery({ limit: 5, page: 1 });

  if (!isFetching) {
    newArrival = data.map((product) => {
      return <Card item={product} />;
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
      <div className="mx-20">
        <p className="text-lg font-semibold">New Arrivals</p>
        <div className="mx-auto md:gap-x-12 flex  flex-nowrap md:flex-wrap content-center overflow-hidden mt-4">
          {newArrival}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
