import React from "react";

const Header = ({ heading }) => {
  return (
    <div>
      <h1 className="text-center mb-5 pb-2 text-xl font-bold border-b-2 rounded-lg border-green-700">
        {heading}
      </h1>
    </div>
  );
};

export default Header;
