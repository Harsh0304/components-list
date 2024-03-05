import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";

const Dropdown = ({ dropDownData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Select....");
  const devRef = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!devRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler, true);
    };
  }, []);

  const handleClick = (title) => {
    setSelectedItem(title);
    setIsOpen(false);
  };
  return (
    <div>
      <Header heading="Dropdown" />
      <div ref={devRef} className="flex flex-col gap-1 items-center">
        <h2
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-800 text-white py-2 cursor-pointer rounded-lg text-xl px-14"
        >
          {selectedItem}
        </h2>
        {isOpen && (
          <div className="bg-green-800 text-white py-2 text-xl rounded-lg px-14">
            {dropDownData?.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className="mt-2 cursor-pointer"
                  onClick={() => handleClick(item.title)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
