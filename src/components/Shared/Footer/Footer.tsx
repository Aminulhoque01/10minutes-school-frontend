



// "use client"
// import Image from 'next/image'
// import Link from 'next/link'
// import logo from "@/assets/hero/10mslogo-svg.svg";
// import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
 

// const Footer = () => {
//   return (
//     <div className="bg-[#E9F8F9] py-12">
//       <div className="container mx-auto px-4 text-center">  
//           <h6 className='text-small text-gray-400 mb-4'>Wir verbinden Sie mit vertrauenswürdigen Fachleuten</h6>

//         <h1 className="text-3xl font-semibold text-gray-800 mb-4">Fordern Sie weitere Informationen an</h1>
//         <p className="text-lg text-gray-600 mb-6">
//           Finden, buchen und erleben Sie hochwertige Services ganz einfach – jederzeit und überall.
//         </p>
//         <Link href="mailto:info@yourdomain.com">
//           <span className="bg-[#F9C243] text-white py-2 px-6 rounded-full font-semibold hover:bg-orange-400">
//             Kontaktieren Sie uns
//           </span>
//         </Link>
//         <hr  className='text-[#F9C243] mt-3 text-[50px]'/>
//         <div className="flex justify-between mt-8 px-8">

//           <div>
//             <Image src={logo} alt="odaboo logo" width={120} height={40} />
//           </div>

//           <div className=" flex">
//             <a
//               href="https://www.linkedin.com/"
//               className="text-[#F9C243] hover:text-orange-600 text-3xl"
//               aria-label="LinkedIn"
//             >
//               <FaLinkedinIn />
//             </a>
//             <a
//               href="https://mail.google.com/"
//               className="text-[#F9C243] hover:text-orange-600 text-3xl px-5"
//               aria-label="Email"
//             >
//               <FaFacebook/>
//             </a>
//             <a
//               href="https://mail.google.com/"
//               className="text-[#F9C243] hover:text-orange-600 text-3xl px-5"
//               aria-label="Email"
//             >
//               <FaInstagram />
//             </a>
//           </div>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default Footer




import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Dynamically get current year

  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white py-6">
      <div className="container mx-auto flex px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* App Download Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">10 Minute School</h3>
          <p className="mb-4">Download our mobile app</p>
          <div className="flex space-x-4 mt-10">
            <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded flex items-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M21.35 11.1l-9.7-9.7c-.2-.2-.5-.3-.7-.3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7.2c0-.2-.1-.5-.3-.7zM6 18H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V8h2v2zm4 8H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V8h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V8h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2z"/>
              </svg>
              Get it on Google Play
            </a>
            <a href="#" className="bg-black text-white px-4 py-2 rounded flex items-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17h-2v-2h2v2zm2-4h-4v-2h1v-1c0-1.1.9-2 2-2h1v2h-1v1h2v2z"/>
              </svg>
              Download on the App Store
            </a>
          </div>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:underline">Career / Recruitment</Link></li>
            <li><Link href="#" className="hover:underline">Notice</Link></li>
            <li><Link href="#" className="hover:underline">Join as a teacher</Link></li>
            <li><Link href="#" className="hover:underline">Join as an affiliate</Link></li>
            <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:underline">Refund Policy</Link></li>
            <li><Link href="#" className="hover:underline">User Terms</Link></li>
          </ul>
        </div>

        {/* Communication Media Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our communication media</h3>
          <ul className="space-y-2">
            <li><a href="tel:+16910" className="hover:underline">Call: +16910 (24x7)</a></li>
            <li><a href="https://wa.me/+8801896016252" className="hover:underline">WhatsApp: +8801896016252 (24x7)</a></li>
            <li><a href="tel:+8809610916910" className="hover:underline">From outside the country: +880 9610916910</a></li>
            <li><a href="mailto:support@10minuteschool.com" className="hover:underline">Email: support@10minuteschool.com</a></li>
            <li className="flex space-x-2 mt-2">
              <a href="#" className="text-gray-400 hover:text-gray-600"><span className="sr-only">Facebook</span><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-400 hover:text-gray-600"><span className="sr-only">Instagram</span><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-gray-400 hover:text-gray-600"><span className="sr-only">LinkedIn</span><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="text-gray-400 hover:text-gray-600"><span className="sr-only">YouTube</span><i className="fab fa-youtube"></i></a>
              <a href="#" className="text-gray-400 hover:text-gray-600"><span className="sr-only">TikTok</span><i className="fab fa-tiktok"></i></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-sm">Copyright © 2015 - {currentYear} Ten Minute School All Rights Reserved</p>
      </div>
    </footer>
  );
}