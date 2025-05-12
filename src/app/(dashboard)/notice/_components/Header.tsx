import { Button } from "@/shared/components/ui/button";
import SearchBar from "./Search";
import { ListFilter, Plus } from "lucide-react";

const Header = () => {
  return (
    <div className="flex-center justify-between p-4">
      <h1>Notice board</h1>
      <div className="flex-center gap-2">
        <SearchBar />
        <Button
          variant="outline"
          size="icon"
          className="rounded-full shadow-sm"
        >
          <ListFilter size={20} />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full shadow-sm"
        >
          <Plus size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
