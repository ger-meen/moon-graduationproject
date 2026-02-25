import new1 from '../../assets/images/new1.svg'
import new2 from '../../assets/images/new2.svg'
import new3 from '../../assets/images/new3.svg'
import new4 from '../../assets/images/new4.svg'
export default function NewArrival() {
  return (
   <>
     <div className='flex flex-col px-5 lg:px-41 items-center py-20'>
       <h2 className='mb-12 font-bold font-Garamond text-[30px] leading-9 uppercase text-darkblue text-center'>Discover new arrivals</h2>
         <div className="grid grid-cols-2 lg:grid-cols-4 gap-7.5">

           <div className='flex flex-col gap-3 lg:gap-6 text-center lg:text-left'>
               <img src={new1} alt='new arrival img'/>
               <div className='flex flex-col gap-2 font-Inter font-semibold text-[14px] leading-5 text-[#3A3845]'>
                 <h3>Porcelain Dinner Plate</h3>
                 <p>$49.00</p>
               </div>
               <p className='font-Inter font-normal text-[14px] text-neutral-600 leading-5'>Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.</p>
               <button className='w-full border border-neutral-800 py-3.75 lg:px-[81.5px] font-Inter font-semibold text-[12px] text-neutral-800 leading-4.5 '>Add to cart</button>
            </div>


         <div className='flex flex-col gap-3 lg:gap-6 text-center lg:text-left'>
             <img src={new2} alt='new arrival img'/>
             <div className='flex flex-col gap-2 font-Inter font-semibold text-[14px] leading-5 text-[#3A3845]'>
                 <h3>Ophelia Matte Natural  Vase</h3>
                 <p>$49.00</p>
             </div>
             <p className='font-Inter font-normal text-[14px] text-neutral-600 leading-5'>Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.</p>
             <button className='w-full border border-neutral-800 py-3.75 lg:px-[81.5px] font-Inter font-semibold text-[12px] text-neutral-800 leading-4.5 '>Add to cart</button>
         </div>


         <div className='flex flex-col gap-3 lg:gap-6 text-center lg:text-left'>
            <img src={new3} alt='new arrival img'/>
            <div className='flex flex-col gap-2 font-Inter font-semibold text-[14px] leading-5 text-[#3A3845]'>
               <h3>Porcelain Dinner Plate</h3>
               <p>$49.00</p>
            </div>
            <p className='font-Inter font-normal text-[14px] text-neutral-600 leading-5'>Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.</p>
            <button className='w-full border border-neutral-800 py-3.75 lg:px-[81.5px] font-Inter font-semibold text-[12px] text-neutral-800 leading-4.5 '>Add to cart</button>
         </div>


         <div className='flex flex-col gap-3 lg:gap-6 text-center lg:text-left'>
           <img src={new4} alt='new arrival img'/>
           <div className='flex flex-col gap-2 font-Inter font-semibold text-[14px] leading-5 text-[#3A3845]'>
               <h3>Luana Bowl</h3>
               <p>$49.00</p>
           </div>
           <p className='font-Inter font-normal text-[14px] text-neutral-600 leading-5'>Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.</p>
           <button className='w-full border border-neutral-800 py-3.75 lg:px-[81.5px] font-Inter font-semibold text-[12px] text-neutral-800 leading-4.5 '>Add to cart</button>
         </div>


       </div>
     </div>
 
   </>
  )
}
