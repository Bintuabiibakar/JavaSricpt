import React from "react";
import Greeting from "./Greeting";
import Counter from "./Counter";
import MyComponentPage from "./MyComponentPage";
import MyPureComponent from "./MyPureComponent";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>React Components </h1>

      <hr />
      <Greeting name="Alice" />

      <hr />
      <Counter />

      <hr />
      <MyComponentPage />

      <hr />
      <MyPureComponent name="Pure Component Example" />
    </div>
  );
}

export default App;

