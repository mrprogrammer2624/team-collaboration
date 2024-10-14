import { createContext, useContext, useState } from "react";
import { RouterProvider } from "react-router-dom";
import TeamCollaborationRoute from "./routes";
import ToasterProvider from "./providers/ToasterProvider";
import { Provider } from "react-redux";
import { store } from "./store";
import "./assets/css/style.css";

export const HeaderTextContext = createContext();

function App() {
  const [headerText, setHeaderText] = useState("");
  return (
    <HeaderTextContext.Provider value={{ headerText, setHeaderText }}>
      <Provider store={store}>
        <RouterProvider router={TeamCollaborationRoute} />
      </Provider>
      <ToasterProvider />
    </HeaderTextContext.Provider>
  );
}

export const useTitle = () => {
  return useContext(HeaderTextContext);
};

export default App;
