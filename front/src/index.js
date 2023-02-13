import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {values} from "mobx";
import {BrowserRouter} from "react-router-dom";

export const Context = React.createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Context.Provider value={{
        // user: new UserStore(),
        // item: new ItemStore(),
      }}>
        <App />
      </Context.Provider>
    </BrowserRouter>
  </React.StrictMode>
);

