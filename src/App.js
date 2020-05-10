import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", { id: "hello" }, [
    React.createElement("h1", {}, "Adopt me!"),
    React.createElement(Pet, {
      name: "Honey",
      type: "Dog",
      colour: "Black",
    }),
    React.createElement(Pet, {
      name: "Bob",
      type: "Cat",
      colour: "White",
    }),
    React.createElement(Pet, {
      name: "Lol",
      type: "Thing",
      colour: "Rainbow",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
