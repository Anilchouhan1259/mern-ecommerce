import { useSelector, useDispatch } from "react-redux";
import { setIsNavBtnClicked } from "../../store/slices/profileSlice";
const NavButton = ({ handleClick }) => {
  const dispatch = useDispatch();
  const isNavBtnClicked = useSelector((state) => {
    return state.profile.isNavBtnClicked;
  });

  const isClicked = () => {
    dispatch(setIsNavBtnClicked(!isNavBtnClicked));
  };
  const hamburegerline = `h-1 w-6 my-0.5 rounded-full bg-black transition ease`;
  return (
    <button
      className="h-8 w-8 flex flex-col border-2 border-white rounded-md justify-center items-center group"
      onClick={isClicked}
    >
      <span
        className={`${hamburegerline}${
          isNavBtnClicked
            ? "transform duration-300 rotate-45 translate-y-2 group-hover:opacity-100"
            : "group-hover:opacity-100"
        }`}
      ></span>
      <span
        className={`${hamburegerline} ${
          isNavBtnClicked ? "opacity-0" : "group-hover:opacity-100"
        }`}
      ></span>
      <span
        className={`${hamburegerline}${
          isNavBtnClicked
            ? "transform duration-300 -rotate-45 -translate-y-2"
            : "opacity-50 group-hover:opacity-100"
        }`}
      ></span>
    </button>
  );
};

export default NavButton;
