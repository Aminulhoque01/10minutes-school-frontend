// "use client";
// import {
//   default as logo,
//   default as userIcon,
// } from "@/assets/hero/10mslogo-svg.svg";
// import { loggedUser, logoutUser } from "@/redux/features/auth/authSlice";
// import { ImageBaseUrl } from "@/redux/features/blog/ImageBaseUrl";
// import { useGetMyProfileQuery } from "@/redux/features/profile/profileApi";
// import { useAppDispatch, useAppSelector } from "@/redux/hooks";
// import Cookies from "js-cookie";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import { IoIosSearch } from "react-icons/io";

// const navLinks = [
//   { name: "Home, Heim", href: "/" },
//   { name: "Services, Dienstleistungen", href: "/service-page" },
//   { name: "About, Us Über uns", href: "/about-us" },
//   { name: "Subscription, Für dich", href: "/blog" },
//   { name: "Feed, Für dich", href: "/faq" },
// ];

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isHovering, setIsHovering] = useState(false); // State to track hover

//   const { data } = useGetMyProfileQuery({});
//   const user = data?.data.attributes;
//   const dispatch = useAppDispatch();

//   const userState = useAppSelector((state) => state.auth.user); // Get user from Redux state

//   useEffect(() => {
//     const token = Cookies.get("token");
//     const userData = Cookies.get("user")
//       ? JSON.parse(Cookies.get("user") as string)
//       : null;
//     const refreshToken = Cookies.get("refreshToken");

//     if (token && userData && refreshToken) {
//       dispatch(loggedUser({ user: userData, token, refreshToken }));
//     } else {
//       dispatch(logoutUser()); // Ensure user is logged out when there are no tokens or user data
//     }
//   }, [dispatch]);

//   const handleLogout = () => {
//     dispatch(logoutUser()); // Dispatch the action to clear Redux state
//     Cookies.remove("token"); // Clear cookies
//     Cookies.remove("user");
//     Cookies.remove("refreshToken");
//   };

//   return (
//     <header
//       className={`w-full h-[80px] fixed top-0 z-50 transition-all duration-300 bg-[#F5F5F5]`}
//     >
//       <nav className="md:w-full md:container mx-auto px-8  flex justify-between items-center h-full ">
//         {/* Logo */}
//         <Link href="/">
//           <Image
//             src={logo}
//             alt="logo"
//             width={100}
//             height={80}
//             className="rounded-md te "
//           />
//         </Link>

//         <div className="flex justify-center items-center p-4">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="search courese"
//               className="py-2 pl-10 pr-4 w-64 rounded-full border border-gray-200 focus:outline-none focus:ring-2 "
//             />
//             <span className="absolute left-3 top-4  text-[#1EB9C6]">
//               <IoIosSearch />
//             </span>
//           </div>
//         </div>

//         {/* Desktop Navigation */}
       
        

//         {/* User Section */}
//         <div className="hidden md:block relative">
//           {userState ? ( // Check if the user state is set from Redux
//             <div
//               className="relative"
//               onMouseEnter={() => setIsHovering(true)} // Show on hover
//               onMouseLeave={() => setIsHovering(false)} // Hide when mouse leaves
//             >
//               <div className="flex items-center space-x-2">
//                 <button>
//                   <Image
//                     src={
//                       user?.profileImage
//                         ? `${ImageBaseUrl}${user?.profileImage}`
//                         : userIcon
//                     }
//                     alt="User"
//                     width={40}
//                     height={40}
//                     className="w-[40px] h-[40px] rounded-full cursor-pointer"
//                   />
//                 </button>
//                 {user?.role === "customer" ? (
//                   <Link href="/feed-post">
//                     <button className="px-5 py-2 bg-[#1EB9C6] text-white rounded-lg">
//                       Posten Sie Ihren Bedarf
//                     </button>
//                   </Link>
//                 ) : (
//                   ""
//                 )}
//               </div>
//               {isHovering && ( // Show dropdown when hovering
//                 <div className="absolute right-0  w-48 bg-white shadow-lg rounded-lg py-2">
//                   <Link href="/my-profile">
//                     <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                       Mein Profil
//                     </p>
//                   </Link>
//                   <Link href="/message ">
//                     <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                       Nachrichten
//                     </p>
//                   </Link>
//                   <Link href="/my-booking">
//                     <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                       Meine Buchungen
//                     </p>
//                   </Link>
//                   <Link href="/terms-of-condition">
//                     <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                       Einstellungen
//                     </p>
//                   </Link>
//                   <button
//                     onClick={handleLogout}
//                     className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                   >
//                     Abmelden
//                   </button>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <Link href="/auth-role">
//               <button className="px-5 py-2 bg-[#1EB9C6] text-white rounded-lg">
//                 Sign In
//               </button>
//             </Link>
//           )}
//         </div>

//         {/* Mobile Menu Toggle */}
//         <div className="md:hidden flex items-center">
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="text-2xl"
//           >
//             {isMobileMenuOpen ? <FiX /> : <FiMenu />}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Dropdown Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-white shadow-lg fixed top-[105px] left-0 w-full z-40">
//           <ul className="flex flex-col items-center gap-4 py-4">
//             {navLinks.map((link) => (
//               <li key={link.name}>
//                 <Link
//                   href={link.href}
//                   onClick={() => setIsMobileMenuOpen(false)}
//                   className="hover:text-primary"
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* Mobile User Section */}
//           <div className="flex justify-center py-4">
//             {userState ? (
//               <div className="flex flex-col items-center">
//                 <Image
//                   src={
//                     user?.profileImage
//                       ? `${ImageBaseUrl}${user?.profileImage}`
//                       : userIcon
//                   }
//                   alt="User"
//                   width={40}
//                   height={40}
//                   className="rounded-full mb-2"
//                 />
//                 <Link href="/my-profile">
//                   <button
//                     onClick={() => setIsMobileMenuOpen(false)}
//                     className="w-full px-5 py-2 bg-gray-200 rounded-lg mb-2"
//                   >
//                     Profile
//                   </button>
//                 </Link>
//                 <button
//                   onClick={() => {
//                     handleLogout();
//                     setIsMobileMenuOpen(false);
//                   }}
//                   className="w-full px-5 py-2 bg-red-500 text-white rounded-lg"
//                 >
//                   Logout
//                 </button>
//               </div>
//             ) : (
//               <Link href="/register">
//                 <button
//                   onClick={() => setIsMobileMenuOpen(false)}
//                   className="px-5 py-2 bg-primary text-white rounded-lg"
//                 >
//                   Sign In
//                 </button>
//               </Link>
//             )}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;




"use client";
import {
  default as logo,
  default as userIcon,
} from "@/assets/hero/10mslogo-svg.svg";
import { loggedUser, logoutUser } from "@/redux/features/auth/authSlice";
// import { ImageBaseUrl } from "@/redux/features/blog/ImageBaseUrl";
import { useGetMyProfileQuery } from "@/redux/features/profile/profileApi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";

const navLinks = [
  { name: "Home, Heim", href: "/" },
  { name: "Services, Dienstleistungen", href: "/service-page" },
  { name: "About, Us Über uns", href: "/about-us" },
  { name: "Subscription, Für dich", href: "/blog" },
  { name: "Feed, Für dich", href: "/faq" },
];

interface NavbarProps {
  setIsMobileMenuOpen: (value: boolean) => void;
}

const Navbar = ({ setIsMobileMenuOpen }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpenLocal] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const { data } = useGetMyProfileQuery({});
  const user = data?.data.attributes;
  const dispatch = useAppDispatch();
  const userState = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    const token = Cookies.get("token");
    const userData = Cookies.get("user")
      ? JSON.parse(Cookies.get("user") as string)
      : null;
    const refreshToken = Cookies.get("refreshToken");

    if (token && userData && refreshToken) {
      dispatch(loggedUser({ user: userData, token, refreshToken }));
    } else {
      dispatch(logoutUser());
    }
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logoutUser());
    Cookies.remove("token");
    Cookies.remove("user");
    Cookies.remove("refreshToken");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpenLocal((prev) => {
      const newState = !prev;
      setIsMobileMenuOpen(newState); // Update parent state
      return newState;
    });
  };

  return (
    <header
      className={`w-full h-[80px] fixed top-0 z-50 transition-all duration-300 bg-[#F5F5F5]`}
    >
      <nav className="md:w-full md:container mx-auto px-8 flex justify-between items-center h-full">
        {/* Logo */}
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width={100}
            height={80}
            className="rounded-md"
          />
        </Link>

        <div className="flex justify-center items-center p-4">
          <div className="relative">
            <input
              type="text"
              placeholder="search course"
              className="py-2 pl-10 pr-4 w-64 rounded-full border border-gray-200 focus:outline-none focus:ring-2"
            />
            <span className="absolute left-3 top-4 text-[#1EB9C6]">
              <IoIosSearch />
            </span>
          </div>
        </div>

        {/* User Section */}
        <div className="hidden md:block relative">
          {userState ? (
            <div
              className="relative"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="flex items-center space-x-2">
                {/* <button>
                  <Image
                    src={
                      user?.profileImage
                        ? `${ImageBaseUrl}${user?.profileImage}`
                        : userIcon
                    }
                    alt="User"
                    width={40}
                    height={40}
                    className="w-[40px] h-[40px] rounded-full cursor-pointer"
                  />
                </button> */}
                {user?.role === "customer" ? (
                  <Link href="/feed-post">
                    <button className="px-5 py-2 bg-[#1EB9C6] text-white rounded-lg">
                      Posten Sie Ihren Bedarf
                    </button>
                  </Link>
                ) : null}
              </div>
              {isHovering && (
                <div className="absolute right-0 w-48 bg-white shadow-lg rounded-lg py-2 z-50">
                  <Link href="/my-profile">
                    <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Mein Profil
                    </p>
                  </Link>
                  <Link href="/message">
                    <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Nachrichten
                    </p>
                  </Link>
                  <Link href="/my-booking">
                    <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Meine Buchungen
                    </p>
                  </Link>
                  <Link href="/terms-of-condition">
                    <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Einstellungen
                    </p>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Abmelden
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link href="/auth-role">
              <button className="px-5 py-2 bg-[#1EB9C6] text-white rounded-lg">
                Sign In
              </button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-2xl">
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg fixed top-[80px] left-0 w-full z-40">
          <ul className="flex flex-col items-center gap-4 py-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => {
                    setIsMobileMenuOpenLocal(false);
                    setIsMobileMenuOpen(false);
                  }}
                  className="hover:text-primary"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex justify-center py-4">
            {userState ? (
              <div className="flex flex-col items-center">
                {/* <Image
                  src={
                    user?.profileImage
                      ? `${ImageBaseUrl}${user?.profileImage}`
                      : userIcon
                  }
                  alt="User"
                  width={40}
                  height={40}
                  className="rounded-full mb-2"
                /> */}
                <Link href="/my-profile">
                  <button
                    onClick={() => {
                      setIsMobileMenuOpenLocal(false);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full px-5 py-2 bg-gray-200 rounded-lg mb-2"
                  >
                    Profile
                  </button>
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpenLocal(false);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full px-5 py-2 bg-red-500 text-white rounded-lg"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link href="/register">
                <button
                  onClick={() => {
                    setIsMobileMenuOpenLocal(false);
                    setIsMobileMenuOpen(false);
                  }}
                  className="px-5 py-2 bg-primary text-white rounded-lg"
                >
                  Sign In
                </button>
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;