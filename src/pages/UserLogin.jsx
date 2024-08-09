import "./UserLogin.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Landing/Navbar";
import { useStateAuth } from "../context/StateProvider";

function WalletIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  );
}
const UserLogin = () => {
  const navigate = useNavigate();
  const { walletAddress, walletConnected, connectWallet, userLogin } =
    useStateAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await userLogin();
    navigate("/home");
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center ">
        <div className="w-[80%] sm:w-[60%] px-4 md:px-12 py-8 flex flex-col gap-6  md:gap-12 bg-zinc-700 rounded-lg text-center items-stretch">
          <h2 className="text-3xl font-semibold">Welcome Back</h2>
          <form className="login-form1" onSubmit={handleSubmit}>
            {!walletConnected ? (
              <div className="flex flex-col items-center gap-2">
                <p>Please connect your wallet first to sign</p>

                <button
                  type="button"
                  className="flex items-center gap-2 bg-zinc-900 rounded-md py-2 px-4"
                  onClick={connectWallet}
                >
                  Connect Wallet <WalletIcon />
                </button>
              </div>
            ) : (
              <div>
                <p className="text-green-400">
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
          <p className="">
            Don&apos;t have an account yet?{" "}
            <Link to="/register" className="text-whote border-b text-nowrap">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>

    // <>
    //   <Card className="bg-[#0c1f32] w-full max-w-md mx-auto">
    //   <CardHeader>
    //     <CardTitle className="text-yellow-50">Welcome back!</CardTitle>
    //     <CardDescription>Please sign in to your account.</CardDescription>
    //   </CardHeader>
    //   <CardContent>
    //     <form className="space-y-4">
    //       <Button variant="outline" className="w-full bg-[#3b74b5]" onClick={(e)=>{e.prevent.default();connectWallet();}}>
    //         <WalletIcon className="mr-2 h-4 w-4 " />
    //         Connect Wallet
    //       </Button>
    //       <div className="flex flex-col items-center justify-center text-yellow-50">
    //       <div className="wallet-message">{walletAddress}</div>
    //         <p className="text-sm text-muted-foreground">
    //           Don&apos;t have an account yet?{" "}
    //           <Link href="#" className="font-medium underline" prefetch={false}>
    //             Sign up
    //           </Link>
    //         </p>
    //         <Button type="submit" className="bg-[#215188] ml-auto" onClick={(e)=>{
    //           e.prevent.default();
    //           handleSubmit();}} disabled={!walletConnected}>
    //           Sign in
    //         </Button>
    //       </div>
    //     </form>
    //   </CardContent>
    // </Card>
    // </>
    // </div>
  );
};

export default UserLogin;
