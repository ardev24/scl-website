import React from 'react';

interface TableProps {
  data: any[];
  columns: {
    header: string;
    accessor: string;
  }[];
}

const Table: React.FC<TableProps> = ({ data, columns }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.accessor} className="px-4 py-2">{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              {columns.map((column) => (
                <td key={column.accessor} className="border px-4 py-2">{row[column.accessor]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
