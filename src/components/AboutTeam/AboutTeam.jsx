import img1 from '../../assets/images/team1.svg'
import img2 from '../../assets/images/team2.svg'
import img3 from '../../assets/images/team3.svg'
import img4 from '../../assets/images/team4.svg'
export default function AboutTeam() {
  return (
   <>
   <div className="flex flex-col justify-center items-center gap-12">
     <h2 className='font-Garamond font-bold text-[36px] text-darkblue uppercase leading-9'>Meet Our Team</h2>
     <div className="flex flex-col lg:flex-row gap-7.5 mb-20">
        <div className='flex flex-col items-center'>
            <img src={img1} className='mb-6'></img>
            <h5 className='mb-3 uppercase font-Inter font-semibold text-[14px] text-darkblue leading-5'>Bernie PATTERSON</h5>
            <p className='font-Inter font-normal text-[16px] text-neutral-600 '>CEO & Founder</p>
        </div>

        <div className='flex flex-col items-center'>
            <img src={img2} className='mb-6'></img>
            <h5 className='mb-3 uppercase font-Inter font-semibold text-[14px] text-darkblue leading-5'>Ophelia Vase</h5>
            <p className='font-Inter font-normal text-[16px] text-neutral-600 '>Creative Director</p>
            
        </div>

        <div className='flex flex-col items-center'>
            <img src={img3} className='mb-6'></img>
            <h5 className='mb-3 uppercase font-Inter font-semibold text-[14px] text-darkblue leading-5'>CorbiN HOSSAIN</h5>
            <p className='font-Inter font-normal text-[16px] text-neutral-600 '>Artist</p>

        </div>

        <div className='flex flex-col items-center'>
            <img src={img4} className='mb-6'></img>
            <h5 className='mb-3 uppercase font-Inter font-semibold text-[14px] text-darkblue leading-5'>Seren Bowl</h5>
            <p className='font-Inter font-normal text-[16px] text-neutral-600 '>Marketing</p>

        </div>
     </div>
   </div>
   
   </>
  )
}
