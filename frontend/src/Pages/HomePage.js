const HomePage = () => {
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
      <div>
        <p className="">Just In</p>
        {/* <div className="flex">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div> */}
      </div>
    </div>
  );
};

export default HomePage;
