"use client";

import { ColumnDef } from "@/tanstack/react-table";
import { FilePenLine } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { Checkbox } from "@/shared/components/ui/checkbox";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
type Subject = {
  id: string;
  name: string;
  code: number;
  language: string;
  status: "Active" | "InActive";
};

export const Columns: ColumnDef<Subject>[] = [
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
    header: "Subject Name",
  },
  {
    accessorKey: "code",
    header: "Code",
  },
  {
    accessorKey: "language",
    header: "Language",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const subject: Subject = row.original;

      if (subject.status === "Active") {
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
