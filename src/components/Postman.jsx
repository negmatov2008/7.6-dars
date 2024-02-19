import React from "react";
import Tab from "./Tab";
import Response from "./Response";
const options = [
  {
    text: "Get",
    color: "text-green-500",
  },
  {
    text: "Post",
    color: "text-yellow-600",
  },
  {
    text: "Put",
    color: "text-blue-400",
  },
  {
    text: "Delate",
    color: "text-red-400",
  },
];

function Postman() {
  return (
    <div className="p-6">
      <input
        type="text"
        className="font-semibold pl-1 text-lg bg-inherit text-inhirit"
        defaultValue={"New Requist"}
      />
      <form className="mt-8 max-w-full flex gap-2 border items-center rounded-md">
        <select className="bg-white  p-2 pr-2 flex gap-2 text-inherit text-lg   font-semibold cursor-pointer ">
          {options.map((op, i) => (
            <option
              key={i}
              className={`bg-white text-lg cursor-pointer font-semibold ${op.color} `}
              value="car"
            >
              {op.text}
            </option>
          ))}
        </select>
        <div className="h-[35px] flex justify-center  w-[1px] bg-stone-400"></div>
        <input
          type="text"
          placeholder="Enter URL or paste text"
          className="bg-white text-xl pl-2 flex h-[46px]  flex-1"
        />
        <button className="btn btn-primary text-white px-6  border border-blue-400">
          send
        </button>
      </form>
      <Tab />
      <Response />
    </div>
  );
}

export default Postman;
