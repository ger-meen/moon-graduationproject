import HistoryImg from '../../assets/images/History1.svg'
import HistoryImg2 from '../../assets/images/History2.svg'
export default function HistorySection() {
  return (
   <>
   <div className=" px-5 lg:px-41.25 w-full">

     <div className="grid grid-cols-1 md:grid-cols-2 ">
         <div className="flex flex-col  items-center justify-center bg-[rgb(247,246,245)]">
            <h2 className='font-Garamond font-bold text-[28px] leading-8 text-[#3A3845] text-center mb-6 uppercase'>Made in viet Nam <br/>since 1450</h2>
            <p className='font-Inter font-normal text-[16px] text-neutral-700 leading-6 text-center mb-8'>Lorem ipsum dolor sit amet consectetur adipiscing 
            <br/>eli mattis sit phasellus mollis sit aliquam<br/> sit nullam neque ultrices.</p>
            <a className='font-Inter font-bold text-[14px] text-[#3A3845] uppercase underline'>learn more</a>
         </div>
         <div>
            <img src={HistoryImg} alt='History img 1' className=' w-full h-85 object-cover'/>
         </div>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-2">
         <div>
            <img src={HistoryImg2} alt='History img 1' className=' w-full h-85 object-cover'/>
         </div>

        <div className="flex flex-col items-center justify-center bg-[rgb(247,246,245)]">
            <h2 className='font-Garamond font-bold text-[28px] leading-8 text-[#3A3845] text-center mb-6 uppercase'>Our History</h2>
            <p className='font-Inter font-normal text-[16px] text-neutral-700 leading-6 text-center mb-8'>Lorem ipsum dolor sit amet consectetur adipiscing 
            <br/>eli mattis sit phasellus mollis sit aliquam<br/> sit nullam neque ultrices.</p>
            <a className='font-Inter font-bold text-[14px] text-[#3A3845] uppercase underline'>learn more</a>
        </div>


     </div>
     
   </div>
   
   </>
  )
}
