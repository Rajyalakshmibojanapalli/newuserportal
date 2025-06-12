// App.js
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./pages/dashBoard/dashBoard";
import Wallet from "./pages/wallet/wallet";
import MyTotalTeam from "./pages/myTotalTeam/myTotalTeam";
import BuyHistory from "./pages/buyHistory/buyHistory";
import Security from "./pages/security/security";
import Profile from "./pages/profile/profile";
import Kyc from "./pages/kyc/kyc";
import WithDrawal from "./pages/widthDrawal/withDrawal";
import Support from "./pages/support/support";
import Sidebar from "./components/sildeBar/Sidebar";
import Header from "./components/header/header";
import LogoutModal from "./pages/logout/logout";
import Shareholders from "./pages/shareholders/shareholders";

function  MainDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setShowLogoutModal(false);
    navigate("/"); 
  };

  return (

    <div className="relative flex h-screen bg-white overflow-hidden">

    <Sidebar
      isOpen={sidebarOpen}
      setIsOpen={setSidebarOpen}
      onLogoutClick={() => setShowLogoutModal(true)}
    />


  {/* Main Content */}
  <div
    className={`transition-all duration-300 ease-in-out flex-1 flex flex-col mr-3 ${
      sidebarOpen ? "lg:ml-64" : "lg:ml-5"
    } h-screen overflow-hidden`}
  >
    {/* Header with top margin */}
    <div className="mt-6 mb-3">
      <Header />
    </div>

    {/* Scrollable content below header */}
    <div className="flex-1 overflow-y-auto p-4 bg-[#f2f2f2] rounded-xl scrollbar-hide mb-3 mt-1">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/my-team" element={<MyTotalTeam />} />
        <Route path="/shareholders" element={<Shareholders/>}/>
        <Route path="/buy-history" element={<BuyHistory />} />
        <Route path="/security" element={<Security />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/kyc" element={<Kyc />} />
        <Route path="/withdrawal" element={<WithDrawal />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </div>
  </div>

  {/* Logout Modal */}
  {showLogoutModal && (
    <LogoutModal
      onCancel={() => setShowLogoutModal(false)}
      onConfirm={handleLogout}
    />
  )}
</div>

  );
}

export default MainDashboard;
