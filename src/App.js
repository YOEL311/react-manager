import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import ReduxThunk from "redux-thunk";
import firebase from "firebase";
import Router from "./Router";

export default class App extends Component {
  componentDidMount(): void {
    const config = {
      apiKey: "AIzaSyBUY0w1ACTmZejX-sj4zfr-Mp3JGw-Vlt0",
      authDomain: "react-manager-ee9f5.firebaseapp.com",
      databaseURL: "https://react-manager-ee9f5.firebaseio.com",
      projectId: "react-manager-ee9f5",
      storageBucket: "",
      messagingSenderId: "451681222031",
      appId: "1:451681222031:web:1bd830159b3a2dad"
    };
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
