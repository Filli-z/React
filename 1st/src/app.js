import React from "react";
import { createRoot } from "react-dom/client";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna 1",
      animal: "dog 1",
      breed: "Havanese 1",
    }),
    React.createElement(Pet, {
      name: "Luna 2",
      animal: "dog 2",
      breed: "Havanese 2",
    }),
    React.createElement(Pet, {
      name: "Luna 3",
      animal: "dog 3",
      breed: "Havanese 3",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
