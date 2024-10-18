"use client";

import { Search } from "lucide-react";
import { Input } from "../ui/input";
import ViewOptions from "./ViewOptions";
import DataFilter from "./DataFilter";

const ToolBar = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <DataFilter />
      </div>
      <div className="flex items-center gap-2">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2" />
          <Input className="pl-9" placeholder="Search..." />
        </div>
        <ViewOptions />
      </div>
    </div>
  );
};

export default ToolBar;
