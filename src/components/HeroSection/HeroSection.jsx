import HeroImg from '../../assets/images/hero.svg'
import LogoCompany from '../../assets/images/Icon.svg'
export default function HeroSection() {
  return (
    <>
    <div className='w-full lg:relative'>
      <img className='w-full' src={HeroImg} alt=" hero-img "/>
      <div className='banner bg-Darkbrown lg:absolute lg:top-0 lg:bottom-0 lg:left-41.25 py-11.75 px-[73.5px] flex flex-col items-center justify-center gap-10.5'>
        <img src={LogoCompany} alt='logo-company'/>
        <div className='flex flex-col items-center gap-5 text-[#FFFDFB]'>
           <p className='font-normal font-Inter text-[16px] leading-6 text-center '>Handcrafted in Viet Nam since 1650</p>
           <p className='font-bold font-Garamond text-[24px] text-center leading-10 capitalize  lg:text-[36px] '>BAT TRANG  <br/> DINNER SET</p>
        </div>
        <button className='text-[14px] leading-5 font-Inter font-semibold text-Darkbrown bg-white w-full py-3.75 px-3.75 uppercase'>shop now</button>
      </div>
    </div>
    
    </>
  )
}
