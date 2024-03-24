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

const walletContex = createContext();
function App() {
  const URL = "https://crudcrud.com/api/c5934770143f464d949f1923b0cc2a3b/user";

  const ACTIONS = {
    setData: "setData",
  };

  const [user, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case ACTIONS.setData:
        return{...action.data, url: URL  };

      default:
        return state;
    }
  }, {});
  
  async function getUser() {
    try {
      const res = await axios(URL);
      dispatch({ type: ACTIONS.setData, data: res.data[res.data.length-1] });
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getUser();
  }, []);
  // const obj = {
  //   name: "john",
  //   balance: 1000,
  // };
  //   async function postUser() {
  //     const res = await axios.post(URL, obj);

  //   }
  // postUser()

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
