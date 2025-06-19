// import React from 'react';
// import TeamCollaboration from '../dashBoard/teamWorkPanel/teamWorkPanel';
// import assets from '../../../../assets/assets';

// const MyTotalTeam = () => {
//   const infoBoxes = [
//     {
//       title: "Total Active Members",
//       value: 24,
//       description: "Total active team members",
//       image: assets.teamMembers,
//       shapes: ['circle', 'triangle'],
//       iconBg: 'bg-gradient-to-tr from-[#0a6e74] to-[#4ecdc4]',  // tealish
//     },
//     {
//       title: "Foundation",
//       value: "15%",
//       description: "Increase compared to last month",
//       image: assets.foundation,
//       shapes: ['square', 'diamond'],
//       iconBg: 'bg-gradient-to-tr from-[#0a6e74] to-[#4ecdc4]', // purpleish
//     },
//     {
//       title: "Pending Requests",
//       value: 4,
//       description: "Awaiting your action",
//       image: 'https://jaimax.com/images/withDraw.svg',
//       shapes: ['pentagon', 'ellipse'],
//       iconBg: 'bg-gradient-to-tr from-[#0a6e74] to-[#4ecdc4]', // reddish
//     },
//   ];

//   // Darker shapes base styles
//   const shapeBaseStyles = {
//     position: 'absolute',
//     backgroundColor: 'white', // dark color for shapes
//     opacity: 0.1,               // slightly more visible
//     pointerEvents: 'none',
//     transition: 'opacity 0.3s ease, transform 3s ease-in-out',
//     zIndex: 0,
//     animationIterationCount: 'infinite',
//     animationDirection: 'alternate',
//     willChange: 'transform',
//   };

//   const shapeStyles = {
//  circle: {
//     width: '6rem',
//     height: '6rem',
//     borderRadius: '50%',
//     backgroundColor: '#084e54',
//     animationName: 'floatUpDown',
//     animationDuration: '6s',
//   },
//   triangle: {
//     width: 0,
//     height: 0,
//     borderLeft: '3rem solid transparent',
//     borderRight: '3rem solid transparent',
//     borderBottom: '5rem solid #084e54',
//     animationName: 'floatLeftRight',
//     animationDuration: '5s',
//   },
//   square: {
//     width: '6rem',
//     height: '6rem',
//     backgroundColor: '#084e54',
//     animationName: 'floatUpDown',
//     animationDuration: '7s',
//   },
//   pentagon: {
//     width: '6rem',
//     height: '6rem',
//     backgroundColor: '#084e54', 
//     clipPath: 'polygon(50% 0%, 95% 35%, 77% 90%, 23% 90%, 5% 35%)',
//     animationName: 'floatLeftRight',
//     animationDuration: '6.5s',
//   },
//   diamond: {
//     width: '5rem',
//     height: '5rem',
//     backgroundColor: '#084e54', 
//     transform: 'rotate(45deg)',
//     animationName: 'floatUpDown',
//     animationDuration: '5.5s',
//   },
//   ellipse: {
//     width: '7rem',
//     height: '4rem',
//     backgroundColor: '#084e54', 
//     borderRadius: '50% / 100%',
//     animationName: 'floatLeftRight',
//     animationDuration: '6s',
//   },
//   };

//   const shapePositions = [
//     { top: '-1.5rem', right: '-1.5rem' },
//     { bottom: '-1.5rem', left: '-1.5rem' },
//   ];

//   return (
//   <>
//   <style>
//     {`
//       /* 2-column layout below 1330px */
//       @media (max-width: 1330px) {
//         .custom-grid {
//           grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
//         }
//       }

//       /* 1-column layout below 960px */
//       @media (max-width: 960px) {
//         .custom-grid {
//           grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
//         }
//       }
//     `}
//   </style>

//   <div className="w-full  bg-[#1d8e85]  min-h-screen space-y-6 px-4 py-6">
//     {/* Cards grid with manual control */}
//     <div className="grid custom-grid grid-cols-1 xl:grid-cols-3 gap-6">
//       {infoBoxes.map((box, idx) => (
//         <div
//           key={idx}
//           className="group cursor-pointer relative p-6 rounded-xl shadow-lg text-[#084e54] overflow-hidden flex flex-col justify-between
//             bg-white transition duration-300 ease-in-out hover:bg-white hover:shadow-2xl hover:scale-[1.03] min-w-[250px] w-full"
//         >
//           {/* Background shapes */}
//           {box.shapes.map((shape, i) => (
//             <div
//               key={i}
//               style={{
//                 ...shapeBaseStyles,
//                 ...shapeStyles[shape],
//                 ...shapePositions[i],
//               }}
//               className="group-hover:opacity-100 opacity-30"
//             />
//           ))}

//           {/* Text block with right padding to avoid image overlap */}
//           <div className="z-10 pr-20">
//             <div className="text-lg font-semibold mb-1 group-hover:text-[#043739]">{box.title}</div>
//             <div className="text-3xl font-bold mb-1 group-hover:text-[#043739]">{box.value}</div>
//             <div className="text-sm text-[#1d4d4f] group-hover:text-[#0c2e2f]">{box.description}</div>
//           </div>

//           {/* Image inside gradient background */}
//           <div
//             className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center border-4 border-white z-10 ${box.iconBg}`}
//           >
//             <img
//               src={box.image}
//               alt={box.title}
//               className="w-14 h-14 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
//             />
//           </div>
//         </div>
//       ))}
//     </div>

//     {/* Team collaboration panel */}
//     <div className="mt-6">
//       <TeamCollaboration />
//     </div>
//   </div>
// </>
//   );
// };

// export default MyTotalTeam;
import React, { useEffect, useState } from 'react';
import membersImage from "../../../../assets/members.svg";
import referralImage from "../../../../assets/referral.svg";

const MyTotalTeam = () => {
  const [userData, setUserData] = useState({
    username: "JaimaxUser001",
  });

  // Dummy values instead of API
  const totalUsers = 42;
  const totalChainUsers = 17;

  const infoBoxes = [
    {
      title: "Total Active Members",
      value: totalUsers,
      description: "Active team members",
      image: membersImage,
      iconBg: "bg-gradient-to-br from-blue-400 to-blue-600",
      shapes: ['circle', 'triangle']
    },
    {
      title: "Foundation",
      value: totalChainUsers,
      description: "Foundation members",
      image: referralImage,
      iconBg: "bg-gradient-to-br from-green-400 to-green-600",
      shapes: ['square', 'pentagon']
    },
    {
      title: "Referral Code",
      value: userData.username,
      description: "Your unique referral code",
      image: referralImage,
      iconBg: "bg-gradient-to-br from-purple-400 to-purple-600",
      shapes: ['diamond', 'ellipse']
    }
  ];

  const shapeBaseStyles = {
    position: 'absolute',
    backgroundColor: 'white',
    opacity: 0.1,
    pointerEvents: 'none',
    transition: 'opacity 0.3s ease, transform 3s ease-in-out',
    zIndex: 0,
    animationIterationCount: 'infinite',
    animationDirection: 'alternate',
    willChange: 'transform',
  };

  const shapeStyles = {
    circle: {
      width: '6rem',
      height: '6rem',
      borderRadius: '50%',
      backgroundColor: '#084e54',
      animationName: 'floatUpDown',
      animationDuration: '6s',
    },
    triangle: {
      width: 0,
      height: 0,
      borderLeft: '3rem solid transparent',
      borderRight: '3rem solid transparent',
      borderBottom: '5rem solid #084e54',
      animationName: 'floatLeftRight',
      animationDuration: '5s',
    },
    square: {
      width: '6rem',
      height: '6rem',
      backgroundColor: '#084e54',
      animationName: 'floatUpDown',
      animationDuration: '7s',
    },
    pentagon: {
      width: '6rem',
      height: '6rem',
      backgroundColor: '#084e54',
      clipPath: 'polygon(50% 0%, 95% 35%, 77% 90%, 23% 90%, 5% 35%)',
      animationName: 'floatLeftRight',
      animationDuration: '6.5s',
    },
    diamond: {
      width: '5rem',
      height: '5rem',
      backgroundColor: '#084e54',
      transform: 'rotate(45deg)',
      animationName: 'floatUpDown',
      animationDuration: '5.5s',
    },
    ellipse: {
      width: '7rem',
      height: '4rem',
      backgroundColor: '#084e54',
      borderRadius: '50% / 100%',
      animationName: 'floatLeftRight',
      animationDuration: '6s',
    },
  };

  const shapePositions = [
    { top: '-1.5rem', right: '-1.5rem' },
    { bottom: '-1.5rem', left: '-1.5rem' },
  ];

  // Dummy team members
  const teamMembers = [
    {
      name: "Alice Johnson",
      task: "Design System",
      status: "Active",
      avatar: "https://i.pravatar.cc/100?img=1",
      bg: "bg-green-500",
      badge: "bg-green-200 text-green-800"
    },
    {
      name: "Bob Smith",
      task: "Backend API",
      status: "Idle",
      avatar: "https://i.pravatar.cc/100?img=2",
      bg: "bg-yellow-500",
      badge: "bg-yellow-200 text-yellow-800"
    },
    {
      name: "Charlie Davis",
      task: "Frontend UI",
      status: "Offline",
      avatar: "https://i.pravatar.cc/100?img=3",
      bg: "bg-red-500",
      badge: "bg-red-200 text-red-800"
    }
  ];

  return (
    <>
      <style>
        {`
          @media (max-width: 1330px) {
            .custom-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            }
          }
          @media (max-width: 960px) {
            .custom-grid {
              grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
            }
          }
          .hide-scrollbar {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>

      <div className="w-full bg-[#1d8e85] min-h-screen space-y-6 px-4 py-6">
        {/* Info Boxes */}
        <div className="grid custom-grid grid-cols-1 xl:grid-cols-3 gap-6">
          {infoBoxes.map((box, idx) => (
            <div
              key={idx}
              className="group cursor-pointer relative p-6 rounded-xl shadow-lg text-[#084e54] overflow-hidden flex flex-col justify-between
              bg-white transition duration-300 ease-in-out hover:bg-white hover:shadow-2xl hover:scale-[1.03]"
            >
              {box.shapes.map((shape, i) => (
                <div
                  key={i}
                  style={{
                    ...shapeBaseStyles,
                    ...shapeStyles[shape],
                    ...shapePositions[i],
                  }}
                  className="group-hover:opacity-100 opacity-30"
                />
              ))}

              <div className="z-10 pr-20">
                <div className="text-lg font-semibold mb-1 group-hover:text-[#043739]">{box.title}</div>
                <div className="text-3xl font-bold mb-1 group-hover:text-[#043739]">{box.value}</div>
                <div className="text-sm text-[#1d4d4f] group-hover:text-[#0c2e2f]">{box.description}</div>
              </div>

              <div
                className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center border-4 border-white z-10 ${box.iconBg}`}
              >
                <img
                  src={box.image}
                  alt={box.title}
                  className="w-14 h-14 object-contain opacity-80 group-hover:opacity-100"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Team Members Panel */}
        <div className="p-6 rounded-xl shadow-md bg-white/30 backdrop-blur-md border border-white/40 max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6 flex-wrap gap-2">
            <div className="font-semibold text-xl text-white">Team Members</div>
            <button className="px-4 py-2 text-sm text-white rounded-full bg-[#26a69a]">
              + Add Member
            </button>
          </div>

          <div className="relative max-h-[40rem] overflow-y-auto hide-scrollbar">
            <div className="sticky top-0 h-[2px] bg-gradient-to-r from-white/30 via-white/80 to-white/30 z-10" />

            <ul className="space-y-5 pt-2">
              {teamMembers.map((member, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-between flex-wrap gap-4"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className={`w-12 h-12 rounded-full ${member.bg} flex items-center justify-center`}>
                      <img src={member.avatar} alt={member.name} className="w-10 h-10 rounded-full" />
                    </div>
                    <div>
                      <div className="text-base font-medium text-white">{member.name}</div>
                      <div className="text-sm text-white">
                        Working on <span className="font-semibold">{member.task}</span>
                      </div>
                    </div>
                  </div>
                  <span className={`text-sm px-4 py-1.5 rounded-full ${member.badge}`}>
                    {member.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyTotalTeam;
