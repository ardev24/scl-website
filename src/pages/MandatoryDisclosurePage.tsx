import React, { useState, useEffect } from 'react';
import Table from '../components/Table';
import Papa from 'papaparse';

const MandatoryDisclosurePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [tabData, setTabData] = useState<any[][]>([[], [], [], [], []]);

  const tabs = [
    'MANDATORY DISCLOSURE',
    'DOCUMENTS AND INFORMATION',
    'RESULT AND ACADEMICS',
    'STAFF DETAILS',
    'SCHOOL INFRASTRUCTURE',
  ];

  const csvFiles = [
    import('../assets/tabs/tab1.csv?raw'),
    import('../assets/tabs/tab2.csv?raw'),
    import('../assets/tabs/tab3.csv?raw'),
    import('../assets/tabs/tab4.csv?raw'),
    import('../assets/tabs/tab5.csv?raw'),
  ];
  

  useEffect(() => {
    const loadTabData = async () => {
      const newTabData: any[][] = [];
      for (const filePromise of csvFiles) {
        try {
          const text = await filePromise;
          const results = Papa.parse(text.default, { header: true, skipEmptyLines: true });
          newTabData.push(results.data);
        } catch (error) {
          console.error(`Error loading file:`, error);
          newTabData.push([]);
        }
      }
      setTabData(newTabData);
    };
  
  
    loadTabData();
  }, []);
  

  const tableColumns = tabData[activeTab].length > 0 ? Object.keys(tabData[activeTab][0]).map(key => ({
    header: key,
    accessor: key,
  })) : [];

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Mandatory Disclosure</h1>
      <div className="flex border-b">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`bg-green-50 hover:bg-green-200 px-4 py-2 font-medium text-sm rounded-t-lg ${
              activeTab === index ? 'bg-green-200 border-b-2 border-green-500' : 'text-gray-500'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="p-4 bg-white rounded-b-lg">
        {tabData[activeTab].length > 0 ? (
          <Table data={tabData[activeTab]} columns={tableColumns} />
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </div>
  );
};

export default MandatoryDisclosurePage;
