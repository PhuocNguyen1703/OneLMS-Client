import { AlarmClock, CircleCheck, CircleX, PlusCircle } from "lucide-react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

const DataFilter = () => {
  const options = [
    { id: "inprogress", label: "In Progress" },
    { id: "done", label: "Done" },
    { id: "canceled", label: "Canceled" },
  ];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="gap-2">
          <PlusCircle />
          Status
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-52 p-2">
        <Command>
          <CommandInput placeholder="Status" />
          <CommandSeparator />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            {options.map((option) => (
              <CommandItem key={option.id} className="p-0 pl-2 gap-2">
                <Checkbox id={option.id} />
                <Label
                  htmlFor={option.id}
                  className="flex-1 h-full py-[6px] pr-2"
                >
                  {option.label}
                </Label>
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default DataFilter;
