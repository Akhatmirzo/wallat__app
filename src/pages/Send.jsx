import React, { useState, useContext } from "react";
import { TEInput } from "tw-elements-react";

import SendBtn from "../Components/Buttons/SendBtn";
import Navbar from "../Components/Navbar/Navbar";
import axios from "axios";
import { walletContex } from "../App";
import { toast } from "react-toastify";

export default function Send() {
  const { user, dispatch } = useContext(walletContex);

  const [inputValue, setinput] = useState({
    adres: "",
    price: "",
  });

  async function getLink(url, price, userBasicBalance) {
    const res = await axios.post(url, { balance: +price + userBasicBalance });
    console.log(res);
  }

  async function submitBalance(e) {
    e.preventDefault();
    try {
      const res = await axios(inputValue.adres);

      if (user.balance >= inputValue.price) {
        const sendUser = res.data[res.data.length - 1]
        getLink(inputValue.adres, inputValue.price, sendUser.balance)
        const balance = user.balance - +inputValue.price
        console.log(balance);
        await axios.post(user.url,{balance: balance})
        dispatch({ type: "update"});
      }

      setinput({ adres: "", price: "" });
    } catch (error) {
      console.log(error);
    }
  }

  function handleinputvalue(e) {
    setinput({ ...inputValue, [e.target.name]: e.target.value });
  }
  return (
    <>
      <Navbar />
      <div className="max-w-[500px] mx-auto">
        <div className="w-full h-screen flex flex-col justify-center gap-8">
          <h2 className="text-white text-4xl">Send</h2>

          <form className="flex flex-col gap-5" onSubmit={submitBalance}>
            <TEInput
              className="text-white"
              type="url"
              id="exampleFormControlInputText"
              label="Wallet Address"
              onChange={handleinputvalue}
              value={inputValue.adres}
              name="adres"
              required
            ></TEInput>
            <TEInput
              className="text-white"
              type="number"
              id="exampleFormControlInputText"
              label="Amount"
              onChange={handleinputvalue}
              value={inputValue.price}
              name="price"
              required
            ></TEInput>

            <SendBtn btnText={"Send"} type={"button"} />
          </form>
        </div>
      </div>
    </>
  );
}
