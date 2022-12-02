import React  from "react";
const Person = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", [], props.name),
    React.createElement("p", [], props.occupation),
  ]);
};
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", 
    { className: "title" }, "React is rendered"),

    React.createElement(Person, 
        { name: "aman", occupation: "barber" }, "null"),

    React.createElement(
      Person,
      { name: "raja", occupation: "barber2" },
      "null"
    ),
  ]);
};
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
