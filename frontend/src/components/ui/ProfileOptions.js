const ProfileOptions = ({ optionHandler }) => {
  const options = ["Orders", "Account", "Address", "Wishlists"];
  const handleChange = (e) => {
    optionHandler(e.target.value);
  };
  const handleClick = (e) => {
    const value = e.target.getAttribute("data-value");
    optionHandler(value);
  };
  return (
    <div>
      <select
        className="block md:hidden border-2 border-gray-400 w-56 p-1 rounded-md mx-auto"
        onChange={handleChange}
      >
        {options.map((option) => {
          return (
            <option
              value={option}
              className="my-1 mx-1 p-1 font-normal rounded-md text-gray-400 hover:text-black hover:font-semibold hover:bg-gray-200"
            >
              {option}
            </option>
          );
        })}
      </select>
      <div className="hidden md:block ">
        {options.map((option) => {
          return (
            <div
              className="my-4 hover:cursor-pointer"
              data-value={option}
              onClick={handleClick}
            >
              {option}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileOptions;
