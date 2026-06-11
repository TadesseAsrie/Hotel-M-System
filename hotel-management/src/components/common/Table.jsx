// src/components/common/Table.jsx
const Table = ({ headers, data, renderRow }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50 dark:bg-gray-700">
          <tr>
            {headers.map((h) => (
              <th key={h} className="p-3 text-left">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{data.map((item, i) => renderRow(item, i))}</tbody>
      </table>
    </div>
  );
};

export default Table;
