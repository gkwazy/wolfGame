import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyDxOKjxQSVunza6ysltOpp7vNMXd4ondhE",
  authDomain: "wolfgame-32c27.firebaseapp.com",
  databaseURL: "https://wolfgame-32c27.firebaseio.com",
  projectId: "wolfgame-32c27",
  storageBucket: "wolfgame-32c27.appspot.com",
  messagingSenderId: "569370798366"
};

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
