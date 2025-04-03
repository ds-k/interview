"use client";

import React from "react";

type SubTabsProps = {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
};

const SubTabs: React.FC<SubTabsProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-3 py-1 rounded-md text-sm font-medium ${
            activeTab === tab
              ? "bg-blue-100 border border-blue-500 text-blue-700"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default SubTabs;
