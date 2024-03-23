import React from "react";
import { Link } from "react-router-dom";

export default function SendBtn({ btnText, type }) {
  return type === "button" ? (
    <button class="w-[150px] bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center transition-all">
      <span class="mr-2">{btnText}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentcolor"
          d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
        ></path>
      </svg>
    </button>
  ) : (
    <Link
      to={"/send"}
      class="w-[150px] bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center transition-all"
    >
      <span class="mr-2">{btnText}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentcolor"
          d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
        ></path>
      </svg>
    </Link>
  );
}
