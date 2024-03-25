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
  };

  const [user, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case ACTIONS.setData:
        return{...action.data, url: URL  };
      case ACTIONS.update:
        getUser(URL);
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
