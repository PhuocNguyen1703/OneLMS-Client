"use client";

import { ColumnDef } from "@/tanstack/react-table";
import { FilePenLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
type Class = {
  id: string;
  name: string;
  section: string;
  noOfStudent: number;
  noOfSubject: number;
  status: "Active" | "InActive";
};

export const Columns: ColumnDef<Class>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Class Name",
  },
  {
    accessorKey: "section",
    header: "Section",
  },
  {
    accessorKey: "noOfStudent",
    header: "No of Student",
  },
  {
    accessorKey: "noOfSubject",
    header: "No of Subject",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const classs: Class = row.original;

      if (classs.status === "Active") {
        return (
          <span className="px-1.5 py-1 rounded-lg bg-green-100 text-green-700 text-sm font-semibold">
            Active
          </span>
        );
      }

      return (
        <span className="px-1.5 py-1 rounded-lg bg-red-100 text-red-700 text-sm font-semibold">
          InActive
        </span>
      );
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="focus:outline-hidden">
            <Button variant="ghost" size="icon">
              <FilePenLine size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
