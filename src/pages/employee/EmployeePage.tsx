import Navbar from "@/components/navbar/Navbar";
import TableEmployee from "@/components/table/TableEmployee";

const EmployeePage = () => {
  return (
    <div className="w-full min-h-screen px-10 py-6 bg-gray-100 ">
      <Navbar />
      <TableEmployee />
    </div>
  );
};

export default EmployeePage;
