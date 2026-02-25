import blogimg from '../../assets/images/blog1.svg'
export default function OurBlog() {
  return (
   <>
   
       <div className=" flex flex-col px-5 lg:px-41 mb-20 ">
         <h2 className='font-Garamond font-bold text-[30px] text-darkblue leading-9 uppercase text-center mb-12'>our blog</h2>

         <div className='grid grid-cols-1 lg:grid-cols-2 text-center'>
           <div className="flex flex-col bg-[rgb(247,246,245)] items-center justify-center py-16 px-10 lg:px-19 gap-2 lg:gap-4">
              <p className='font-Inter font-semibold text-[18px] text-[rgb(128,127,134)] uppercase'>TableWare</p>
              <h2 className='font-Garamond font-bold text-xl lg:text-[28px] text-[#3A3845] leading-8 uppercase'>
                  The secrets to a<br/> kitchen room
              </h2>
              <p className='font-Inter font-normal text-[rgb(89,86,103)] text-[12px] lg:text-[16px] text-center'>
                   Lorem ipsum dolor sit amet consectetur adipiscing eli 
                mattis sit phasellus mollis sit aliquam sit<br/> nullam neque ultrices.
              </p>
              <a className='font-Inter font-bold text-[12px] lg:text-[16px] text-[#807f86] underline uppercase '>read more</a>
           </div>
   
           <div>
                <img src={blogimg} alt='' className='w-full h-full object-cover'/>
           </div>
         </div>
          
           

            
   
        
       </div>
   
   </>
  )
}
