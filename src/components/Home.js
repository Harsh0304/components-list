import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const Home = () => {
  return (
    <div>
      <Header heading="Home" />
      <div className="flex gap-2">
        <Link
          to="accordion"
          className="border-[2px] p-3 shadow-xl hover:border-green-800 hover:text-black bg-green-800 font-semibold text-white hover:bg-transparent "
        >
          Accordion
        </Link>
        <Link
          to="dropdown"
          className="border-[2px] shadow-xl p-3 hover:border-green-800 hover:text-black bg-green-800 font-semibold text-white hover:bg-transparent "
        >
          Dropdown
        </Link>
        <Link
          to="model"
          className="border-[2px] shadow-xl p-3 hover:border-green-800 hover:text-black bg-green-800 font-semibold text-white hover:bg-transparent"
        >
          Model
        </Link>
      </div>
    </div>
  );
};

export default Home;
