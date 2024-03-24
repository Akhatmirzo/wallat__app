import React from "react";

export default function PrimaryBtn({ btnText, btnFunction }) {
  return (
    <button className="p-[8px_16px] rounded-[100px] bg-[linear-gradient(-86.49deg,_rgb(0,_20,_255)_-5.974%,rgb(128,_32,_239)_50.888%,rgb(255,_44,_223)_107.751%)] transition-transform transform hover:scale-110 ">
      <span className="text-white livvic-semibold">{btnText || "Button"}</span>
    </button>
  );
}
