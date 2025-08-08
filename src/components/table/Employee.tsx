import { Input } from "@/components/ui/input";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import InputExcel from "../excel/InputExcel";
import type { employeeType } from "@/types";

const Employee = () => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [dataEmployee, setDataEmployee] = useState<employeeType[]>([]);

  const filteredEmployee: employeeType[] =
    value.trim() === ""
      ? dataEmployee
      : dataEmployee.filter((emp: employeeType) => {
          return emp.name.toLowerCase().includes(value.toLowerCase());
        });
  return (
    <div className="flex flex-col w-full min-h-screen gap-10 my-6 bg-white">
      <InputExcel setDataEmployee={setDataEmployee} />

      <div className="flex flex-col bg-white border rubik rounded-xl">
        {/* Filter2an */}
        <div className="flex items-center justify-between gap-2 px-8 py-6 ">
          <div className="inline-flex items-center gap-6 w-fit">
            <div className="relative">
              <IoSearchOutline
                className={`absolute left-3 top-1/2 -translate-y-1/2 ${
                  isFocus || value != "" ? "opacity-0" : "opacity-100"
                }`}
                color="text-gray-600"
                size={18}
              />
              <div className="w-[250px]">
                <Input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  className={`${
                    isFocus || value != "" ? "" : "pl-10"
                  } pr-12 w-full"`}
                  placeholder="Search..."
                />
              </div>
            </div>
          </div>
        </div>

        {/* SubTitle List Prouduk */}
        <div className="flex items-center gap-2 px-8 py-3 text-sm bg-gray-100">
          <div className="inline-flex items-center flex-1/12">
            <label htmlFor="Products" className="ml-2">
              Id
            </label>
          </div>
          <div className="w-[40px] flex-2/12">Name</div>
          <div className="w-[40px] flex-1/12">Gender</div>
          <div className="w-[40px] flex-1/12">Status</div>
          <div className="w-[40px] flex-2/12">Position</div>
          <div className="w-[40px] flex-2/12">Branch</div>
          <div className="w-[40px] flex-1/12">Awal-Kontrak</div>
          <div className="w-[40px] flex-1/12">Akhir-Kontrak</div>
          <div className="w-[40px] flex-1/12">Status Data</div>
          {/* <div className="w-[40px] flex-1/12">Delete</div> */}
        </div>

        {/* list product */}
        {filteredEmployee.map((emp) => (
          <div
            key={emp.id}
            className={`flex items-center gap-2 px-8 py-3 text-sm rubik ${
              emp.statusDateEmployee === "NOT_FOUND"
                ? "bg-red-200 text-red-600"
                : emp.statusDateEmployee === "CHANGED"
                ? "bg-yellow-200 text-yellow-600"
                : ""
            }`}
          >
            <div className="inline-flex items-center flex-1/12">
              <p>{emp.id}</p>
            </div>
            <div className="w-[40px] flex-2/12">{emp.name}</div>
            <div className="w-[40px] flex-1/12">{emp.gender}</div>
            <div className="w-[40px] flex-1/12">{emp.status}</div>
            <div className="w-[40px] flex-2/12">{emp.position}</div>
            <div className="w-[40px] flex-2/12">{emp.branch}</div>
            <div className="w-[40px] flex-1/12">{emp.awalKontrak}</div>
            <div className="w-[40px] flex-1/12">{emp.akhirKontrak}</div>
            <div className="w-[40px] flex-1/12">{emp.statusDateEmployee}</div>
            {/* <div className="w-[40px] flex-1/12">
              <button className="p-1 transition duration-300 bg-red-600 rounded-sm active:scale-95 hover:scale-105 hover:bg-red-700">
                <FiX size={30} className="text-white" />
              </button>
              <Button className="p-0 m-0"></Button>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employee;
