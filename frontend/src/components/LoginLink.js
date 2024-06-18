import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { useLogoutMutation } from "../store/apis/usersApi";
import { setIsLogin } from "../store/slices/profileSlice";

const LoginLink = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [postLogout, result] = useLogoutMutation();
  const handleLogout = () => {
    postLogout();
    dispatch(setIsLogin(false));
  };
  const isLogin = useSelector((state) => {
    return state.profile.isLogin;
  });
  const Login = (
    <button
      className="px-2 py-1 w-full rounded-md text-white bg-blue-600 hover:bg-blue-800"
      onClick={() => navigate("/login")}
    >
      Login
    </button>
  );
  const Logout = (
    <button
      className="px-2 py-1 w-full rounded-md text-white bg-blue-600 hover:bg-blue-800"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
  return (
    <div className="order-last md:order-none">{isLogin ? Logout : Login}</div>
  );
};

export default LoginLink;
