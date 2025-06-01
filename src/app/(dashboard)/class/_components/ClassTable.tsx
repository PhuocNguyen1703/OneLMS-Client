import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Columns } from "./table/Columns";
import { DataTable } from "@/components/table/DataTable";

type Class = {
  id: string;
  name: string;
  section: string;
  noOfStudent: number;
  noOfSubject: number;
  status: "Active" | "InActive";
};

const classList: Class[] = [
  {
    id: "C123564",
    name: "CH1",
    section: "A",
    noOfStudent: 30,
    noOfSubject: 15,
    status: "Active",
  },
  {
    id: "C123564",
    name: "CH1",
    section: "B",
    noOfStudent: 30,
    noOfSubject: 15,
    status: "Active",
  },
  {
    id: "C123564",
    name: "CH2",
    section: "A",
    noOfStudent: 30,
    noOfSubject: 15,
    status: "Active",
  },
  {
    id: "C123564",
    name: "CH2",
    section: "B",
    noOfStudent: 30,
    noOfSubject: 15,
    status: "Active",
  },
  {
    id: "C123564",
    name: "GH1",
    section: "A",
    noOfStudent: 30,
    noOfSubject: 15,
    status: "InActive",
  },
  {
    id: "C123564",
    name: "GH1",
    section: "B",
    noOfStudent: 30,
    noOfSubject: 15,
    status: "Active",
  },
  {
    id: "C123564",
    name: "GH2",
    section: "A",
    noOfStudent: 30,
    noOfSubject: 15,
    status: "Active",
  },
  {
    id: "C123564",
    name: "SH1",
    section: "B",
    noOfStudent: 30,
    noOfSubject: 15,
    status: "Active",
  },
  {
    id: "C123564",
    name: "SH2",
    section: "B",
    noOfStudent: 30,
    noOfSubject: 15,
    status: "Active",
  },
];

const ClassTable = () => {
  return (
    <div className="space-y-3 h-full">
      <nav>
        <Select>
          <SelectTrigger className="w-[180px] focus:ring-offset-0 focus:ring-0">
            <SelectValue placeholder="Select campus..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Campus 1</SelectItem>
            <SelectItem value="dark">Campus 2</SelectItem>
            <SelectItem value="system">Campus 3</SelectItem>
          </SelectContent>
        </Select>
      </nav>
      <DataTable columns={Columns} data={classList} />
    </div>
  );
};

export default ClassTable;
