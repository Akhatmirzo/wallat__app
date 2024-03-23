import React from "react";
import "./scss/Home.scss";
import Navbar from "../components/Navbar/Navbar";
export default function Home() {
  return (
    <div>
      <Navbar />
      <div className=" mx-auto rounded-[5px] bg-white max-w-[500px] mt-[110px] p-[20px]">
        <h2 className="text-center text-[25px] font-[600]">Balance</h2>
        <h3 className="text-center text-[25px] font-[500]">34213221231 $</h3>
      </div>
    </div>
  );
}
