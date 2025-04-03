"use client";

import React, { useState } from "react";

type TabsProps = {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
};

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex space-x-1 rounded-xl bg-gray-100 p-1 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 rounded-lg text-sm font-medium ${
            activeTab === tab
              ? "bg-white shadow-sm text-black"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
