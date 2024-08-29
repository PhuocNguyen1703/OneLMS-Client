"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DatePickerWithRange } from "./DateRangePicker";
import { Button } from "@/components/ui/button";

const SearchBar = () => {
  return (
    <section className="relative w-full">
      <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-full max-w-[1125px] ">
        <form className=" grid grid-cols-[1fr_1fr_1fr_120px] p-8 gap-6 items-end bg-background rounded-xl shadow-2xl">
          <div className="grid w-full items-center gap-1">
            <Label htmlFor="location1" className="text-base font-medium">
              Where you from
            </Label>
            <Input
              className="text-base "
              id="location1"
              placeholder="Enter your location..."
            />
          </div>
          <div className="grid w-full items-center gap-1">
            <Label htmlFor="location2" className="text-base">
              Where you go
            </Label>
            <Input
              className="text-base "
              id="location2"
              placeholder="Enter your location..."
            />
          </div>
          <div className="grid w-full items-center gap-1">
            <Label className="text-base">Choose dates</Label>
            <DatePickerWithRange />
          </div>
          <Button className="text-base">Search</Button>
        </form>
      </div>
    </section>
  );
};

export default SearchBar;
