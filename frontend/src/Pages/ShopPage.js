import { useState } from "react";

import DropDown from "../components/ui/DropDown";
import { useFetchProductsQuery } from "../store/apis/productsApi";
import Card from "../components/Card";

const ShopPage = () => {
  const [shopQuery, setCategory] = useState({
    category: "earbud",
    sort_by: "",
  });
  const { data, isFetching } = useFetchProductsQuery(shopQuery);
  const getCurentCategory = (value) => {
    setCategory((prevState) => ({
      ...prevState, // Spread the previous state
      category: value, // Update the sort_by property
    }));
  };
  const handleChange = (e) => {
    e.preventDefault();
    setCategory((prevState) => ({
      ...prevState, // Spread the previous state
      sort_by: e.target.value, // Update the sort_by property
    }));
  };
  return (
    <div className="mx-20">
      <div className="flex justify-between">
        <div>
          <DropDown handler={getCurentCategory}>Living Room</DropDown>
        </div>
        <div>
          <select
            className="border-2 border-gray-600  p-1 rounded-md"
            onChange={handleChange}
          >
            <option value="" style={{ display: "none" }}>
              Sort by
            </option>
            <option value="low_to_high">Low to high</option>
            <option value="high_to_low">High to low</option>
          </select>
        </div>
      </div>

      {isFetching ? (
        "fetching"
      ) : (
        <div className="gap-x-20 grid grid-cols-5 content-center mt-4">
          {data.map((item) => {
            return <Card key={item._id} item={item} />;
          })}
        </div>
      )}
    </div>
  );
};

export default ShopPage;
