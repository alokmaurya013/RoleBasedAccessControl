import React from "react";

const Table = ({ headers = [], rows = [], actions = [] }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            {headers.map((header, index) => (
              <th
                key={index}
                className="border border-gray-200 px-4 py-2 text-left text-sm font-medium text-gray-600"
              >
                {header}
              </th>
            ))}
            {actions.length > 0 && (
              <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium text-gray-600">
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {rows.length > 0 ? (
            rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-50">
                {headers.map((header, colIndex) => (
                  <td
                    key={colIndex}
                    className="border border-gray-200 px-4 py-2 text-sm text-gray-700"
                  >
                    {row[header.toLowerCase()]} {/* Ensure keys match headers */}
                  </td>
                ))}
                {actions.length > 0 && (
                  <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">
                    {actions.map((action, actionIndex) => (
                      <button
                        key={actionIndex}
                        className={`mr-2 px-3 py-1 rounded ${
                          action.type === "edit"
                            ? "bg-blue-500 text-white"
                            : "bg-red-500 text-white"
                        }`}
                        onClick={() => action.onClick(row)}
                      >
                        {action.label}
                      </button>
                    ))}
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={headers.length + (actions.length > 0 ? 1 : 0)}
                className="text-center text-gray-500 px-4 py-2"
              >
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
