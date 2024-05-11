import { useState } from "react";

import DropDown from "../components/ui/DropDown";
import { useFetchProductsQuery } from "../store/apis/productsApi";
import Card from "../components/Card";

const ShopPage = () => {
  const [category, setCategory] = useState("earbud");
  const { data, isFetching } = useFetchProductsQuery(category);
  const getCurentCategory = (value) => {
    setCategory(value);
  };

  return (
    <div className="mx-20">
      <div>
        <DropDown handler={getCurentCategory}>Living Room</DropDown>
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
