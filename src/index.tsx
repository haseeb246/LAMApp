import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { WrapRootElement } from "./wrapRootElement";
import "animate.css";
import { BrowserRouter } from "react-router-dom";

{
  /* <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
/>
<link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css" rel="stylesheet" media="all">

</link> */
}

ReactDOM.render(
  <React.StrictMode>
    {/* <WrapRootElement> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </WrapRootElement> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
