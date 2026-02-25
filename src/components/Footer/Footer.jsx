import logoimg from '../../assets/images/logowhite.svg'
export default function Footer() {
  return (
    <>
    <div className="w-full h-120 bg-darkblue flex flex-col">
        <div className="flex flex-col lg:flex-row items-center justify-center py-17">
            <div className="flex flex-col gap-6 px-5 lg:pr-26.5 ">
               <img src={logoimg} alt='logo Img' className='w-36'/>
               <p className='font-Inter font-normal text-[14px] text-neturalwhite '>Lorem ipsum dolor sit amet consectetur,<br/> adipisicing elit. Accusamus quam ullam a quidem</p>
               <button type='submit' className='font-Inter font-semibold text-[12px] text-neturalwhite border border-neturalwhite p-4'>Get started</button>
            </div>
            <div className='flex flex-col lg:flex-row gap-2 lg:gap-18'>
                <div className='flex flex-col gap-8'>
                    <h2 className='font-Inter font-semibold text-[16px] leading-5  uppercase text-neturalwhite'>About us</h2>
                    <div className='flex flex-col gap-6'>
                     <p className='font-Inter font-normal text-[14px] text-neturalwhite leading-5'>Mission</p>
                     <p className='font-Inter font-normal text-[14px] text-neturalwhite leading-5'>Our team</p>
                     <p className='font-Inter font-normal text-[14px] text-neturalwhite leading-5'>Awards</p>
                     <p className='font-Inter font-normal text-[14px] text-neturalwhite leading-5'>Testimonials</p>
                     <p className='font-Inter font-normal text-[14px] text-neturalwhite leading-5'>Privacy policy</p>
                    </div>
                </div>
                <div className='flex flex-col gap-8'>
                    <h2 className='font-Inter font-semibold text-[16px] leading-5  uppercase text-neturalwhite'>Services</h2>
                    <div className='flex flex-col gap-6'>
                     <p className='font-Inter font-normal text-[14px] text-neturalwhite leading-5'>Web design</p>
                     <p className='font-Inter font-normal text-[14px] text-neturalwhite leading-5'>Web development</p>
                     <p className='font-Inter font-normal text-[14px] text-neturalwhite leading-5'>Mobile design</p>
                     <p className='font-Inter font-normal text-[14px] text-neturalwhite leading-5'>UI/UX design</p>
                     <p className='font-Inter font-normal text-[14px] text-neturalwhite leading-5'>Branding design</p>
                    </div>
                </div>
                <div className='flex flex-col gap-8'>
                    <h2 className='font-Inter font-semibold text-[16px] leading-5  uppercase text-neturalwhite'>Portfolio</h2>
                    <div className='flex flex-col gap-6'>
                     <p className='font-Inter font-normal text-[14px] text-neturalwhite leading-5'>Corporate websites</p>
                     <p className='font-Inter font-normal text-[14px] text-neturalwhite leading-5'>E-commerce</p>
                     <p className='font-Inter font-normal text-[14px] text-neturalwhite leading-5'>Mobile apps</p>
                     <p className='font-Inter font-normal text-[14px] text-neturalwhite leading-5'>Landing pages</p>
                     <p className='font-Inter font-normal text-[14px] text-neturalwhite leading-5'>UI/UX projects</p>
                    </div>
                </div>

            </div>

        </div>
        <h2 className='text-center font-Inter font-normal text-[16px] text-neturalwhite capitalize'>Copyright © 2023 Moon| All Rights Reserved | Terms and Conditions | Privacy Policy</h2>
    </div>
    
    </>
  )
}
