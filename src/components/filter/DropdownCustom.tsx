import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { FaChevronDown } from "react-icons/fa6";
import { Button } from "../ui/button";
import IsiDpPrice from "./IsiDpPrice";
import IsiDpStatus from "./IsiDpStatus";
interface DropdownCustomProps {
  buttonName: string;
  isPrice: boolean;
}

const DropdownCustom: React.FC<DropdownCustomProps> = ({
  buttonName,
  isPrice,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"}>
          {buttonName}
          <FaChevronDown className="ml-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit ">
        {isPrice ? <IsiDpPrice /> : <IsiDpStatus />}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownCustom;
