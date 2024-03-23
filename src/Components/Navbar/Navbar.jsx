import React from "react";
import { Link } from "react-router-dom";
import SendBtn from "../Buttons/SendBtn";
import PrimaryBtn from "../Buttons/PrimaryBtn";
export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 max-w-[1200px]">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse text-decoration-none "
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Wallet
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link to="/Exchange">
            <PrimaryBtn btnText={"Exchange"} />
          </Link>

          <Link to="/receive">
            <PrimaryBtn btnText={"receive"} />
          </Link>

          <Link to={"/send"}>
            <PrimaryBtn btnText={"Send"} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
