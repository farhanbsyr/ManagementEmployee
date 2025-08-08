import { useState } from "react";
import { DropdownMenuCheckboxItem } from "../ui/dropdown-menu";

const IsiDpStatus = () => {
  const [active, setActive] = useState(true);
  const [nonActive, setNonActive] = useState(false);
  const [all, setAll] = useState(false);
  return (
    <>
      <DropdownMenuCheckboxItem checked={all} onCheckedChange={setAll}>
        All Status
      </DropdownMenuCheckboxItem>

      <DropdownMenuCheckboxItem checked={active} onCheckedChange={setActive}>
        Active
      </DropdownMenuCheckboxItem>

      <DropdownMenuCheckboxItem
        checked={nonActive}
        onCheckedChange={setNonActive}
      >
        Non Active
      </DropdownMenuCheckboxItem>
    </>
  );
};

export default IsiDpStatus;
