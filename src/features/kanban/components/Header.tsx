import { Button } from "@/components/ui/button";
import Search from "./Search";
import { ChevronsUpDownIcon } from "lucide-react";
import { AutoBreadcrumb } from "@/components/ui/auto-breadcrumb";
import AddBoardButton from "./AddBoardButton";

const Header = () => {
  return (
    <section className="sticky top-0 left-0 right-0 flex-center justify-between py-4 px-5 bg-secondary">
      <AutoBreadcrumb />
      <div className="flex-center gap-2">
        <Search />
        <Button variant="outline" size="sm" className="rounded-full">
          <ChevronsUpDownIcon />
          Sort by
        </Button>
        <AddBoardButton />
      </div>
    </section>
  );
};

export default Header;
