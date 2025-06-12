// import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
// import Navbar from './global/Navbar';
// import Footer from './global/Footer';
// import Home from './pages/home/Home';
// import Login from './Authentication/Login';
// import Register from './Authentication/Register';
// import Contact from './components/contact/Contact';
// import JaimaxSplash from './global/Splashscreen';
// import JaimaxComponent from './components/About/About';
// import FeaturesSection from './pages/home/HomeFeatures';
// import BlogLayout from './pages/home/Blog';
// import ServicesComponent from './pages/home/Homeservices';
// const AppContent = () => {
//   const location = useLocation();
//   const hideNavbarRoutes = ['/login', '/register'];
//   const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

//   return (
//     <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
//       {!shouldHideNavbar && <Navbar />}
//       <main style={{ flex: 1 }}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path='/about' element={<JaimaxComponent/>}/>
//           <Route path="/contact" element={<Contact />} />
//            <Route path="/features" element={<FeaturesSection />} />
//              <Route path="/blog" element={<BlogLayout />} />
//               <Route path="/services" element={<ServicesComponent />} />
//         </Routes>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// const App = () => {
//   const [showSplash, setShowSplash] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowSplash(false);
//     }, 4000);
//     return () => clearTimeout(timer);
//   }, []);

//   if (showSplash) {
//     return <JaimaxSplash />;
//   }

//   return (
//     <BrowserRouter>
//       <AppContent />
//     </BrowserRouter>
//   );
// };

// export default App;

// // App.js
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';

// // Global Components
// import Navbar from './global/Navbar';
// import Footer from './global/Footer';
// import JaimaxSplash from './global/Splashscreen';

// // Public Pages
// import Home from './pages/home/Home';
// import Login from './Authentication/Login';
// import Register from './Authentication/Register';
// import Contact from './components/contact/Contact';
// import JaimaxComponent from './components/About/About';
// import FeaturesSection from './pages/home/HomeFeatures';
// import BlogLayout from './pages/home/Blog';
// import ServicesComponent from './pages/home/Homeservices';

// // Dashboard Pages
// import Dashboard from './components/Dashboard/pages/dashBoard/dashBoard';
// import Wallet from './components/Dashboard/pages/wallet/wallet';
// import MyTotalTeam from './components/Dashboard/pages/myTotalTeam/myTotalTeam';
// import Shareholders from './components/Dashboard/pages/shareholders/shareholders';
// import BuyHistory from './components/Dashboard/pages/buyHistory/buyHistory';
// import Security from './components/Dashboard/pages/security/security';
// import Profile from './components/Dashboard/pages/profile/profile';
// import Kyc from './components/Dashboard/pages/kyc/kyc';
// import WithDrawal from './components/Dashboard/pages/widthDrawal/withDrawal';
// import Support from './components/Dashboard/pages/support/support';
// import Sidebar from './components/Dashboard/sildeBar/Sidebar';
// import Header from './components/Dashboard/header/header';
// import LogoutModal from './components/Dashboard/pages/logout/logout';

// // Redux Store
// import { Provider } from 'react-redux';
// import { store } from './components/Dashboard/storeJs/store';

// const PublicApp = () => {
//   const location = useLocation();
//   const hideNavbarRoutes = ['/login', '/register'];
//   const shouldHideNavbar = hideNavbarRoutes.some(route =>
//     location.pathname.startsWith(route)
//   );

//   return (
//     <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
//       {!shouldHideNavbar && <Navbar />}
//       <main style={{ flex: 1 }}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/about" element={<JaimaxComponent />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/features" element={<FeaturesSection />} />
//           <Route path="/blog" element={<BlogLayout />} />
//           <Route path="/services" element={<ServicesComponent />} />
//         </Routes>
//       </main>
//       {!shouldHideNavbar && <Footer />}
//     </div>
//   );
// };

// const DashboardApp = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [showLogoutModal, setShowLogoutModal] = useState(false);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     setShowLogoutModal(false);
//     navigate('/'); // Redirect to home on logout
//   };

//   return (
//     <Provider store={store}>
//       <div className="relative flex h-screen bg-white overflow-hidden">
//         <Sidebar
//           isOpen={sidebarOpen}
//           setIsOpen={setSidebarOpen}
//           onLogoutClick={() => setShowLogoutModal(true)}
//         />
//         <div
//           className={`transition-all duration-300 ease-in-out flex-1 flex flex-col mr-3 ${
//             sidebarOpen ? 'lg:ml-64' : 'lg:ml-5'
//           } h-screen overflow-hidden`}
//         >
//           <div className="mt-6 mb-3">
//             <Header />
//           </div>
//           <div className="flex-1 overflow-y-auto p-4 bg-[#f2f2f2] rounded-xl scrollbar-hide mb-3 mt-1">
//             <Routes>
//               <Route path="/dashboard" element={<Dashboard />} />
//               <Route path="/wallet" element={<Wallet />} />
//               <Route path="/my-team" element={<MyTotalTeam />} />
//               <Route path="/shareholders" element={<Shareholders />} />
//               <Route path="/buy-history" element={<BuyHistory />} />
//               <Route path="/security" element={<Security />} />
//               <Route path="/profile" element={<Profile />} />
//               <Route path="/kyc" element={<Kyc />} />
//               <Route path="/withdrawal" element={<WithDrawal />} />
//               <Route path="/support" element={<Support />} />
//             </Routes>
//           </div>
//         </div>
//         {showLogoutModal && (
//           <LogoutModal
//             onCancel={() => setShowLogoutModal(false)}
//             onConfirm={handleLogout}
//           />
//         )}
//       </div>
//     </Provider>
//   );
// };

// const App = () => {
//   const [showSplash, setShowSplash] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowSplash(false);
//     }, 4000);
//     return () => clearTimeout(timer);
//   }, []);

//   if (showSplash) {
//     return <JaimaxSplash />;
//   }

//   return (
//     <BrowserRouter>
//       <AppRouter />
//     </BrowserRouter>
//   );
// };

// const AppRouter = () => {
//   const location = useLocation();
//   // Decide if this is a dashboard route based on the pathname
//   const isDashboard = location.pathname.startsWith('/dashboard');

//   return isDashboard ? <DashboardApp /> : <PublicApp />;
// };

// export default App;

// // App.js
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';

// // Global Components
// import Navbar from './global/Navbar';
// import Footer from './global/Footer';
// import JaimaxSplash from './global/Splashscreen';

// // Public Pages
// import Home from './pages/home/Home';
// import Login from './Authentication/Login';
// import Register from './Authentication/Register';
// import Contact from './components/contact/Contact';
// import JaimaxComponent from './components/About/About';
// import FeaturesSection from './pages/home/HomeFeatures';
// import BlogLayout from './pages/home/Blog';
// import ServicesComponent from './pages/home/Homeservices';

// // Dashboard Pages
// import Dashboard from './components/Dashboard/pages/dashBoard/dashBoard';
// import Wallet from './components/Dashboard/pages/wallet/wallet';
// import MyTotalTeam from './components/Dashboard/pages/myTotalTeam/myTotalTeam';
// import Shareholders from './components/Dashboard/pages/shareholders/shareholders';
// import BuyHistory from './components/Dashboard/pages/buyHistory/buyHistory';
// import Security from './components/Dashboard/pages/security/security';
// import Profile from './components/Dashboard/pages/profile/profile';
// import Kyc from './components/Dashboard/pages/kyc/kyc';
// import WithDrawal from './components/Dashboard/pages/widthDrawal/withDrawal';
// import Support from './components/Dashboard/pages/support/support';
// import Sidebar from './components/Dashboard/sildeBar/Sidebar';
// import Header from './components/Dashboard/header/header';
// import LogoutModal from './components/Dashboard/pages/logout/logout';

// // Redux Store
// import { Provider } from 'react-redux';
// import { store } from './components/Dashboard/storeJs/store';

// const App = () => {
//   const [showSplash, setShowSplash] = useState(true);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [showLogoutModal, setShowLogoutModal] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowSplash(false);
//     }, 4000);
//     return () => clearTimeout(timer);
//   }, []);

//   const handleLogout = () => {
//     setShowLogoutModal(false);
//     navigate('/');
//   };

//   const isDashboardRoute = location.pathname.startsWith('/dashboard');
//   const hideNavbarRoutes = ['/login', '/register'];
//   const shouldHideNavbar = hideNavbarRoutes.some(route =>
//     location.pathname.startsWith(route)
//   );

//   if (showSplash) {
//     return <JaimaxSplash />;
//   }

//   return (
//     <Provider store={store}>
//       <div className="min-h-screen flex flex-col">
//         {/* Navbar and Footer only on public routes */}
//         {!isDashboardRoute && !shouldHideNavbar && <Navbar />}

//         {/* Dashboard Sidebar/Header on dashboard routes */}
//         {isDashboardRoute && (
//           <div className="flex h-screen bg-white overflow-hidden">
//             <Sidebar
//               isOpen={sidebarOpen}
//               setIsOpen={setSidebarOpen}
//               onLogoutClick={() => setShowLogoutModal(true)}
//             />
//             <div
//               className={`transition-all duration-300 ease-in-out flex-1 flex flex-col mr-3 ${
//                 sidebarOpen ? 'lg:ml-64' : 'lg:ml-5'
//               } h-screen overflow-hidden`}
//             >
//               <div className="mt-6 mb-3">
//                 <Header />
//               </div>
//               <div className="flex-1 overflow-y-auto p-4 bg-[#f2f2f2] rounded-xl scrollbar-hide mb-3 mt-1">
//                 <Routes>
//                   {/* Dashboard Routes */}
//                   <Route path="/dashboard/user-dashboard" element={<Dashboard />} />
//                   <Route path="/dashboard/wallet" element={<Wallet />} />
//                   <Route path="/dashboard/my-team" element={<MyTotalTeam />} />
//                   <Route path="/dashboard/shareholders" element={<Shareholders />} />
//                   <Route path="/dashboard/buy-history" element={<BuyHistory />} />
//                   <Route path="/dashboard/security" element={<Security />} />
//                   <Route path="/dashboard/profile" element={<Profile />} />
//                   <Route path="/dashboard/kyc" element={<Kyc />} />
//                   <Route path="/dashboard/withdrawal" element={<WithDrawal />} />
//                   <Route path="/dashboard/support" element={<Support />} />

//                   {/* Public Routes */}
//                   <Route path="/" element={<Home />} />
//                   <Route path="/login" element={<Login />} />
//                   <Route path="/register" element={<Register />} />
//                   <Route path="/about" element={<JaimaxComponent />} />
//                   <Route path="/contact" element={<Contact />} />
//                   <Route path="/features" element={<FeaturesSection />} />
//                   <Route path="/blog" element={<BlogLayout />} />
//                   <Route path="/services" element={<ServicesComponent />} />
//                 </Routes>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Public Routes Container */}
//         {!isDashboardRoute && (
//           <main style={{ flex: 1 }}>
//             <Routes>
//               {/* Public Routes */}
//               <Route path="/" element={<Home />} />
//               <Route path="/login" element={<Login />} />
//               <Route path="/register" element={<Register />} />
//               <Route path="/about" element={<JaimaxComponent />} />
//               <Route path="/contact" element={<Contact />} />
//               <Route path="/features" element={<FeaturesSection />} />
//               <Route path="/blog" element={<BlogLayout />} />
//               <Route path="/services" element={<ServicesComponent />} />
//             </Routes>
//           </main>
//         )}

//         {!isDashboardRoute && !shouldHideNavbar && <Footer />}

//         {/* Logout Modal */}
//         {showLogoutModal && (
//           <LogoutModal
//             onCancel={() => setShowLogoutModal(false)}
//             onConfirm={handleLogout}
//           />
//         )}
//       </div>
//     </Provider>
//   );
// };

// const AppWrapper = () => (
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );

// export default AppWrapper;



// // App.js
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// // Public/Landing components
// import Navbar from './global/Navbar';
// import Footer from './global/Footer';
// import Home from './pages/home/Home';
// import Login from './Authentication/Login';
// import Register from './Authentication/Register';
// import Contact from './components/contact/Contact';
// import JaimaxSplash from './global/Splashscreen';
// import JaimaxComponent from './components/About/About';
// import FeaturesSection from './pages/home/HomeFeatures';
// import BlogLayout from './pages/home/Blog';
// import ServicesComponent from './pages/home/Homeservices';


// import Dashboard from "./components/Dashboard/pages/dashBoard/dashBoard";
// import Wallet from './components/Dashboard/pages/wallet/wallet';
// import MyTotalTeam from './components/Dashboard/pages/myTotalTeam/myTotalTeam';
// import BuyHistory from './components/Dashboard/pages/buyHistory/buyHistory';
// import Security from './components/Dashboard/pages/security/security';
// import Profile from './components/Dashboard/pages/profile/profile';
// import Kyc from './components/Dashboard/pages/kyc/kyc';
// import WithDrawal from './components/Dashboard/pages/widthDrawal/withDrawal';
// import Support from './components/Dashboard/pages/support/support';
// import Sidebar from './components/Dashboard/sildeBar/Sidebar';
// import Header from './components/Dashboard/header/header';
// import LogoutModal from './components/Dashboard/pages/logout/logout';
// import Shareholders from './components/Dashboard/pages/shareholders/shareholders';

// // Dashboard Layout Component
// const DashboardLayout = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [showLogoutModal, setShowLogoutModal] = useState(false);

//   const handleLogout = () => {
//     setShowLogoutModal(false);
//     // You can add logout logic here later
//     window.location.href = '/'; // Simple redirect to home
//   };

//   return (
//     <div className="relative flex h-screen bg-white overflow-hidden">
//       <Sidebar 
//         isOpen={sidebarOpen}
//         setIsOpen={setSidebarOpen}
//         onLogoutClick={() => setShowLogoutModal(true)}
//       />
      
//       {/* Main Content */}
//       <div
//         className={`transition-all duration-300 ease-in-out flex-1 flex flex-col mr-3 ${
//           sidebarOpen ? "lg:ml-64" : "lg:ml-5"
//         } h-screen overflow-hidden`}
//       >
//         {/* Header with top margin */}
//         <div className="mt-6 mb-3">
//           <Header />
//         </div>
        
//         {/* Scrollable content below header */}
//         <div className="flex-1 overflow-y-auto p-4 bg-[#f2f2f2] rounded-xl scrollbar-hide mb-3 mt-1">
//           <Routes>
//             <Route path="/dashboard" element={<Dashboard/>} />
//             <Route path="/wallet" element={<Wallet />} />
//             <Route path="/my-team" element={<MyTotalTeam />} />
//             <Route path="/shareholders" element={<Shareholders />} />
//             <Route path="/buy-history" element={<BuyHistory />} />
//             <Route path="/security" element={<Security />} />
//             <Route path="/profile" element={<Profile />} />
//             <Route path="/kyc" element={<Kyc />} />
//             <Route path="/withdrawal" element={<WithDrawal />} />
//             <Route path="/support" element={<Support />} />
//           </Routes>
//         </div>
//       </div>
      
//       {/* Logout Modal */}
//       {showLogoutModal && (
//         <LogoutModal
//           onCancel={() => setShowLogoutModal(false)}
//           onConfirm={handleLogout}
//         />
//       )}
//     </div>
//   );
// };

// // Public Layout Component
// const PublicLayout = () => {
//   const location = useLocation();
//   const hideNavbarRoutes = ['/login', '/register'];
//   const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

//   return (
//     <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
//       {!shouldHideNavbar && <Navbar />}
//       <main style={{ flex: 1 }}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/about" element={<JaimaxComponent />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/features" element={<FeaturesSection />} />
//           <Route path="/blog" element={<BlogLayout />} />
//           <Route path="/services" element={<ServicesComponent />} />
//         </Routes>
//       </main>
//       {!shouldHideNavbar && <Footer />}
//     </div>
//   );
// };

// // Main App Content Component
// const AppContent = () => {
//   const location = useLocation();

//   // Check if current route is a dashboard route
//   const isDashboardRoute = location.pathname.startsWith('/dashboard') || 
//                           location.pathname.startsWith('/wallet') ||
//                           location.pathname.startsWith('/my-team') ||
//                           location.pathname.startsWith('/shareholders') ||
//                           location.pathname.startsWith('/buy-history') ||
//                           location.pathname.startsWith('/security') ||
//                           location.pathname.startsWith('/profile') ||
//                           location.pathname.startsWith('/kyc') ||
//                           location.pathname.startsWith('/withdrawal') ||
//                           location.pathname.startsWith('/support');

//   return (
//     <Routes>
//       {/* Dashboard Routes */}
//       <Route path="/dashboard/*" element={<DashboardLayout />} />
//       <Route path="/wallet/" element={<DashboardLayout />} />
//       <Route path="/my-team/*" element={<DashboardLayout />} />
//       <Route path="/shareholders/*" element={<DashboardLayout />} />
//       <Route path="/buy-history/*" element={<DashboardLayout />} />
//       <Route path="/security/*" element={<DashboardLayout />} />
//       <Route path="/profile/*" element={<DashboardLayout />} />
//       <Route path="/kyc/*" element={<DashboardLayout />} />
//       <Route path="/withdrawal/*" element={<DashboardLayout />} />
//       <Route path="/support/*" element={<DashboardLayout />} />
      
//       {/* Public Routes */}
//       <Route path="/*" element={<PublicLayout />} />
//     </Routes>
//   );
// };

// // Main App Component
// const App = () => {
//   const [showSplash, setShowSplash] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowSplash(false);
//     }, 4000);
//     return () => clearTimeout(timer);
//   }, []);

//   if (showSplash) {
//     return <JaimaxSplash />;
//   }

//   return (
//     <BrowserRouter>
//       <AppContent />
//     </BrowserRouter>
//   );
// };

// export default App;


// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Outlet } from 'react-router-dom';

// Public/Landing components
import Navbar from './global/Navbar';
import Footer from './global/Footer';
import Home from './pages/home/Home';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import Contact from './components/contact/Contact';
import JaimaxSplash from './global/Splashscreen';
import JaimaxComponent from './components/About/About';
import FeaturesSection from './pages/home/HomeFeatures';
import BlogLayout from './pages/home/Blog';
import ServicesComponent from './pages/home/Homeservices';

// Dashboard components
import Dashboard from "./components/Dashboard/pages/dashBoard/dashBoard";
import Wallet from './components/Dashboard/pages/wallet/wallet';
import MyTotalTeam from './components/Dashboard/pages/myTotalTeam/myTotalTeam';
import BuyHistory from './components/Dashboard/pages/buyHistory/buyHistory';
import Security from './components/Dashboard/pages/security/security';
import Profile from './components/Dashboard/pages/profile/profile';
import Kyc from './components/Dashboard/pages/kyc/kyc';
import WithDrawal from './components/Dashboard/pages/widthDrawal/withDrawal';
import Support from './components/Dashboard/pages/support/support';
import Sidebar from './components/Dashboard/sildeBar/Sidebar';
import Header from './components/Dashboard/header/header';
import LogoutModal from './components/Dashboard/pages/logout/logout';
import Shareholders from './components/Dashboard/pages/shareholders/shareholders';
import ServicesFlipCards from './components/Services/services';

// Dashboard Layout Component
const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    setShowLogoutModal(false);
    window.location.href = '/';
  };

  return (
    <div className="relative flex h-screen bg-white overflow-hidden">
      <Sidebar 
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
        onLogoutClick={() => setShowLogoutModal(true)}
      />
      
      <div
        className={`transition-all duration-300 ease-in-out flex-1 flex flex-col mr-3 ${
          sidebarOpen ? "lg:ml-64" : "lg:ml-5"
        } h-screen overflow-hidden`}
      >
        <div className="mt-6 mb-3">
          <Header />
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 bg-[#f2f2f2] rounded-xl scrollbar-hide mb-3 mt-1">
          <Outlet />
        </div>
      </div>
      
      {showLogoutModal && (
        <LogoutModal
          onCancel={() => setShowLogoutModal(false)}
          onConfirm={handleLogout}
        />
      )}
    </div>
  );
};

// Public Layout Component
const PublicLayout = () => {
  const location = useLocation();
  const hideNavbarRoutes = ['/login', '/register'];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {!shouldHideNavbar && <Navbar />}
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      {!shouldHideNavbar && <Footer />}
    </div>
  );
};

// Main App Component
const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <JaimaxSplash />;
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Dashboard Routes - Both with and without /dashboard prefix */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="my-team" element={<MyTotalTeam />} />
          <Route path="shareholders" element={<Shareholders />} />
          <Route path="buy-history" element={<BuyHistory />} />
          <Route path="security" element={<Security />} />
          <Route path="profile" element={<Profile />} />
          <Route path="kyc" element={<Kyc />} />
          <Route path="withdrawal" element={<WithDrawal />} />
          <Route path="support" element={<Support />} />
        </Route>
        
        {/* Direct Dashboard Routes (without /dashboard prefix) */}
        <Route path="/wallet" element={<DashboardLayout />}>
          <Route index element={<Wallet />} />
        </Route>
        <Route path="/my-team" element={<DashboardLayout />}>
          <Route index element={<MyTotalTeam />} />
        </Route>
        <Route path="/shareholders" element={<DashboardLayout />}>
          <Route index element={<Shareholders />} />
        </Route>
        <Route path="/buy-history" element={<DashboardLayout />}>
          <Route index element={<BuyHistory />} />
        </Route>
        <Route path="/security" element={<DashboardLayout />}>
          <Route index element={<Security />} />
        </Route>
        <Route path="/profile" element={<DashboardLayout />}>
          <Route index element={<Profile />} />
        </Route>
        <Route path="/kyc" element={<DashboardLayout />}>
          <Route index element={<Kyc />} />
        </Route>
        <Route path="/withdrawal" element={<DashboardLayout />}>
          <Route index element={<WithDrawal />} />
        </Route>
        <Route path="/support" element={<DashboardLayout />}>
          <Route index element={<Support />} />
        </Route>
        
        {/* Public Routes */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="about" element={<JaimaxComponent />} />
          <Route path="contact" element={<Contact />} />
          <Route path="features" element={<FeaturesSection />} />
          <Route path="blog" element={<BlogLayout />} />
          <Route path="services" element={<ServicesFlipCards />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;