import img1 from '../../assets/images/about description.svg'
export default function AboutDescription() {
  return (
   <>
   <div className="flex flex-col lg:flex-row px-5 py-20 lg:px-52 gap-15 ">
        <div>
            <img src ={img1}></img>
        </div>
        <div className='flex flex-col'>
            <h2 className='font-Garamond font-bold text-[28px] text-darkblue mb-8 uppercase'>How we works</h2>
            <h4 className='font-Inter font-semibold text-[18px] text-darkblue mb-6 leading-6'>Product design</h4>
            <p className='font-Inter font-normal text-[16px] text-bebeblue mb-8'>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis.</p>
            <h4 className='font-Inter font-semibold text-[18px] text-darkblue mb-6 leading-6'>Crafted</h4>
            <p className='font-Inter font-normal text-[16px] text-bebeblue mb-8'>Rutrum vitae risus eget, vulputate aliquam nisi ex gravida neque tempus.</p>
            <h4 className='font-Inter font-semibold text-[18px] text-darkblue leading-6 mb-6'>Sell product</h4>
            <p className='font-Inter font-normal text-[16px] text-bebeblue'>Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam nisi.</p>
        </div>

   </div>
   
   
   
   </>
  )
}
