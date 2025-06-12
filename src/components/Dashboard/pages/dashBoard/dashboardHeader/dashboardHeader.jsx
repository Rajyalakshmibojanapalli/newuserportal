import React from "react";
import {
    FaBell,
    FaEnvelope,

} from "react-icons/fa";



const DashboardHeader = () => (
    <div className="flex flex-col md:flex-row justify-between gap-4 p-2 rounded-lg shadow-md items-center mb-3 bg-white
                  flex-grow w-full
                  max-w-none
                  mx-0
                  ">

        <input
            type="text"
            placeholder="Search task"
            className="px-4 py-2 rounded-full border w-full md:w-1/3 shadow-sm"
        />
        <div className="flex items-center space-x-4">
            <FaEnvelope className="text-xl" />
            <FaBell className="text-xl" />
            <div className="flex items-center space-x-2">
                <img
                    src="https://i.pravatar.cc/40"
                    alt="avatar"
                    className="rounded-full w-10 h-10"
                />
                <div className="hidden sm:block">
                    {/* Hide on xs screens for better space */}
                    <div className="font-semibold">Totok Michael</div>
                    <div className="text-sm text-gray-500">tmichael20@mail.com</div>
                </div>
            </div>
        </div>
    </div>
);



export default DashboardHeader;