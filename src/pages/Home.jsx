import Navbar from "../Components/Navbar/Navbar";
import React, { useContext } from "react";
import { walletContex } from "../App";
import Prices from "../Components/Prices";

export default function Home() {
  const { user, dispatch } = useContext(walletContex);
 
  return (
    <div>
      <Navbar />
      <div className=" mx-auto rounded-[5px] bg-white max-w-[500px] mt-[110px] p-[20px]">
        <h2 className="text-center text-[25px] font-[600]">Balance</h2>
        <h3 className="text-center text-[25px] font-[500]">{user.balance} $</h3>
      </div>
      <Prices/>
    </div>
  );
}
