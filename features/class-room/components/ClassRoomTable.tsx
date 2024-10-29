import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Table from "./table";

const ClassTable = () => {
  return (
    <div className="">
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
      <Table />
    </div>
  );
};

export default ClassTable;
