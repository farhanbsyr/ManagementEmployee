import Navbar from "@/components/navbar/Navbar";
import Employee from "@/components/table/Employee";

const Home = () => {
  return (
    <div className="bg-gray-100 w-full min-h-screen px-10 py-6 ">
      <Navbar />
      <Employee />
    </div>
  );
};

export default Home;
