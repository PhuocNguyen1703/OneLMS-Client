"use client";

import { DataTable } from "@/components/table/DataTable";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { GuardianGrid } from "@/features/user/guardian/components/grid/GuardianGrid";
import { Columns } from "@/features/user/guardian/components/table/Columns";
import {
  ChevronDown,
  CopyPlus,
  FileDown,
  PrinterCheck,
  Settings2,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

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

const Guardian = () => {
  const guardianList: Guardian[] = [
    {
      id: "G12345",
      name: "John Doe",
      cover:
        "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      email: "johndoe@example.com",
      gender: "Male",
      occupation: "Teacher",
      phone: 1234567890,
      address: "6506 Runte Square, East Shenita, AR 96772",
      status: "Active",
    },
    {
      id: "G12315",
      name: "Alice Smith",
      cover:
        "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      email: "alice@example.com",
      gender: "Female",
      occupation: "Teacher",
      phone: 1234567890,
      address: "123 Maple St, Springfield, USA",
      status: "Active",
    },
    {
      id: "G12375",
      name: "Bob Johnson",
      cover:
        "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      email: "bob@example.com",
      gender: "Male",
      occupation: "Engineer",
      phone: 9876543210,
      address: "456 Oak St, Springfield, USA",
      status: "InActive",
    },
    {
      id: "G12395",
      name: "Charlie Brown",
      cover:
        "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      email: "charlie@example.com",
      gender: "Non-binary",
      occupation: "Designer",
      phone: 5555555555,
      address: "789 Pine St, Springfield, USA",
      status: "Active",
    },
    {
      id: "G12356",
      name: "Diana Prince",
      cover:
        "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      email: "diana@example.com",
      gender: "Female",
      occupation: "Doctor",
      phone: 1122334455,
      address: "1010 Gotham Blvd, Gotham City, NY 10001",
      status: "Active",
    },
    {
      id: "G12316",
      name: "Ethan Hunt",
      cover:
        "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      email: "ethan@example.com",
      gender: "Male",
      occupation: "Scientist",
      phone: 3344556677,
      address: "2020 Echo Park, Los Angeles, CA 90001",
      status: "Active",
    },
    {
      id: "G12378",
      name: "Fiona Green",
      cover:
        "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      email: "fiona@example.com",
      gender: "Female",
      occupation: "Artist",
      phone: 4455667788,
      address: "3030 Sunset Blvd, Los Angeles, CA 90001",
      status: "Active",
    },
    {
      id: "G12365",
      name: "George Williams",
      cover:
        "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      email: "george@example.com",
      gender: "Male",
      occupation: "Manager",
      phone: 6677889900,
      address: "4040 Broadway Ave, New York, NY 10001",
      status: "InActive",
    },
    {
      id: "G12355",
      name: "Hannah Lee",
      cover:
        "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      email: "hannah@example.com",
      gender: "Female",
      occupation: "Engineer",
      phone: 7788990011,
      address: "5050 Elm St, Dallas, TX 75201",
      status: "Active",
    },
    {
      id: "G12360",
      name: "Ivy Green",
      cover:
        "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      email: "ivy@example.com",
      gender: "Female",
      occupation: "Nurse",
      phone: 9988776655,
      address: "6060 Willow Rd, Chicago, IL 60601",
      status: "Active",
    },
    {
      id: "G12330",
      name: "Jack Daniels",
      cover:
        "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      email: "jack@example.com",
      gender: "Male",
      occupation: "Chef",
      phone: 1122334455,
      address: "7070 Oak St, Seattle, WA 98101",
      status: "InActive",
    },
    {
      id: "G12340",
      name: "Kelly Clarkson",
      cover:
        "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      email: "kelly@example.com",
      gender: "Female",
      occupation: "Singer",
      phone: 2233445566,
      address: "8080 Spring St, Austin, TX 73301",
      status: "Active",
    },
    {
      id: "G12390",
      name: "Liam Neeson",
      cover:
        "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      email: "liam@example.com",
      gender: "Male",
      occupation: "Actor",
      phone: 5566778899,
      address: "9090 Hollywood Blvd, Los Angeles, CA 90028",
      status: "Active",
    },
    {
      id: "G12380",
      name: "Megan Fox",
      cover:
        "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      email: "megan@example.com",
      gender: "Female",
      occupation: "Actress",
      phone: 6677889900,
      address: "1010 Ocean Ave, Miami, FL 33101",
      status: "InActive",
    },
    {
      id: "G12310",
      name: "Nathan Drake",
      cover:
        "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      email: "nathan@example.com",
      gender: "Male",
      occupation: "Explorer",
      phone: 9988776655,
      address: "3030 Adventure Way, New York, NY 10011",
      status: "Active",
    },
  ];

  const [renderComponent, setRenderComponent] = useState<String>("table");

  const renderComponents = () => {
    if (renderComponent === "grid") return <GuardianGrid data={guardianList} />;

    return <DataTable columns={Columns} data={guardianList} />;
  };

  return (
    <>
      <nav className="sticky top-0 p-4 bg-white z-10">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-semibold">Guardians</span>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/">Dashboard</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Users</BreadcrumbPage>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Guardian</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" className="w-10 p-0">
              <PrinterCheck size={16} />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="space-x-2">
                  <FileDown size={16} />
                  <span>Export</span>
                  <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Export as PDF</DropdownMenuItem>
                <DropdownMenuItem>Export as Excel</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button>
              <CopyPlus size={16} className="mr-3" />
              Add Guardian
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between mt-5">
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="h-fit w-14 py-1 px-2"
              onClick={() => setRenderComponent("table")}
            >
              Table
            </Button>
            <Button
              variant="outline"
              className="h-fit w-14 py-1 px-2"
              onClick={() => setRenderComponent("grid")}
            >
              Card
            </Button>
          </div>
          <div className="flex gap-2">
            <div className="min-w-80">
              <Input placeholder="Search by name" />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="space-x-1">
                  <Settings2 size={16} />
                  <span>View</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Export as PDF</DropdownMenuItem>
                <DropdownMenuItem>Export as Excel</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
      <div className="px-4">{renderComponents()}</div>
    </>
  );
};

export default Guardian;
