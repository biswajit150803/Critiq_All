import "./UserLogin.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Landing/Navbar";
import { useStateAuth } from "../context/StateProvider";
const Login = () => {
  const navigate = useNavigate();
  const { walletAddress, walletConnected, connectWallet, companyLogin } =
    useStateAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await companyLogin();
    navigate("/company");
  };

  return (
    <>
      <Navbar />
      <div className=" parent_login_cont">
        <div className="flex flex-col w-[80%] sm:w-[60%] justify-center items-stretch gap-6 md:gap-12 bg-zinc-700 px-4 pt-8 pb-16 rounded-lg">
          <h2 className="text-center font-semibold text-3xl">Welcome Back</h2>
          <form onSubmit={handleSubmit}>
            {!walletConnected ? (
              <div className="flex flex-col items-center gap-4">
                <p className="text-center">
                  Please connect your wallet first to sign in to your account
                </p>

                <button
                  type="button"
                  className="bg-gray-900 p-2 rounded-md w-1/2"
                  onClick={connectWallet}
                >
                  Connect Wallet
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-4">
                <p className="text-green-400 text-center">
                  Connected wallet : {walletAddress.slice(0, 10)}...
                </p>
                <button
                  type="submit"
                  className="bg-gray-900 p-2 px-4 rounded-md mt-4"
                  disabled={!walletConnected}
                >
                  Login
                </button>
              </div>
            )}
          </form>
          <p className="text-center">
            Don&apos;t have an account yet?{" "}
            <Link to="/company/register" className="border-b text-nowrap">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
