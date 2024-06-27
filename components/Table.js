import React from "react";

const Table = ({ history }) => {
  return (
    <div className="container p-2 mx-auto sm:p-4 text-gray-100 bg-[#7765F3]">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">Recent Transactions</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
            <col className="w-24" />
          </colgroup>
          <thead className="bg-[#18181B]">
            <tr className="text-left">
              <th className="p-3">ID #</th>
              <th className="p-3">User</th>
              <th className="p-3">From</th>
              <th className="p-3">To</th>
              <th className="p-3 text-right">Input</th>
              <th className="p-3 text-right">Output</th>
              <th className="p-3 text-right">Status</th>
            </tr>
          </thead>
          <tbody>
            {history.map((entry, i) => (
              <tr key={i} className="border-b border-opacity-20 border-gray-700 bg-[#27272A]">
                <td className="p-3">
                  <p>{entry.historyId}</p>
                </td>
                <td className="p-3">
                  <p>{entry.userAddress}</p>
                </td>
                <td className="p-3">
                  <p>{entry.from}</p> {/* Assuming 'from' is the correct property */}
                </td>
                <td className="p-3">
                  <p>{entry.to}</p> {/* Assuming 'to' is the correct property */}
                </td>
                <td className="p-3 text-right">
                  <p>{entry.inputValue}</p>
                </td>
                <td className="p-3 text-right">
                  <p>{entry.outputValue}</p>
                </td>
                <td className="p-3 text-right">
                  <span className="px-3 py-1 font-semibold rounded-md bg-green-500 text-gray-900">
                    <span>Completed</span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
