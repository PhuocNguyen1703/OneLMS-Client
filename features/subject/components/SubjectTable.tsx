import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Columns } from "./table/Columns";
import { DataTable } from "@/components/table/DataTable";

type Subject = {
  id: string;
  name: string;
  code: number;
  language: string;
  status: "Active" | "InActive";
};

const subjectList: Subject[] = [
  {
    id: "SU123456",
    name: "English",
    code: 101,
    language: "English",
    status: "Active",
  },
  {
    id: "SU123456",
    name: "Math",
    code: 101,
    language: "English",
    status: "Active",
  },
  {
    id: "SU123456",
    name: "Physic",
    code: 101,
    language: "English",
    status: "Active",
  },
  {
    id: "SU123456",
    name: "Chemistry",
    code: 101,
    language: "English",
    status: "Active",
  },
  {
    id: "SU123456",
    name: "Biology",
    code: 101,
    language: "English",
    status: "InActive",
  },
  {
    id: "SU123456",
    name: "Finance",
    code: 101,
    language: "English",
    status: "Active",
  },
];

export const SubjectTable = () => {
  return (
    <div className="space-y-3 h-full">
      <DataTable columns={Columns} data={subjectList} />
    </div>
  );
};
