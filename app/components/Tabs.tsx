"use client";

import React, { useState } from "react";

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: "All", content: "Content for All" },
    { title: "Wellness", content: "Content for Wellness" },
    { title: "Technology", content: "Content for Technology" },
    { title: "Travel", content: "Content for Travel" },
  ];
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex border-b">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`flex-1 py-2 text-center focus:outline-none ${
              activeTab === index
                ? "border-b-2 border-primaryColor text-primaryColor font-semibold"
                : "text-primaryTextColor hover:text-primaryColor"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
