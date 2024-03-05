import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const ModelContainer = ({ setShowModel }) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  return ReactDOM.createPortal(
    <div>
      <div
        className="fixed top-0 left-0  w-full h-screen bg-gray-400 opacity-75"
        onClick={() => setShowModel(false)}
      ></div>
      <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  bg-green-800 text-white p-5  w-[30rem] mt-5 ">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eaque
          nam dolorum natus architecto quod optio voluptatum, laborum quaerat
          corporis.
        </p>
        <button
          className="bg-gray-800 text-white text-xl p-2 mt-5"
          onClick={() => setShowModel(false)}
        >
          Accept
        </button>
      </div>
    </div>,
    document.querySelector(".model")
  );
};

export default ModelContainer;
