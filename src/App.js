import React from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";

const App = () => {
  const data = [
    {
      id: 1,
      title: "Q(1) - What is React?",
      content: "React is a JavaScript library for building user interfaces.",
    },
    {
      id: 2,
      title: "Q(2) - Why use React?",
      content:
        "React is popular because it makes building user interfaces easy and efficient.",
    },
    {
      id: 3,
      title: "Q(3) - How do I get started with React?",
      content:
        "You can get started with React by installing the React package and creating a React application.",
    },
    {
      id: 4,
      title: "Q(4) - What are the key features of React?",
      content:
        "React has a declarative API, a component-based architecture, and a virtual DOM for efficient rendering.",
    },
  ];
  const dropDownData = [
    {
      id: 1,
      title: "Apple",
    },
    {
      id: 2,
      title: "Banana",
    },
    {
      id: 3,
      title: "Orange",
    },
  ];
  return (
    <div className="w-[85%] mx-auto flex justify-center mt-5">
      {/* <Accordion data={data} /> */}
      <Dropdown dropDownData={dropDownData} />
    </div>
  );
};

export default App;
