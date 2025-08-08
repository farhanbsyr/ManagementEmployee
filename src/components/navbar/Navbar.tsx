import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineForwardToInbox } from "react-icons/md";
import avatar from "@/assets/avatar-svgrepo-com.svg";
const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between p-4 bg-white  rubik rounded-xl">
      <div className="text-left">
        <h1 className="text-3xl font-bold rajdhani">Employee</h1>
        <p className="text-sm rubik">Manage your employee here</p>
      </div>
      <div className="flex flex-row items-center gap-4">
        <div className="flex flex-row gap-6">
          <MdOutlineForwardToInbox size={24} />
          <IoNotificationsOutline size={24} />
        </div>
        <div className="flex flex-row gap-2 ">
          <div className="bg-blue-100 rounded-full">
            <img src={avatar} alt="" width={45} />
          </div>
          <div className="flex flex-col text-left">
            <div className="text-base font-semibold">Farhan</div>
            <div className="text-sm font-light text-gray-400">
              farhanoke@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
