import collImg from '../../assets/images/collection.svg'
import holidayImg from '../../assets/images/holiday.svg'
import decorImg from '../../assets/images/homedecor.svg'
import tableImg from '../../assets/images/TableWare.svg'



export default function CollectionCards() {
  return (
   <>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-5 lg:px-41.25 gap-7.5 mt-20 mb-20'>
        <div className='text-center'>
            <img src={tableImg} alt='tablware' className='mb-5.75 w-full'/>
            <p className=' font-Inter font-semibold text-[18px] text-[#3A3845] leading-6 uppercase'>TableWare</p>
        </div>
        <div className='text-center'>
            <img src={decorImg} alt='homedecor'className='mb-5.75 w-full' />
            <p className='font-Inter font-semibold text-[18px] text-[#3A3845] leading-6 uppercase'>Home decor</p>
        </div>
         <div className='text-center'>
            <img src={holidayImg} alt='holiday'className='mb-5.75 w-full' />
            <p className='font-Inter font-semibold text-[18px] text-[#3A3845] leading-6 uppercase'>holiday</p>
        </div>
         <div className='text-center'>
            <img src={collImg} alt='collection'className='mb-5.75 w-full' />
            <p className= ' font-Inter font-semibold text-[18px] text-[#3A3845] leading-6 uppercase'>Collection</p>
        </div>
    </div>
   </>
  )
}
