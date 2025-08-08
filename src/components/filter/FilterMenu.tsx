import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { IoFilter } from "react-icons/io5";
import type React from "react";

interface FilterMenuProps {
  values?: string[];
  filterName: string;
  selectedFilter: string[];
  setSelectedFilter: React.Dispatch<React.SetStateAction<string[]>>;
}

const FilterMenu: React.FC<FilterMenuProps> = ({
  values,
  filterName,
  setSelectedFilter,
  selectedFilter,
}) => {
  const handleChange = (e: string, checked: boolean) => {
    if (checked) {
      setSelectedFilter((prev) => [...prev, e]);
    } else {
      setSelectedFilter((prev) => prev.filter((item) => item != e));
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="text-base">
          <div className="w-5">
            <IoFilter className="!w-full !h-full mr-2" />
          </div>
          {filterName}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        {!values
          ? "Loading..."
          : values.map((val) => (
              <DropdownMenuCheckboxItem
                key={val}
                checked={selectedFilter.includes(val)}
                onCheckedChange={(checked) =>
                  handleChange(val, checked as boolean)
                }
              >
                {val}
              </DropdownMenuCheckboxItem>
            ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilterMenu;
