import { toast } from "react-toastify";
import React, { useRef, useContext } from "react";
import copy from "copy-to-clipboard";
import Navbar from "../Components/Navbar/Navbar";
import { walletContex } from "../App";

export default function Receive() {
  const { user, dispatch } = useContext(walletContex);
  const textRef = useRef();

  const copyToClipboard = () => {
    let copyText = textRef.current.value;
    let isCopy;
    if (copyText) {
      isCopy = copy(copyText, {
        debug: true,
        message: "Press #{key} to copy",
      });
    }

    if (isCopy) {
      toast.success("Copied to Clipboard");
    }else {
      toast.error("Failed to copy");
    }
  };
  return (
    <>
      <Navbar />
      <div className="max-w-[800px] mx-auto">
        <div className="w-full h-screen flex flex-col justify-center">
        <h2 className="text-white text-center text-[40px] mb-[10px]">Adoption</h2>
          <div className="relative">
            
            <label htmlFor="npm-install-copy-button" className="sr-only">
              Label
            </label>
            <input
              id="npm-install-copy-button"
              type="text"
              className="h-[60px] col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={user.url}
              ref={textRef}
              disabled
            />
            <button
              onClick={copyToClipboard}
              className="absolute end-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2 inline-flex items-center justify-center"
            >
              <span id="default-icon">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
