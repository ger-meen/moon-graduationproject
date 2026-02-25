import SaleImg from '../../assets/images/saleimg.svg'

export default function SaleSection() {
  return (
    <>
    <div className=" grid grid-cols-1 lg:grid-cols-2 px-5 lg:px-41 mb-20 ">

        <div className="flex flex-col bg-[rgb(247,246,245)] items-center justify-center py-16 px-19 gap-4">
             <h2 className='font-Garamond font-bold text-xl lg:text-[28px] text-[#3A3845] leading-8'>
                Up to 40% off our <br/> Christmas collection</h2>
             <p className='font-Inter font-normal text-[rgb(89,86,103)] text-[12px] lg:text-[16px] text-center'>
                Lorem ipsum dolor sit amet consectetur adipiscing eli 
             mattis sit phasellus mollis sit aliquam sit<br/> nullam neque ultrices.</p>
             <a className='font-Inter font-bold text-[12px] lg:text-[16px] text-[#807f86] underline uppercase '>shop now</a>
        </div>

        <div>
             <img src={SaleImg} alt='salesectionimage' className='w-full h-full object-cover'/>
        </div>
         

     
    </div>
    </>
  )
}
