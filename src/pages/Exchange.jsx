import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { TEInput } from "tw-elements-react";

export default function Exchange() {
  const [card, setCard] = useState({
    Name: ".............",
    CardNumber: "---- ---- ---- ----",
    CVC: "···",
    Exp: "--/--",
  });

  const handleInputValues = (e) => {
    setCard({ ...card, [e.target.name]: [e.target.value] });
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
                  {
                    card.CardNumber
                  }
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

        <form className="mt-5 flex flex-col gap-4">
          <TEInput
            type="text"
            id="exampleFormControlInputText"
            label="Debit Card Name"
            name="Name"
            className="text-white"
            onChange={handleInputValues}
          ></TEInput>

          <TEInput
            type="text"
            id="exampleFormControlInputText"
            label="Debit Card Number"
            name="CardNumber"
            className="text-white"
            onChange={handleInputValues}
          ></TEInput>

          <div className="flex items-center justify-between gap-2">
            <TEInput
              type="text"
              id="exampleFormControlInputText"
              label="Debit Card Expiry Date"
              className="w-[400px] md:w-full text-white"
              name="Exp"
              onChange={handleInputValues}
            ></TEInput>

            <TEInput
              type="tel"
              id="exampleFormControlInputText"
              label="Debit Card CVV"
              className="w-[400px] md:w-full text-white"
              name="CVC"
              onChange={handleInputValues}
            ></TEInput>
          </div>
        </form>
      </div>
    </>
  );
}
