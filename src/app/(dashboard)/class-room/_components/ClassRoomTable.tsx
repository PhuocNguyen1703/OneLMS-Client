import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
import { Columns } from "./table/Columns";
import { DataTable } from "@/shared/components/table/DataTable";

type ClassRoom = {
  id: string;
  roomNo: string;
  capacity: number;
  status: "Active" | "InActive";
};

const classRoom: ClassRoom[] = [
  {
    id: "1",
    roomNo: "R101",
    capacity: 30,
    status: "Active",
  },
  {
    id: "2",
    roomNo: "R102",
    capacity: 35,
    status: "Active",
  },
  {
    id: "3",
    roomNo: "R103",
    capacity: 40,
    status: "Active",
  },
  {
    id: "4",
    roomNo: "R104",
    capacity: 50,
    status: "InActive",
  },
  {
    id: "5",
    roomNo: "R105",
    capacity: 35,
    status: "Active",
  },
  {
    id: "6",
    roomNo: "R106",
    capacity: 20,
    status: "InActive",
  },
];

const ClassRoomTable = () => {
  return (
    <div className="space-y-3">
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
      <DataTable columns={Columns} data={classRoom} />
    </div>
  );
};

export default ClassRoomTable;
