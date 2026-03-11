import colors from '../../assets/images/colors.svg'
export default function ShopHeroSection() {
  return (
   <>
   <div className="hidden lg:w-full lg:flex gap-5 px-42 mb-10">

      <div>
        <h2 className="mb-4 font-Inter font-semibold text-[14px] text-[#374151] leading-5">Showing 120 items </h2>
        <hr/>

        <div className="flex flex-col mb-7.5">
           <p className="mt-4 mb-5 font-Inter font-semibold text-[14px] leading-5 text-WarmBlack">Category</p>
           <label className='font-Inter font-normal text-[14px] text-[#374151]'> <input type="checkbox" /> Dinnerware </label>
           <label className='font-Inter font-normal text-[14px] text-[#374151]'> <input type="checkbox"/> Ceramic </label>
           <label className='font-Inter font-normal text-[14px] text-[#374151]'> <input type="checkbox" /> Furniture </label>
           <label className='font-Inter font-normal text-[14px] text-[#374151]'> <input type="checkbox" /> Decor Art </label>
           <label className='font-Inter font-normal text-[14px] text-[#374151]'> <input type="checkbox" /> Gifts sets </label>
        </div>

        <hr/>

        <div className="flex flex-col mb-7.5">
           <p className="mt-4 mb-5 font-Inter font-semibold text-[14px] leading-5 text-WarmBlack">Price Range</p>
           <label className='font-Inter font-normal text-[14px] text-[#374151]'> <input type="checkbox"/> $0 - $10</label>
           <label className='font-Inter font-normal text-[14px] text-[#374151]'> <input type="checkbox"/> $10 - $50 </label>
           <label className='font-Inter font-normal text-[14px] text-[#374151]'> <input type="checkbox"/> $50 - $100 </label>
           <label className='font-Inter font-normal text-[14px] text-[#374151]'> <input type="checkbox"/> $100 - $200 </label>
           <label className='font-Inter font-normal text-[14px] text-[#374151]'> <input type="checkbox"/> $200 </label>
        </div>

        <hr/>
         
         <div className="flex flex-col mb-7.5">
          <p className="mt-4 mb-5 font-Inter font-semibold text-[14px] leading-5 text-WarmBlack">colors</p>
          <img src={colors}/>
         </div>

         <hr/>

        <div className="flex flex-col mb-7.5">
           <p className="mt-4 mb-5 font-Inter font-semibold text-[14px] leading-5 text-WarmBlack">Tags</p>
           <label className='font-Inter font-normal text-[14px] text-[#374151]'> <input type="checkbox"/> Dinnerware </label>
           <label className='font-Inter font-normal text-[14px] text-[#374151]'> <input type="checkbox"/> Ceramic </label>
           <label className='font-Inter font-normal text-[14px] text-[#374151]'> <input type="checkbox"/> Furniture </label>
           <label className='font-Inter font-normal text-[14px] text-[#374151]'> <input type="checkbox"/> Decor Art </label>
           <label className='font-Inter font-normal text-[14px] text-[#374151]'> <input type="checkbox"/> Gifts sets </label>
        </div>
      </div>



      <div className="flex">
        <h2>Sort by:Name </h2>
      </div>
   </div>
   </>
  )
}
