import { Route, Routes } from "react-router-dom";
import { useReducer, createContext, useEffect } from "react";

import "./App.css";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Balance from "./pages/Balance";
import Exchange from "./pages/Exchange";
import axios from "axios";
import Send from "./pages/Send";
import Receive from "./pages/Receive";
import { toast } from "react-toastify";

const walletContex = createContext();
function App() {

  const URL = "https://crudcrud.com/api/9cbec30723ec4d5bb2967975c601c5c6/user";


  const ACTIONS = {
    setData: "setData",
    update: "update",
    send: "send",
  };

  const [user, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case ACTIONS.setData:
        return{...action.data, url: URL  };
      case ACTIONS.update:
        getUser();
        return state;
      case ACTIONS.send:
        const { sendUrl, sendAmount } = action.payload;
        sendMoney(sendUrl, sendAmount);
        return state;

      default:
        return state;
    }
  }, {});
  
  async function getUser(url) {
    try {
      const res = await axios(url);
      dispatch({ type: ACTIONS.setData, data: res.data[res.data.length-1] });
      return res;
    } catch (err) {
      console.log(err);
    }
  }

  async function sendMoney(sendUrl, amount) {
    try {
      const getRes = await axios(sendUrl);
      if (!getRes.status === 200) {
        throw new Error(getRes.statusText);
      }

      if (getRes?.data) {
        const res = await axios.put(sendUrl, { ...getRes.data, balance: getRes.data.balance + amount });
        if (!res.status === 200) {
          toast.error("Error sending");
          throw new Error(res.statusText);
        }

        const myData = await getUser(URL);
        await axios.put(URL, { ...myData.data, balance: myData.data.balance - amount})

        toast.success("Success sending");
      }
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUser(URL);
  }, []);

  return (
    <walletContex.Provider value={{ user, dispatch }}>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/balance" element={<Balance />} />
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/send" element={<Send />} />
        <Route path="/receive" element={<Receive />} />
      </Routes>
    </walletContex.Provider>
  );
}

export { walletContex };
export default App;
