import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import ReduxThunk from "redux-thunk";
import firebase from "firebase";
import Router from "./Router";
import { config } from "../config";
export default class App extends Component {
  componentDidMount(): void {
    // Initialize Firebase
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(
      reducers,
      { auth: { email: "yoel@gmail.com", password: "zxcvbn" } },
      applyMiddleware(ReduxThunk)
    );
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
