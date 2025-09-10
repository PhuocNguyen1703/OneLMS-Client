import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="relative">
      <SearchIcon
        className="absolute left-2 top-1/2 -translate-y-1/2"
        size={16}
      />
      <Input
        className="pl-8 min-w-32 w-64 h-8 border rounded-full"
        placeholder="Search by id, title, owner..."
      />
    </div>
  );
};

export default Search;
