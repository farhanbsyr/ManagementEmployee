import { Button } from "../ui/button";
import { Input } from "../ui/input";

const IsiDpPrice = () => {
  return (
    <form className="flex flex-col gap-2 text-sm">
      <div className="inline-flex items-center gap-2 rubik ">
        <label htmlFor="" className="w-[30px]">
          MIN
        </label>
        <Input id="start" type="number" placeholder="" className="w-[100px]" />
      </div>
      <div className="inline-flex items-center gap-2 rubik ">
        <label htmlFor="" className="w-[30px]">
          MAX
        </label>
        <Input id="start" type="number" placeholder="" className="w-[100px]" />
      </div>
      <Button>Apply</Button>
    </form>
  );
};

export default IsiDpPrice;
