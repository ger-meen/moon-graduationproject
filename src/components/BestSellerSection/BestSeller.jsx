import card1 from '../../assets/images/best1.svg'
import card2 from '../../assets/images/best2.svg'
import card3 from '../../assets/images/best3.svg'
import card4 from '../../assets/images/best4.svg'
import card5 from '../../assets/images/best5.svg'
import card6 from '../../assets/images/best6.svg'
import card7 from '../../assets/images/best7.svg'
import card8 from '../../assets/images/best8.svg'

export default function BestSeller() {
  return (
  <>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-5 lg:px-41.25 gap-7.5 mb-20">


    <div className='flex flex-col gap-6'>
      <img src={card1} alt='CardImg'/>
      <div className='flex flex-col gap-2 font-Inter font-semibold text-[14px] leading-5 text-[#3A3845]'>
          <h3>Small Ecru Ceramic Compote</h3>
          <p>$49.00</p>
      </div>
      <p className='font-Inter font-normal text-[14px] text-neutral-600 leading-5'>Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.</p>
      <button className='w-full border border-neutral-800 py-3.75 px-[81.5px] font-Inter font-semibold text-[12px] text-neutral-800 leading-4.5 '>Add to cart</button>
    </div>


     <div className='flex flex-col gap-6'>
       <img src={card2} alt='CardImg'/>
       <div className='flex flex-col gap-2 font-Inter font-semibold text-[14px] leading-5 text-[#3A3845]'>
          <h3>Warrick White Vase 14"</h3>
          <p>$49.00</p>
       </div>
       <p className='font-Inter font-normal text-[14px] text-neutral-600 leading-5'>Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.</p>
       <button className='w-full border border-neutral-800 py-3.75 px-[81.5px] font-Inter font-semibold text-[12px] text-neutral-800 leading-4.5 '>Add to cart</button>
     </div>


      <div className='flex flex-col gap-6'>
       <img src={card3} alt='CardImg'/>
       <div className='flex flex-col gap-2 font-Inter font-semibold text-[14px] leading-5 text-[#3A3845]'>
          <h3>Porcelain Dinner Plate</h3>
          <p>$49.00</p>
       </div>
       <p className='font-Inter font-normal text-[14px] text-neutral-600 leading-5'>Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.</p>
       <button className='w-full border border-neutral-800 py-3.75 px-[81.5px] font-Inter font-semibold text-[12px] text-neutral-800 leading-4.5 '>Add to cart</button>
     </div>

     <div className='flex flex-col gap-6'>
       <img src={card4} alt='CardImg'/>
       <div className='flex flex-col gap-2 font-Inter font-semibold text-[14px] leading-5 text-[#3A3845]'>
          <h3>Warrick White Vase 20</h3>
          <p>$49.00</p>
       </div>
       <p className='font-Inter font-normal text-[14px] text-neutral-600 leading-5'>Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.</p>
       <button className='w-full border border-neutral-800 py-3.75 px-[81.5px] font-Inter font-semibold text-[12px] text-neutral-800 leading-4.5 '>Add to cart</button>
     </div>


     <div className='flex flex-col gap-6'>
       <img src={card5} alt='CardImg'/>
       <div className='flex flex-col gap-2 font-Inter font-semibold text-[14px] leading-5 text-[#3A3845]'>
          <h3>Rounded Dual Handled Vase</h3>
          <p>$49.00</p>
       </div>
       <p className='font-Inter font-normal text-[14px] text-neutral-600 leading-5'>Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.</p>
       <button className='w-full border border-neutral-800 py-3.75 px-[81.5px] font-Inter font-semibold text-[12px] text-neutral-800 leading-4.5 '>Add to cart</button>
     </div>


     <div className='flex flex-col gap-6'>
       <img src={card6} alt='CardImg'/>
       <div className='flex flex-col gap-2 font-Inter font-semibold text-[14px] leading-5 text-[#3A3845]'>
          <h3>Marin White Dinner Plate</h3>
          <p>$49.00</p>
       </div>
       <p className='font-Inter font-normal text-[14px] text-neutral-600 leading-5'>Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.</p>
       <button className='w-full border border-neutral-800 py-3.75 px-[81.5px] font-Inter font-semibold text-[12px] text-neutral-800 leading-4.5 '>Add to cart</button>
     </div>


     <div className='flex flex-col gap-6'>
       <img src={card7} alt='CardImg'/>
       <div className='flex flex-col gap-2 font-Inter font-semibold text-[14px] leading-5 text-[#3A3845]'>
          <h3>Tall Cream Ceramic Vase</h3>
          <p>$49.00</p>
       </div>
       <p className='font-Inter font-normal text-[14px] text-neutral-600 leading-5'>Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.</p>
       <button className='w-full border border-neutral-800 py-3.75 px-[81.5px] font-Inter font-semibold text-[12px] text-neutral-800 leading-4.5 '>Add to cart</button>
     </div>


     <div className='flex flex-col gap-6'>
       <img src={card8} alt='CardImg'/>
       <div className='flex flex-col gap-2 font-Inter font-semibold text-[14px] leading-5 text-[#3A3845]'>
          <h3>Luana Bowl</h3>
          <p>$49.00</p>
       </div>
       <p className='font-Inter font-normal text-[14px] text-neutral-600 leading-5'>Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.</p>
       <button className='w-full border border-neutral-800 py-3.75 px-[81.5px] font-Inter font-semibold text-[12px] text-neutral-800 leading-4.5 '>Add to cart</button>
     </div>
      
     

 
    

  </div>
  
  </>
  )
}
