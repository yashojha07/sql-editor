import React from "react";

function TableUI({ headers, rows }) {
  return (
    <div className="w-full h-80 overflow-auto scrollbar-hide">
      <table className="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-3 py-2 title-font tracking-wider font-medium text-black-900 text-sm bg-black-100 rounded-tl rounded-bl"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row_value, index) => (
            <tr key={index}>
              {row_value.map((cell_value, index) => (
                <td
                  key={index}
                  className="border-t-2 border-black-200 px-4 py-2 text-sm"
                >
                  {cell_value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableUI;
