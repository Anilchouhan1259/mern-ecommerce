const Skeleton = () => {
  const components = Array.from({ length: 4 }, (_, index) => {
    return (
      <div
        key={index}
        className="w-[80px] h-[80px] bg-gray-300 mt-7 rounded-md"
      ></div>
    );
  });

  return (
    <div className="flex flex-col md:flex-row md:mx-20">
      <div className="h-[400px] w-1/2 flex animate-pulse ">
        <div className="flex flex-col">{components}</div>
        <div className="flex items-center justify-center bg-gray-300 mx-4  mt-7 h-[372px] w-[400px] rounded-md">
          <svg
            className="w-10 h-10  dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
      </div>
      <div className="h-[400px] w-1/2 mt-8 animate-pulse">
        <div className="flex gap-x-4">
          <div className="w-16 h-3 rounded-md bg-slate-300 "></div>
          <div className="w-16 h-3 rounded-md bg-slate-300 "></div>
        </div>
        <div className="w-44 h-4 rounded-md my-4 bg-slate-300 "></div>
        <div className="w-4/5 h-2 rounded-md bg-slate-300 "></div>
        <div className="w-4/5 h-2 my-2 rounded-md bg-slate-300 "></div>
        <div className="w-44 h-6 rounded-md my-4 bg-slate-300 "></div>
        <div className="w-16 h-3 rounded-md my-4 bg-slate-300 "></div>
        <div className="flex gap-x-2 my-4">
          <div className="w-8 h-8 rounded-full  bg-slate-300 "></div>
          <div className="w-8 h-8 rounded-full bg-slate-300 "></div>
        </div>
        <div className="w-60 h-6 rounded-md my-4 bg-slate-300 "></div>
        <div className="w-60 h-6 rounded-md my-4 bg-slate-300 "></div>
      </div>
    </div>
  );
};

export default Skeleton;
