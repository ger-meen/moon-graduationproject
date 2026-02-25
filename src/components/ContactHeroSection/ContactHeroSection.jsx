import logo from '../../assets/images/herologo.svg'
import img from '../../assets/images/contact hero img.svg'
import { IoLogoFacebook } from "react-icons/io";
import { FaSquareTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
export default function ContactHeroSection() {
  return (
  <>
      <div className='w-full lg:relative'>
        <img className='w-full' src={img} alt=" hero-img "/>
        <div className='banner bg-darkblue lg:absolute lg:top-0 lg:bottom-0 lg:left-41.25 py-11.75 px-[73.5px] flex flex-col items-center justify-center gap-10.5'>
          <img src={logo} alt='logo-company'/>
          <p className='font-bold font-Garamond text-[36px] leading-10 text-center text-[#FFFDFB] '>CONTACT US</p>
          <p className='font-Inter font-semibold text-[14px] text-white leading-5'>Follow us on social media</p>
          <div className='flex gap-4 items-center'>
            <IoLogoFacebook  size={30}/>
            <FaSquareTwitter size={25} />
            <RiInstagramFill size={28} />
            <FaLinkedin size={25} />
            <IoLogoYoutube size={30} />

          </div>
            
        </div>
      </div>
  </>
  )
}
