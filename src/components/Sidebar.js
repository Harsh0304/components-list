import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-900 flex flex-col gap-3  text-white w-[13rem] py-[9rem] shadow-xl ">
      <Link className="bg-green-900 text-white py-4 shadow-xl px-[5rem]" to="/">
        Home
      </Link>
      <Link
        className="bg-green-900 text-white py-4 shadow-xl px-[5rem]"
        to="/accordion"
      >
        Accordion
      </Link>
      <Link
        className="bg-green-900 text-white py-4 shadow-xl px-[5rem]"
        to="/dropdown"
      >
        Dropdown
      </Link>
      <Link
        className="bg-green-900 text-white py-4 shadow-xl px-[5rem]"
        to="/model"
      >
        Model
      </Link>
    </div>
  );
};

export default Sidebar;
