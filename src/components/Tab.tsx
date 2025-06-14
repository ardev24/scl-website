import React, { useState } from 'react';

interface TabItem {
  id: number;
  title: string;
  content: string;
  image: string;
}

interface TabProps {
  tabs: TabItem[];
}

const Tab: React.FC<TabProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="w-full">
      <div className="flex overflow-x-auto space-x-4 py-4">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            className={`flex-shrink-0 w-80 h-80 flex flex-col items-center justify-center rounded-lg shadow-md ${
              activeTab === index ? 'bg-brand-secondary text-brand-text-on-primary' : 'bg-white text-brand-text-primary'
            }`}
            onClick={() => handleTabClick(index)}
          >
            <img
              src={tab.image}
              alt={tab.title}
              className="w-40 h-40 object-cover rounded-md mb-2"
            />
            <span className="text-sm text-center px-2">{tab.title}</span>
          </button>
        ))}
      </div>
      <div className="p-4 bg-white rounded-b-lg">
        <p className="text-brand-text-primary">{tabs[activeTab].content}</p>
      </div>
    </div>
  );
};

export default Tab;
