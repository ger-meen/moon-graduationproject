import historyimg1 from '../../assets/images/History1.svg'
import historyimg2 from '../../assets/images/abouthistory2.svg'
import historyimg3 from '../../assets/images/abouthistory3.svg'
export default function AboutHistory() {
  return (
   <>
   <div className="flex flex-col px-5 lg:px-41 w-full items-center ">
       <div className="flex flex-col lg:flex-row ">
          <div className='flex flex-col gap-6 text-center px-15 py-29 bg-neutral-200'>
             <h2 className='font-Garamond font-bold text-[28px] text-darkblue uppercase leading-8 '>1910</h2>
             <p className='font-Inter font-normal text-[16px] text-bebeblue leading-6'>Lorem ipsum dolor sit amet consectetur adipiscing eli<br/>
              mattis sit phasellus mollis sit aliquam sit nullam neque <br/>
              ultrices.</p>
          </div>
          <div>
              <img src={historyimg1} alt='imge one' className='h-full w-full object-cover'/>
          </div>
       </div>


        <div className="flex flex-col lg:flex-row">
         <div>
            <img src={historyimg2} alt='imge one' className='h-full w-full object-cover'/>
         </div>
         <div className='flex flex-col gap-6 text-center px-15 py-29 bg-neutral-200'>
             <h2 className='font-Garamond font-bold text-[28px] text-darkblue uppercase leading-8 '>1990</h2>
             <p className='font-Inter font-normal text-[16px] text-bebeblue leading-6'>Maecenas sem eros, rutrum vitae risus eget, vulputate<br/>
              aliquam nisi. dolor sit amet consectetur adipiscing eli <br/>
              mattis sit phasellus mollis sit aliquam sit </p>
          </div>
        </div>


         
          <div className="flex flex-col lg:flex-row">
            <div className='flex flex-col gap-6 text-center px-13 py-29 bg-neutral-200'>
             <h2 className='font-Garamond font-bold text-[28px] text-darkblue uppercase leading-8 '>2010</h2>
             <p className='font-Inter font-normal text-[16px] text-bebeblue leading-6'>Rutrum vitae risus eget, vulputate aliquam nisi ex gravida <br/>
             neque tempus. sit aliquam sit nullam neque
             ultrices.</p>
            </div>
            <div>
              <img src={historyimg3} alt='imge one' className='h-full w-full object-cover'/>
           </div>
         </div>

       

   </div>
   
   </>
  )
}
