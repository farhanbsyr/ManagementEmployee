import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { BiSort } from "react-icons/bi";
const SortGrafik = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"} className="text-base">
          <div className="w-5">
            <BiSort className="!w-full !h-full mr-2" />
          </div>
          Sort
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Tertinggi </DropdownMenuItem>
        <DropdownMenuItem>Terendah </DropdownMenuItem>{" "}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SortGrafik;
