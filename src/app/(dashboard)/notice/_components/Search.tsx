import { Input } from "@/shared/components/ui/input";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="relative">
      <Search className="absolute left-2 top-1/2 -translate-y-1/2" size={20} />
      <Input
        className="pl-8 rounded-full"
        placeholder="Search bt Title or Author "
      />
    </div>
  );
};

export default SearchBar;
