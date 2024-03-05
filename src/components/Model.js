import { useState } from "react";
import Header from "./Header";
import ModelContainer from "./ModelContainer";

const Model = () => {
  const [showModel, setShowModel] = useState(false);
  const handleClick = () => {
    setShowModel(!showModel);
  };

  return (
    <div>
      <Header heading="Model" />
      <button
        className="bg-green-800 text-white text-xl p-2"
        onClick={handleClick}
      >
        Show Model
      </button>

      {showModel && (
        <div className="relative">
          <ModelContainer setShowModel={setShowModel} />
        </div>
      )}
    </div>
  );
};

export default Model;
