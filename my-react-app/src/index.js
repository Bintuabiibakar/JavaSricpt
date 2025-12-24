import React from "react";
import ReactDOM from "react-dom/client";

import Greeting from "./Greeting";
import Counter from "./Counter";
import MyPureComponent from "./MyPureComponent";
import MyComponentPage from "./MyComponentPage";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Greeting name="Alice" />
    <Counter />
    <MyPureComponent name="Alice" />
    <MyComponentPage name="aliice" />
  </React.StrictMode>
);
