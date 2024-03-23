import "./App.css";
import { useReducer, createContext, useEffect } from "react";
import PrimaryBtn from "./components/Buttons/PrimaryBtn";

const walletContex = createContext();
function App() {
  const URL = "https://crudcrud.com/api/6cd6baa154144749ac97e615efe51724";

  const ACTIONS = {
    getData: "getData",
  };

  const [user, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "getData":
        return state;
    }
  }, {});

  useEffect(() => {}, []);

  return (
    <walletContex.Provider value={{ user, dispatch }}>
      <PrimaryBtn />
    </walletContex.Provider>
  );
}

export default App;
