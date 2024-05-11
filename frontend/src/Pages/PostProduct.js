import { useState } from "react";
import { useCreateProductMutation } from "../store/apis/productsApi";

import DropDown from "../components/ui/DropDown";

const PostProduct = () => {
  const [createProduct, responseInfo] = useCreateProductMutation();
  const [formData, setFormData] = useState({
    title: "",
    discription: "",
    price: "",
    thumbnail: "",
    category: "",
  });
  const [skus, setSkus] = useState([
    { color: "", quantity: "", images: ["", "", "", ""] },
  ]);
  const handleCategory = (value) => {
    setFormData({ ...formData, category: value });
  };
  const handleSkuChange = (index, event) => {
    const { name, value } = event.target;
    const newSkus = [...skus];
    newSkus[index][name] = value;
    setSkus(newSkus);
  };
  const handleImagesChange = (index, imgInd, event) => {
    const newImages = skus[index].images;
    console.log(newImages);
    newImages[imgInd] = event.target.value;
    const updatedSku = { ...skus[index], images: newImages };
    const finalSkus = skus.map((sku, ind) => {
      if (ind === index) {
        sku = updatedSku;
      }
      return sku;
    });
    setSkus(finalSkus);
    console.log(finalSkus);
  };

  const addSku = () => {
    setSkus([...skus, { color: "", quantity: "", images: ["", "", "", ""] }]);
  };

  const removeSku = (index) => {
    const newSkus = [...skus];
    newSkus.splice(index, 1);
    setSkus(newSkus);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData, skus);
    const obj = { ...formData, sku: skus };
    createProduct(obj);
    console.log(responseInfo);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <div className="flex items-center gap-x-8">
            <DropDown handler={handleCategory} />
            <div className="flex items-center gap-x-4">
              <label
                className="block text-sm font-medium text-black"
                htmlFor="title"
              >
                Title:
              </label>
              <input
                className="h-5 border mt-1 rounded px-4 w-full bg-gray-50"
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
              ></input>
            </div>
            <div className="flex items-center gap-x-8">
              <label
                className="block text-sm font-medium text-black"
                htmlFor="price"
              >
                Price:
              </label>
              <input
                className="h-5 border mt-1 rounded px-4 w-full bg-gray-50"
                type="text"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="flex items-center gap-x-8">
            <label
              className="block text-sm font-medium text-black"
              htmlFor="discription"
            >
              Discription:
            </label>
            <input
              className="h-5 border mt-1 rounded px-4 w-full bg-gray-50"
              type="text"
              id="discription"
              name="discription"
              value={formData.discription}
              onChange={handleChange}
            ></input>
          </div>
          <div className="flex items-center gap-x-8">
            <label
              className="block text-sm font-medium text-black"
              htmlFor="thumbnail"
            >
              Thumbnail:
            </label>
            <input
              className="h-5 border mt-1 rounded px-4 w-full bg-gray-50"
              type="text"
              id="thumbnail"
              name="thumbnail"
              value={formData.thumbnail}
              onChange={handleChange}
            ></input>
          </div>
          <div></div>
          <div>
            {skus.map((sku, index) => (
              <div className="flex flex-col" key={index}>
                <div className="flex gap-x-4 items-center">
                  <div className="flex items-center gap-x-8">
                    <label className="block  text-sm font-medium text-black">
                      color
                    </label>
                    <input
                      type="text"
                      name="color"
                      value={sku.color}
                      onChange={(e) => handleSkuChange(index, e)}
                      className="h-5 border mt-1 rounded px-4 w-full bg-gray-50"
                    />
                  </div>
                  <div className="flex items-center gap-x-8">
                    <label className="block text-sm font-medium text-black">
                      Quantity:
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      value={sku.quantity}
                      onChange={(e) => handleSkuChange(index, e)}
                      className="h-5 border mt-1 rounded px-4 w-full bg-gray-50"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-x-8">
                  <label className="block text-sm font-medium text-black">
                    Image1:
                  </label>
                  <input
                    type="text"
                    name="images1"
                    value={sku.images[0]}
                    onChange={(e) => handleImagesChange(index, 0, e)}
                    className="h-5 border mt-1 rounded px-4 w-1/2 bg-gray-50"
                  />
                </div>
                <div className="flex items-center gap-x-8">
                  <label className="block text-sm font-medium text-black">
                    Image2:
                  </label>
                  <input
                    type="text"
                    name="images2"
                    value={sku.images[1]}
                    onChange={(e) => handleImagesChange(index, 1, e)}
                    className="h-5 border mt-1 rounded px-4 w-1/2 bg-gray-50"
                  />
                </div>
                <div className="flex items-center gap-x-8">
                  <label className="block text-sm font-medium text-black">
                    Image3:
                  </label>
                  <input
                    type="text"
                    name="images2"
                    value={sku.images[2]}
                    onChange={(e) => handleImagesChange(index, 2, e)}
                    className="h-5 border mt-1 rounded px-4 w-1/2 bg-gray-50"
                  />
                </div>
                <div className="flex items-center gap-x-8">
                  <label className="block  text-sm font-medium text-black">
                    Image4:
                  </label>
                  <input
                    type="text"
                    name="images2"
                    value={sku.images[3]}
                    onChange={(e) => handleImagesChange(index, 3, e)}
                    className="h-5 border mt-1 rounded px-4 w-1/2 bg-gray-50"
                  />
                </div>

                {index > 0 && (
                  <button
                    className="w-36 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    type="button"
                    onClick={() => removeSku(index)}
                  >
                    Remove SKU
                  </button>
                )}
              </div>
            ))}
          </div>
          <button
            className="w-36 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            type="button"
            onClick={addSku}
          >
            Add SKU
          </button>
          <button
            className="w-36 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostProduct;
