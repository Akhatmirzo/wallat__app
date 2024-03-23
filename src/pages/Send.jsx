import React from "react";
import { TEInput } from "tw-elements-react";
import SendBtn from "../Components/Buttons/SendBtn";

export default function Send() {
  return (
    <div className="max-w-[500px] mx-auto">
      <div className="w-full h-screen flex flex-col justify-center gap-8">

        <h2 className="text-white text-4xl">Send</h2>

        <form className="flex flex-col gap-5">
          <TEInput
            type="text"
            id="exampleFormControlInputText"
            label="Wallet Address"
          ></TEInput>
          <TEInput
            type="number"
            id="exampleFormControlInputText"
            label="Amount"
          ></TEInput>
          
          <SendBtn btnText={"Send"} type={"button"}/>
        </form>
      </div>
    </div>
  );
}


