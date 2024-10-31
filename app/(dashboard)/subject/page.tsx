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
import { SubjectTable } from "@/features/subject/components/SubjectTable";
import { ChevronDown, CopyPlus, FileDown, PrinterCheck } from "lucide-react";
import Link from "next/link";

const Subject = () => {
  return (
    <section className="flex flex-col flex-1 p-4">
      <nav className="flex items-center justify-between pb-4">
        <div>
          <span className="text-xl font-semibold">Class List</span>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Dashboard</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Academic</BreadcrumbPage>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Subject</BreadcrumbPage>
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
            Add Subject
          </Button>
        </div>
      </nav>
      <SubjectTable />
    </section>
  );
};

export default Subject;
