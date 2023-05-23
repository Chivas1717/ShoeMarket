import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {values} from "mobx";
import { HashRouter} from "react-router-dom";
import ItemStore from "./store/ItemStore";
import CartStore from "./store/CartStore";
import UserStore from "./store/UserStore";

export const Context = React.createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Context.Provider value={{
        user: new UserStore(),
        item: new ItemStore(),
        cart: new CartStore(),
      }}>
        <App />
      </Context.Provider>
    </HashRouter>
  </React.StrictMode>
);

