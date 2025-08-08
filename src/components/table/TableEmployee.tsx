import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import SortGrafik from "../filter/SortGrafik";
import FilterMenu from "../filter/FilterMenu";
import { Input } from "../ui/input";
import { IoSearchOutline } from "react-icons/io5";
import axios from "axios";
import { type employeeType, type typesFilter } from "@/types";

const TableEmployee = () => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [dataEmployee, setDataEmployee] = useState<employeeType[]>([]);
  const [gender, setGender] = useState<string[]>([]);
  const [position, setPosition] = useState<string[]>([]);
  const [branch, setBranch] = useState<string[]>([]);
  const [status, setStatus] = useState<string[]>([]);
  const [types, setTypes] = useState<typesFilter>();
  const [valuesBranch, setValuesBranch] = useState<string[]>();
  const [valuesPosition, setValuesPosition] = useState<string[]>();

  const getAllEmployee = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/employee`
      );

      setDataEmployee(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const getTypeFilter = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/typeFilter`
      );
      const data: typesFilter = response.data;
      const newBranchs: string[] = [];
      const newPosition: string[] = [];
      setTypes(data);

      data.positions.map((item) => {
        newPosition.push(item.positionName);
      });

      data.branchs.map((item) => {
        newBranchs.push(item.branchName);
      });

      setValuesBranch(newBranchs);
      setValuesPosition(newPosition);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllEmployee();
    getTypeFilter();
  }, []);

  useEffect(() => {
    filteredEmployee(value, gender, position, branch, status);
  }, [value, gender, position, branch, status]);

  const filteredEmployee = async (
    name: string,
    gender: string[],
    position: string[],
    branch: string[],
    status: string[]
  ) => {
    try {
      const params = new URLSearchParams();
      params.append("name", name);

      gender.forEach((g) => params.append("gender", g));
      position.forEach((p) => params.append("position", p));
      branch.forEach((b) => params.append("branch", b));
      status.forEach((s) => params.append("status", s));

      const response = await axios.get(
        `${
          import.meta.env.VITE_API_URL
        }/api/searchEmployee?${params.toString()}`
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
          <FilterMenu
            filterName="Gender"
            selectedFilter={gender}
            setSelectedFilter={setGender}
            values={types?.genders}
          />
          <FilterMenu
            filterName="Status"
            selectedFilter={status}
            setSelectedFilter={setStatus}
            values={types?.status}
          />
        </div>
        <div className="inline-flex gap-4">
          <SortGrafik />
          <FilterMenu
            filterName="Position"
            selectedFilter={position}
            setSelectedFilter={setPosition}
            values={valuesPosition}
          />
          <FilterMenu
            filterName="Branch"
            selectedFilter={branch}
            setSelectedFilter={setBranch}
            values={valuesBranch}
          />
        </div>
      </div>

      {/* SubTitle List Prouduk */}
      <div className="flex items-center gap-2 px-8 py-3 bg-gray-100">
        <div className="inline-flex items-center flex-1/12">
          <Checkbox />

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
        <div className="w-[40px] flex-1/12">Delete</div>
      </div>

      {/* list product */}
      {dataEmployee.map((emp) => (
        <div key={emp.id} className="flex items-center gap-2 px-8 py-3 rubik">
          <div className="inline-flex items-center flex-1/12">
            <Checkbox />
            <p>{emp.id}</p>
          </div>
          <div className="w-[40px] flex-2/12">{emp.name}</div>
          <div className="w-[40px] flex-1/12">{emp.gender}</div>
          <div className="w-[40px] flex-1/12">{emp.status}</div>
          <div className="w-[40px] flex-2/12">{emp.position}</div>
          <div className="w-[40px] flex-2/12">{emp.branch}</div>
          <div className="w-[40px] flex-1/12">{emp.awalKontrak}</div>
          <div className="w-[40px] flex-1/12">{emp.akhirKontrak}</div>
          <div className="w-[40px] flex-1/12">
            <button className="p-1 transition duration-300 bg-red-600 rounded-sm active:scale-95 hover:scale-105 hover:bg-red-700">
              <FiX size={30} className="text-white" />
            </button>
            <Button className="p-0 m-0"></Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableEmployee;
