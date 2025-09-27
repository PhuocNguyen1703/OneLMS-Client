"use client";

import Table, { TableProps } from "./Table";
import { filterTables } from "../utils/filterTable";
import { useDialogActions, useFilterOptions } from "@/stores/table.store";
import { TableDialogs } from "./TableDialog";

const TableManager = ({ initialTables }: { initialTables: TableProps[] }) => {
  const filterOptions = useFilterOptions();
  const { openDialog } = useDialogActions();

  const filteredTables = filterTables(initialTables, filterOptions);

  const handleTableClick = (table: TableProps) => {
    switch (table.status) {
      case "locked":
        openDialog("edit", table);
        break;
      case "reserved":
        openDialog("reservation", table);
        break;
      case "occupied":
        openDialog("occupied", table);
        break;
      case "cleaning":
        openDialog("cleaning", table);
        break;
      case "available":
        openDialog("new-order", table);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="px-5 py-4 w-full flex-1 overflow-y-auto">
        <div className="flex flex-wrap gap-x-10 gap-y-14 p-5 justify-evenly">
          {filteredTables.map((table, _) => (
            <div
              key={table._id}
              onClick={() => handleTableClick(table)}
              className="mx-auto"
            >
              <Table {...table} />
            </div>
          ))}
        </div>
      </div>

      <TableDialogs />
    </>
  );
};

export default TableManager;
