import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";
//dev-n1efgicb.us.auth0.com
//6BqcMMN6nSQJSTM4vGfOTvlnjdJR1YwW
ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-n1efgicb.us.auth0.com"
      clientId="6BqcMMN6nSQJSTM4vGfOTvlnjdJR1YwW"
      redirectUri={window.location.origin}
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
