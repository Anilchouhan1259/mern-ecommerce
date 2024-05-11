import { FiSearch } from "react-icons/fi";
const SearchBar = () => {
  return (
    <div className="w-full border-black border-[1px] mx-auto rounded-md my-4 text-black ">
      <form className="flex items-center rounded-2xl ">
        <div>
          <button className="h-full  border-black border-r-[1px]  p-3">
            <FiSearch />
          </button>
        </div>
        <input
          className="bg-transparent flex-1 py-2 placeholder:text-black placeholder:px-6 "
          placeholder="Search Movie"
        />
      </form>
    </div>
  );
};

export default SearchBar;
