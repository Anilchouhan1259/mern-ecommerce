import { useNavigate } from "react-router-dom";

const LoginRequest = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[300px] w-[300px] rounded-md bg-gray-300 flex flex-col justify-center items-center space-y-4 mx-auto">
      <p className="text-md font-semibold">
        Please Login first To use This Feature
      </p>
      <button
        className="px-2 py-1  rounded-md text-white bg-blue-600 hover:bg-blue-800"
        onClick={() => navigate("/login")}
      >
        Login
      </button>
    </div>
  );
};

export default LoginRequest;
