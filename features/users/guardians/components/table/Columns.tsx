"use client";

import { IoFemaleSharp, IoMale } from "react-icons/io5";
import { ColumnDef } from "@tanstack/react-table";
import { FilePenLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
type Guardian = {
  id: string;
  name: string;
  cover: string;
  email: string;
  gender: string;
  occupation: string;
  phone: number;
  address: string;
  status: "Active" | "InActive";
};

const handleToggleView = () => {
  console.log("view");
};

export const Columns: ColumnDef<Guardian>[] = [
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
    header: "User Info",
    cell: ({ row }) => {
      const guardian: Guardian = row.original;
      return (
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage
              src={guardian.cover}
              alt="avatar"
              className="object-cover"
            />
            <AvatarFallback>?</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{guardian.name}</p>
            <p className="text-xs">{guardian.email}</p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "gender",
    header: "Gender",
    cell: ({ row }) => {
      const guardian: Guardian = row.original;

      if (guardian.gender === "Male") {
        return <IoMale color="#0369a1" />;
      }

      return <IoFemaleSharp color="#a21caf" />;
    },
  },
  {
    accessorKey: "occupation",
    header: "Occupation",
  },
  {
    accessorKey: "phone",
    header: "Contact",
  },
  {
    accessorKey: "address",
    header: "Address",
  },

  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const guardian: Guardian = row.original;

      if (guardian.status === "Active") {
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
          <DropdownMenuTrigger asChild className="focus:outline-none">
            <Button variant="ghost" size="icon">
              <FilePenLine size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={handleToggleView}>View</DropdownMenuItem>
            <DropdownMenuItem className="text-red-900 focus:text-red-950">
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
