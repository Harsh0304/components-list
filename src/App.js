import React from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Model from "./components/Model";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";

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
    <>
      <h2 className="text-green-700 bg-gray-900 pl-5 text-xl py-4 uppercase  w-[13rem]  shadow-xl">
        Component <span className="text-white">List</span>
      </h2>
      <div className="flex">
        <Sidebar />
        <div className="w-[85%] mx-auto flex justify-center mt-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/accordion" element={<Accordion data={data} />} />
            <Route
              path="/dropdown"
              element={<Dropdown dropDownData={dropDownData} />}
            />
            <Route path="/model" element={<Model />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
