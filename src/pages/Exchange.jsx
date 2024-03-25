import React, { useContext, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { TEInput } from "tw-elements-react";
import PrimaryBtn from "../Components/Buttons/PrimaryBtn";
import { toast } from "react-toastify";
import { walletContex } from "../App";
import { async } from "q";
import axios from "axios";

export default function Exchange() {
  const { user, dispatch } = useContext(walletContex);
  const [card, setCard] = useState({
    Name: ".............",
    CardNumber: "---- ---- ---- ----",
    CVC: "···",
    Exp: "--/--",
    pay: "",
  });

  let [testDebit, setTestDebit] = useState({
    cardNumber: false,
    exp: false,
    cvc: false,
    pay: false,
  });

  function formatCardNumber(num) {
    return num.replace(/\d{4}(?=(\d{4})+$)/g, "$& ");
  }

  const handleInputValues = (e) => {
    if (e.target.name === "CardNumber") {
      if (!e.target.value.includes("-"))
        setTestDebit({ ...testDebit, cardNumber: true });
      else setTestDebit({ ...testDebit, cardNumber: false });

      let cardFormat = formatCardNumber(e.target.value);
      setCard({ ...card, [e.target.name]: cardFormat });
    } else if (e.target.name === "Exp") {
      if (!e.target.value.includes("-"))
        setTestDebit({ ...testDebit, exp: true });
      else setTestDebit({ ...testDebit, exp: false });

      let newExp = e.target.value.replace(/^(\d{2})(\d{2})$/, "$1/$2");
      setCard({ ...card, [e.target.name]: newExp });
    } else if (e.target.name === "pay") {
      if (e.target.value) setTestDebit({ ...testDebit, pay: true });
      else setTestDebit({ ...testDebit, pay: false });

      setCard({ ...card, [e.target.name]: e.target.value });
    } else {
      setCard({ ...card, [e.target.name]: e.target.value });
    }

    if (e.target.name === "CVC") {
      if (!e.target.value.includes("."))
        setTestDebit({ ...testDebit, cvc: true });
      else setTestDebit({ ...testDebit, cvc: false });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!testDebit.cardNumber) {
      toast.error("Please enter a card number");
    }
    if (card.CardNumber.length !== 19) {
      toast.error("Card number must be at least 16 characters");
    }
    if (!testDebit.exp) {
      toast.error("Please enter an expiration date");
    }
    if (card.Exp.length !== 5) {
      toast.error("Expiry must be at least 4 characters");
    }
    if (!testDebit.cvc) {
      toast.error("Please enter a CVC");
    }
    if (card.CVC.length !== 3) {
      toast.error("CVC must be at least 3 characters");
    }
    if (!testDebit.pay) {
      toast.error("Please enter a payment amount");
    }

    if (
      testDebit.cardNumber &&
      testDebit.exp &&
      testDebit.cvc &&
      testDebit.pay
    ) {
      try {
        const response = await axios.put(`${user.url}/${user._id}`, {
          balance: user.balance + +card.pay,
        });

        if (!response.status === 200) {
          throw new Error(response.statusText);
        }

        dispatch({ type: "update" });
        toast.success("Transaction Successful");

        e.target.reset();
        setCard({
          Name: ".............",
          CardNumber: "---- ---- ---- ----",
          CVC: "···",
          Exp: "--/--",
          pay: "",
        });
      } catch (error) {
        toast.error("Transaction Failed");
        console.log(error);
      }
    }
  };
  return (
    <>
      <Navbar />
      {/* Depozit */}
      <div className="max-w-[1024px] mx-auto mt-20">
        <h1>Depozit</h1>

        <div>
          <div className="w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">
            <img
              className="relative object-cover w-full h-full rounded-xl"
              src="https://i.imgur.com/kGkSg1v.png"
              alt=""
            />

            <div className="w-full px-8 absolute top-8">
              <div className="flex justify-between">
                <div className="">
                  <p className="font-light">Name</p>
                  <p className="font-medium tracking-widest">{card.Name}</p>
                </div>
                <img
                  className="w-14 h-14"
                  src="https://i.imgur.com/bbPHJVe.png"
                  alt=""
                />
              </div>
              <div className="pt-1">
                <p className="font-light">Card Number</p>
                <p className="font-medium tracking-more-wider tracking-[5px]">
                  {card.CardNumber}
                </p>
              </div>
              <div className="pt-6 pr-6">
                <div className="flex justify-between">
                  <div className="">
                    <p className="font-light text-xs">Expiry</p>
                    <p className="font-medium tracking-wider text-sm">
                      {card.Exp}
                    </p>
                  </div>

                  <div className="">
                    <p className="font-light text-xs">CVV</p>
                    <p className="font-bold tracking-more-wider text-sm">
                      {card.CVC}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-4">
          <TEInput
            type="text"
            id="exampleFormControlInputText"
            label="Debit Card Name"
            name="Name"
            className="text-white"
            onChange={handleInputValues}
            required
            maxLength={25}
          ></TEInput>

          <TEInput
            type="text"
            id="exampleFormControlInputText"
            label="Debit Card Number"
            name="CardNumber"
            className={`text-white `}
            onChange={handleInputValues}
            onClick={(e) => (e.target.value = "")}
            value={card.CardNumber}
            minLength={18}
            maxLength={18}
          ></TEInput>

          <div className="flex items-center justify-between gap-2">
            <TEInput
              type="text"
              id="exampleFormControlInputText"
              label="MM/YY"
              className="w-[400px] md:w-full text-white"
              name="Exp"
              onChange={handleInputValues}
              onClick={(e) => (e.target.value = "")}
              value={card.Exp}
              maxLength={5}
              minLength={5}
              required
            ></TEInput>

            <TEInput
              type="tel"
              id="exampleFormControlInputText"
              label="Debit Card CVV"
              className="w-[400px] md:w-full text-white"
              name="CVC"
              onChange={handleInputValues}
              onClick={(e) => (e.target.value = "")}
              value={card.CVC}
              maxLength={3}
              minLength={3}
              required
            ></TEInput>
          </div>
          <TEInput
            type="number"
            id="exampleFormControlInputText"
            label="Amount"
            className="w-full md:w-full text-white"
            name="pay"
            onChange={handleInputValues}
            onClick={(e) => (e.target.value = "")}
            value={card.pay}
          ></TEInput>
          <PrimaryBtn btnText={"Depozit"} type={"button"} />
        </form>
      </div>
    </>
  );
}
