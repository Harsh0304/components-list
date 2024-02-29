import { useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
const Accordion = ({ data }) => {
  const [activeItem, setActiveItem] = useState(-1);

  const handleClick = (index) => {
    setActiveItem(index === activeItem ? -1 : index);
  };
  return (
    <div>
      <h1 className="text-center mb-5 pb-2 text-xl font-bold border-b-2 rounded-lg border-green-700">
        Accordion
      </h1>
      {data.map((item, index) => {
        return (
          <div className="flex flex-col w-[416px]" key={item.id}>
            <div className="bg-green-700 mt-5 pl-4 py-3 text-white ">
              <div
                className="flex justify-between pr-9 cursor-pointer"
                onClick={() => handleClick(index)}
              >
                <h2 className="text-[16px] mb-3">{item.title}</h2>
                {activeItem === index ? (
                  <FaAngleDown className="text-[18px]" />
                ) : (
                  <FaAngleRight className="text-[18px]" />
                )}
              </div>
              {activeItem === index && (
                <p className="pr-2 w-[400px]">{item.content}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Accordion;
