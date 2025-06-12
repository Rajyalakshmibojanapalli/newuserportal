// import { useLocation, useNavigate } from "react-router-dom";
// import { Sling as Hamburger } from "hamburger-react";
// import {
//   HiOutlineViewGrid,
//   HiOutlineClipboardList,
//   HiOutlineCalendar,
//   HiOutlineChartBar,
//   HiOutlineShieldCheck,
//   HiOutlineUser,
//   HiOutlineIdentification,
//   HiOutlineCash,
//   HiOutlineChatAlt2,
//   HiOutlineLogout,
// } from "react-icons/hi";
// import { useState, useEffect } from "react";

// const navItems = [
//   { name: "Dashboard", path: "/", icon: <HiOutlineViewGrid /> },
//   { name: "Wallet", path: "/wallet", icon: <HiOutlineClipboardList /> },
//   { name: "My Total Team", path: "/my-team", icon: <HiOutlineCalendar /> },
//   { name: "Buy History", path: "/buy-history", icon: <HiOutlineChartBar /> },
//   { name: "Security", path: "/security", icon: <HiOutlineShieldCheck /> },
//   { name: "Profile", path: "/profile", icon: <HiOutlineUser /> },
//   { name: "KYC", path: "/kyc", icon: <HiOutlineIdentification /> },
//   { name: "Withdrawal", path: "/withdrawal", icon: <HiOutlineCash /> },
//   { name: "Support", path: "/support", icon: <HiOutlineChatAlt2 /> },
//   { name: "Logout", icon: <HiOutlineLogout /> }, // No path
// ];

// function Sidebar({ onLogoutClick }) {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//       setIsOpen(window.innerWidth >= 768);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleNavClick = (item) => {
//     if (isMobile) setIsOpen(false);
//     if (item.name === "Logout") {
//       onLogoutClick();
//     } else if (item.path && location.pathname !== item.path) {
//       navigate(item.path);
//     }
//   };

//   return (
//     <>
//       {isMobile && !isOpen && (
//         <div className="fixed top-4 left-4 z-50">
//           <Hamburger
//             toggled={isOpen}
//             toggle={setIsOpen}
//             size={22}
//             color="#16A34A"
//           />
//         </div>
//       )}

//       {isMobile && isOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40"
//           onClick={() => setIsOpen(false)}
//         />
//       )}

//       <aside
//         className={`fixed top-0 left-0 bg-[#f7f7f7] flex flex-col z-40 transition-all duration-300 ease-in-out ${
//           isOpen ? "w-86" : "w-20"
//         } md:relative md:translate-x-0 md:w-auto mt-6 ml-3 mb-6`}
//         style={{
//           minWidth: isOpen ? "19rem" : "5rem",
//           borderRadius: "10px",
//           // maxHeight: "95vh",

//         }}
//       >
//         <div className={`flex items-center justify-between p-3`}>
//           <div
//             className={`flex items-center gap-1 ${
//               !isOpen ? "w-full justify-center" : ""
//             }`}
//           >
//             {isOpen && (
//               <h1 className="text-3xl font-bold text-[#20934a] select-none">
//                 JAIMAX
//               </h1>
//             )}
//           </div>
//           <div className="p-4 text-white">
//             <Hamburger
//               toggled={isOpen}
//               toggle={setIsOpen}
//               size={24}
//               color="black"
//             />
//           </div>
//         </div>

//         <nav className="flex-1 overflow-y-auto space-y-1 p-2">
//           <p
//             className={`text-xs text-black uppercase font-semibold px-3 mb-4 select-none ${
//               isOpen ? "" : "hidden"
//             }`}
//           >
//             Menu
//           </p>

//           {navItems.map((item) => (
//             <div
//               key={item.name}
//               onClick={() => handleNavClick(item)}
//               className={`cursor-pointer relative flex items-center px-4 py-2 font-semibold transition-colors ${
//                 isOpen ? "justify-start gap-5" : "justify-center"
//               } ${
//                 location.pathname === item.path
//                   ? "text-black"
//                   : "text-gray-500"
//               }`}
//               title={!isOpen ? item.name : undefined}
//             >
//               {location.pathname === item.path && (
//                 <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1.5 bg-[#20934a] rounded-r-full"></span>
//               )}
//               <span
//                 className={`text-2xl ${
//                   location.pathname === item.path
//                     ? "text-[#20934a]"
//                     : "text-gray-400"
//                 }`}
//               >
//                 {item.icon}
//               </span>
//               <span className={`${isOpen ? "block" : "hidden"} text-base`}>
//                 {item.name}
//               </span>
//             </div>
//           ))}
//         </nav>
//       </aside>
//     </>
//   );
// }

// export default Sidebar;
import { useLocation, useNavigate } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";
import {
  HiOutlineViewGrid,
  HiOutlineClipboardList,
  HiOutlineCalendar,
  HiOutlineChartBar,
  HiOutlineShieldCheck,
  HiOutlineUser,
  HiOutlineIdentification,
  HiOutlineCash,
  HiOutlineChatAlt2,
  HiOutlineLogout,
} from "react-icons/hi";
import { useState, useEffect } from "react";
import { FaHandshake } from "react-icons/fa";
import Dashboard from "../pages/dashBoard/dashBoard";

import MyTotalTeam from "../pages/myTotalTeam/myTotalTeam";
import Shareholders from "../pages/shareholders/shareholders";
import BuyHistory from "../pages/buyHistory/buyHistory";
import Security from "../pages/security/security";
import Profile from "../pages/profile/profile";
import Kyc from "../pages/kyc/kyc";
import WithDrawal from "../pages/widthDrawal/withDrawal";
import Support from "../pages/support/support";

const navItems = [
  { name: "Dashboard", path: "/dashboard", icon: <HiOutlineViewGrid /> },
  { name: "Wallet", path: "/wallet", icon: <HiOutlineClipboardList /> },
  { name: "My Total Team", path: "/my-team", icon: <HiOutlineCalendar /> },
  {name:"Share Holders", path:"/shareholders", icon:<FaHandshake />},
  { name: "Buy History", path: "/buy-history", icon: <HiOutlineChartBar /> },
  { name: "Security", path: "/security", icon: <HiOutlineShieldCheck /> },
  { name: "Profile", path: "/profile", icon: <HiOutlineUser /> },
  { name: "KYC", path: "/kyc", icon: <HiOutlineIdentification /> },
  { name: "Withdrawal", path: "/withdrawal", icon: <HiOutlineCash /> },
  { name: "Support", path: "/support", icon: <HiOutlineChatAlt2 /> },
  { name: "Logout", icon: <HiOutlineLogout /> },
];
import Wallet from "../../Dashboard/pages/wallet/wallet";
// const navItems = [
//   { name: "Dashboard", path: "/dashboard/user-dashboard", component: Dashboard },
//   { name: "Wallet", path: "/dashboard/wallet", component: Wallet },
//   { name: "My Total Team", path: "/dashboard/my-team", component: MyTotalTeam},
//   { name: "Share Holders", path: "/dashboard/shareholders", component: Shareholders },
//   { name: "Buy History", path: "/dashboard/buy-history", component: BuyHistory },
//   { name: "Security", path: "/dashboard/security", component: Security},
//   { name: "Profile", path: "/dashboard/profile", component: Profile },
//   { name: "KYC", path: "/dashboard/kyc", component: Kyc },
//   { name: "Withdrawal", path: "/dashboard/withdrawal", component: WithDrawal},
//   { name: "Support", path: "/dashboard/support", component: Support },
// ];

function Sidebar({ onLogoutClick }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      // Auto-open on desktop, auto-close on mobile
      setIsOpen(width >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (item) => {
    if (isMobile) setIsOpen(false);
    if (item.name === "Logout") {
      onLogoutClick();
    } else if (item.path && location.pathname !== item.path) {
      navigate(item.path);
    }
  };

  return (
    <>
      {/* Mobile hamburger button - only show on mobile when sidebar is closed */}
      {isMobile && !isOpen && (
        <div className="fixed top-4 left-4 z-50 bg-white rounded-lg shadow-lg p-2">
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            size={20}
            color="#16A34A"
          />
        </div>
      )}

      {/* Mobile overlay */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full  bg-[#f7f7f7] flex flex-col z-40 
          transition-all duration-300 ease-in-out shadow-lg
          ${isMobile 
            ? `${isOpen ? 'translate-x-0' : '-translate-x-full'} w-72` 
            : `${isOpen ? 'w-80' : 'w-20'} relative mt-6 ml-3 mb-6 rounded-lg`
          }
        `}
        style={{
          maxHeight: isMobile ? "100vh" : "95vh",
        }}
      >
        {/* Header */}
        <div className={`flex items-center justify-between p-4 border-b border-gray-200`}>
          <div className={`flex items-center ${!isOpen && !isMobile ? "w-full justify-center" : ""}`}>
            {(isOpen || isMobile) && (
              <h1 className="text-2xl sm:text-3xl font-bold text-[#20934a] select-none">
                JAIMAX
              </h1>
            )}
          </div>
          
          {/* Show hamburger only on desktop or when sidebar is open on mobile */}
          {(!isMobile || isOpen) && (
            <div className="flex-shrink-0">
              <Hamburger
                toggled={isOpen}
                toggle={setIsOpen}
                size={isMobile ? 22 : 24}
                color="#374151"
              />
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto space-y-1 p-4">
          {(isOpen || isMobile) && (
            <p className="text-xs text-gray-600 uppercase font-semibold mb-4 select-none">
              Menu
            </p>
          )}

          {navItems.map((item) => (
            <div
              key={item.name}
              onClick={() => handleNavClick(item)}
              className={`
                cursor-pointer relative flex items-center px-4 py-3 font-medium 
                transition-all duration-200 rounded-lg hover:bg-gray-100
                ${(isOpen || isMobile) ? "justify-start gap-4" : "justify-center"}
                ${location.pathname === item.path 
                  ? "text-[#20934a] bg-green-50" 
                  : "text-gray-600 hover:text-gray-900"
                }
              `}
              title={!isOpen && !isMobile ? item.name : undefined}
            >
              {/* Active indicator */}
              {location.pathname === item.path && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 bg-[#20934a] rounded-r-full"></span>
              )}
              
              {/* Icon */}
              <span className={`text-xl flex-shrink-0 ${
                location.pathname === item.path ? "text-[#20934a]" : "text-gray-500"
              }`}>
                {item.icon}
              </span>
              
              {/* Label */}
              {(isOpen || isMobile) && (
                <span className="text-sm font-medium truncate">
                  {item.name}
                </span>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}

export default Sidebar;