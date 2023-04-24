import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {values} from "mobx";
import {BrowserRouter, HashRouter} from "react-router-dom";
import ItemStore from "./store/ItemStore";

export const Context = React.createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Context.Provider value={{
        // user: new UserStore(),
        item: new ItemStore(),
      }}>
        <App />
      </Context.Provider>
    </HashRouter>
  </React.StrictMode>
);

