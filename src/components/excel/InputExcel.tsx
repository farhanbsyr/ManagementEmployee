import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import axios from "axios";
import type { employeeType } from "@/types";

interface InputExcelProps {
  setDataEmployee: React.Dispatch<React.SetStateAction<employeeType[]>>;
}

const InputExcel: React.FC<InputExcelProps> = ({ setDataEmployee }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    const file = e.target.files?.[0];
    console.log(file);

    if (!file) return;

    const allowedExtensions: string[] = ["xlsx", "xls"];
    const fileExtension: string =
      file.name.split(".").pop()?.toLowerCase() ?? "";
    console.log(fileExtension);

    const allowedMimeTypes = [
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // .xlsx
      "application/vnd.ms-excel",
    ];

    if (
      fileExtension.length == 0 ||
      !allowedExtensions.includes(fileExtension) ||
      !allowedMimeTypes.includes(file.type)
    ) {
      setError("Hanya file Excel (.xlsx, .xls)");
      setSelectedFile(null);
      e.target.value = "";
      return;
    }

    setError("");
    setSelectedFile(file);
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      setError("Pilih file terlebih dahulu.");
      return;
    }

    const formData = new FormData();
    formData.append("excel", selectedFile);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Upload berhasil!");
      setDataEmployee(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
      setError("Gagal upload file.");
    }
  };
  return (
    <div className="inline-flex flex-col p-4 bg-white gap-2 w-[300px] ">
      <label htmlFor="fileEmployee" className="font-bold rajdhani">
        Input Employee
      </label>
      <div className="inline-flex gap-4 rubik ">
        <Input
          id="fileEmployee"
          type="file"
          accept=".xls, .xlsx"
          onChange={handleFileChange}
        />
        <Button className="bg-blue-600" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
      {error && <p className="mt-2 text-red-600 text-[12px]">{error}</p>}
    </div>
  );
};

export default InputExcel;
