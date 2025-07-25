



"use client"
import Image from 'next/image'
import Link from 'next/link'
import logo from "@/assets/logo/dating-logo.png";
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
 

const Footer = () => {
  return (
    <div className="bg-[#E9F8F9] py-12">
      <div className="container mx-auto px-4 text-center">  
          <h6 className='text-small text-gray-400 mb-4'>Wir verbinden Sie mit vertrauenswürdigen Fachleuten</h6>

        <h1 className="text-3xl font-semibold text-gray-800 mb-4">Fordern Sie weitere Informationen an</h1>
        <p className="text-lg text-gray-600 mb-6">
          Finden, buchen und erleben Sie hochwertige Services ganz einfach – jederzeit und überall.
        </p>
        <Link href="mailto:info@yourdomain.com">
          <span className="bg-[#F9C243] text-white py-2 px-6 rounded-full font-semibold hover:bg-orange-400">
            Kontaktieren Sie uns
          </span>
        </Link>
        <hr  className='text-[#F9C243] mt-3 text-[50px]'/>
        <div className="flex justify-between mt-8 px-8">

          <div>
            <Image src={logo} alt="odaboo logo" width={120} height={40} />
          </div>

          <div className=" flex">
            <a
              href="https://www.linkedin.com/"
              className="text-[#F9C243] hover:text-orange-600 text-3xl"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://mail.google.com/"
              className="text-[#F9C243] hover:text-orange-600 text-3xl px-5"
              aria-label="Email"
            >
              <FaFacebook/>
            </a>
            <a
              href="https://mail.google.com/"
              className="text-[#F9C243] hover:text-orange-600 text-3xl px-5"
              aria-label="Email"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer
