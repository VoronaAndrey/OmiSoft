import React from "react";
import "./App.scss";
import {Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes/Routes";
import store from "./store";


// import FormLogin from "./components/FormLogin/FormLogin";

function App() {

  return (
    <Provider store={store}>
      <Router>
            <Routes />
      </Router>
    </Provider>
  );
}

export default App;
