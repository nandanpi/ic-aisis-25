"use client";

import type React from "react";

interface TabProps {
  tabs: {
    id: string;
    label: string;
    icon?: React.ReactNode;
  }[];
  activeTab: string;
  onChange: (tabId: string) => void;
}

export const Tabs: React.FC<TabProps> = ({ tabs, activeTab, onChange }) => {
  return (
    <div className="flex flex-wrap border-b border-gray-200">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`inline-flex items-center px-4 py-3 text-sm font-medium rounded-t-lg transition-all duration-200 mr-1 ${
            activeTab === tab.id
              ? "text-blue-600 bg-white border-l border-t border-r border-gray-200 -mb-px"
              : "text-gray-500 hover:text-blue-600 bg-gray-50 hover:bg-gray-100"
          }`}
        >
          {tab.icon && <span className="mr-2">{tab.icon}</span>}
          {tab.label}
        </button>
      ))}
    </div>
  );
};

interface TabPanelProps {
  children: React.ReactNode;
  id: string;
  activeTab: string;
}

export const TabPanel: React.FC<TabPanelProps> = ({
  children,
  id,
  activeTab,
}) => {
  if (id !== activeTab) return null;

  return <div className="py-6 animate-fade-in">{children}</div>;
};

interface TabInterfaceProps {
  tabs: {
    id: string;
    label: string;
    icon?: React.ReactNode;
    content: React.ReactNode;
  }[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const TabInterface: React.FC<TabInterfaceProps> = ({
  tabs,
  activeTab,
  onTabChange,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100">
      <div className="p-4">
        <Tabs tabs={tabs} activeTab={activeTab} onChange={onTabChange} />

        {tabs.map((tab) => (
          <TabPanel key={tab.id} id={tab.id} activeTab={activeTab}>
            {tab.content}
          </TabPanel>
        ))}
      </div>
    </div>
  );
};

export default TabInterface;
