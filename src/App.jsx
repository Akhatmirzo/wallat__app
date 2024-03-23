import { Route, Routes } from "react-router-dom";
import { useReducer, createContext, useEffect } from "react";

import "./App.css";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Balance from "./pages/Balance";
import Exchange from "./pages/Exchange";
import axios from "axios";

const walletContex = createContext();
function App() {
  const URL = "https://crudcrud.com/api/6cd6baa154144749ac97e615efe51724/user";

  const ACTIONS = {
    getData: "getData",
  };

  const [user, dispatch] = useReducer(async (state, action) => {
    switch (action.type) {
      case "getData":
        const response = await axios.get(URL);
        console.log(response.data);
        return response.data;
      default:
        return state;
    }
  }, {});

  return (
    <walletContex.Provider value={{ user, dispatch }}>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/balance" element={<Balance />} />
        <Route path="/exchange" element={<Exchange />} />
      </Routes>
    </walletContex.Provider>
  );
}

export { walletContex };
export default App;
