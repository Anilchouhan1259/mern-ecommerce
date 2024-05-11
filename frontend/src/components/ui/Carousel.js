import { useState } from "react";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

const Carousel = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0);
  function nextSlide() {
    setImageIndex((index) => {
      console.log(index);
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }
  function prevSlide() {
    setImageIndex((index) => {
      console.log(index);
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  }
  return (
    <div className="relative flex ">
      <div className="hidden md:block">
        <div className="flex flex-col ">
          {images.map((elem, ind) => {
            if (ind === imageIndex) {
              return (
                <div
                  key={ind}
                  className={`relative w-[80px] h-[80px] ${
                    ind !== 0 ? "mt-7" : ""
                  }`}
                >
                  <img src={elem} className="object-cover w-full h-full"></img>
                  <div className="absolute top-0 h-[80px] w-[80px] bg-gray-700 opacity-80"></div>
                </div>
              );
            }
            return (
              <div
                key={ind}
                className={`w-[80px] h-[80px] ${ind !== 0 ? "mt-7" : ""}`}
              >
                <img src={elem} className="object-cover w-full h-full"></img>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full h-[400px] ">
        <img
          src={images[imageIndex]}
          className="object-contain w-full h-full"
        ></img>
      </div>
      <button className="absolute top-[50%] left-36" onClick={prevSlide}>
        <IoIosArrowDropleftCircle size={22} />
      </button>
      <button className="absolute top-[50%] right-16" onClick={nextSlide}>
        <IoIosArrowDroprightCircle size={22} />
      </button>
    </div>
  );
};

export default Carousel;
