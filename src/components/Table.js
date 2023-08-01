import React from "react";
import { CSVLink } from "react-csv";
import TableUI from "./TableUI";

function Table({ query, headers, rows, csvData }) {
  return (
    <div>
      {query ? (
        <section className="text-gray-600 body-font pl-4">
          <div className="flex w-full justify-between mt-6 lg:mt-0">
            <div className="font-bold text-center py-4 w-40 bg-black-500 text-black rounded-tl-md rounded-tr-lg">
              Output
            </div>
            <CSVLink
              data={csvData}
              filename={new Date().getTime().toString() + ".csv"}
              className="p-2"
            >
            </CSVLink>
          </div>
          <TableUI headers={headers} rows={rows} />
        </section>
      ) : (
        <div className="w-full flex text-center h-80 justify-center items-center font-bold font-mono text-gray-400 text-2xl px-6">
          Run Your Query !!!!
        </div>
      )}
    </div>
  );
}

export default Table;
