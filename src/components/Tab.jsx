import React, { useEffect, useState } from "react";

const Tab = ({ opt1, opt2, tabChange }) => {
  const [activeTab, setActiveTab] = useState(opt2);

  // useEffect(() => {
  //   localStorage.setItem("Activetab", activeTab);
  // }, [activeTab]);
  let isActive = "bg-red-500 border-2 border-white";
  const handleTab = (opt) => {
    setActiveTab(opt);
    tabChange(opt);
    // localStorage.setItem("Activetab", opt);
  };
  return (
    <div className="flex bg-white rounded-full items-center">
      <button
        className={`${
          activeTab == opt1 && isActive
        } text-black px-1 rounded-full w-20 text-center font-bold py-3`}
        onClick={() => {
          handleTab(opt1);
        }}
      >
        {opt1}
      </button>
      <button
        className={`${
          activeTab == opt2 && isActive
        } text-black px-1 rounded-full w-20 text-center font-bold py-3`}
        onClick={() => {
          handleTab(opt2);
        }}
      >
        {opt2}
      </button>
    </div>
  );
};

export default Tab;
