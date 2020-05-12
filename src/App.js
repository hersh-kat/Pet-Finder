import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="something">Adopt me!</h1>
      <Pet name="updoggg" colour="green" type="dog" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
