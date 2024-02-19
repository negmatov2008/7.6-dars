import React from "react";
import { useDispatch } from "react-redux";

function Left() {
  const dispatch = useDispatch();
  const hanleClick = () => {
    
  };
  return (
    <div
      
      className="p-4 bg-gray-200 h-full  border-r border-r-stone-400"
    >
      <button onClick={hanleClick} className="text-3xl  font-bold text-slate-700 ">+</button>
      <div id="Requires" className="flex flex-col gap-4 "></div>
    </div>
    
  );
}

export default Left;
