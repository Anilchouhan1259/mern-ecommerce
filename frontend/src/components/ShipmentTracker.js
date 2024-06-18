import React from "react";

const ShipmentTracker = ({ currentStage }) => {
  const stages = ["Order confirmed", "Shipped", "Delivery pending"];
  const currentIndex = stages.indexOf("Delivery pending");

  return (
    <div className="mt-8 w-full items-center ">
      <div className="flex justify-between">
        {stages.map((stage, index) => (
          <div className="flex items-center w-full " key={index}>
            <div className="w-[180px] flex flex-col items-center">
              <div
                className={` flex items-center justify-center w-6 h-6 border-2 rounded-full ${
                  index <= currentIndex
                    ? "bg-green-500 border-green-500"
                    : "border-gray-300"
                }`}
              >
                {index <= currentIndex && (
                  <span className=" text-white">✓</span>
                )}
              </div>
              <div>
                <div className="w-full ml-2 mr-4 text-sm font-medium whitespace-nowrap">
                  {stage}
                </div>
              </div>
            </div>
            {index < stages.length - 1 && (
              <div
                className={`w-full h-0.5 ${
                  index < currentIndex ? "bg-green-500" : "bg-gray-300"
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default ShipmentTracker;
