import { useState, useEffect } from "react";
import { RouterProtocol } from ".";
import RouterMainnet from "./RouterMainnet";
import { Switch } from "../../components/ui/switch";

const Router = () => {
  const [network, setNetwork] = useState(1);
  // 1 -> testnet
  // 0 -> mainnet

  const handleNetworkChange = () => {
    setNetwork((prevNetwork) => (prevNetwork === 1 ? 0 : 1));
  };

  useEffect(() => {
    console.log("Network changed to:", network);
  }, [network]);

  return (
    <div>
      <div className="w-[80vw] text-gray-300 flex justify-center my-5">
        <div className="flex font-semibold text-gray-200 justify-center items-center px-3 py-2 bg-[#22222c] rounded-md">
          <span
            className={`mr-4 px-3 py-1 rounded-md ${
              network === 1 ? "bg-gray-400 text-black" : ""
            } `}
          >
            TestNet
          </span>
          <Switch onCheckedChange={handleNetworkChange} />

          <span
            className={`ml-4 px-3 py-1 rounded-md ${
              network === 0 ? "bg-gray-300 text-black" : ""
            } `}
          >
            MainNet
          </span>
        </div>
      </div>
      {network === 1 ? <RouterProtocol /> : <RouterMainnet />}
    </div>
  );
};

export default Router;
