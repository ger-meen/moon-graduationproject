export default function ContactForm() {
  return (
    <>
    <form className="w-full flex flex-col items-center justify-center py-12.5 gap-7.5">

        <div className="flex flex-col lg:flex-row  gap-5 font-Inter font-semibold text-[14px] text-darkblue leading-5 capitalize items-center">
            <div className="flex flex-col  gap-3  ">
                <p>Name</p>
                <input type="text" placeholder="Samatha Clarken" className="border w-full lg:w-110 py-5 px-4.5"/>
            </div>
            <div className="flex flex-col  gap-3 font-Inter font-semibold text-[14px] text-darkblue leading-5 capitalize">
                <p>Email</p>
                <input type="email" placeholder="example@youremail.com" className="border w-full lg:w-110 py-5 px-4.5"/>
            </div>
        </div>



        <div className="flex flex-col lg:flex-row gap-5 ">
            <div className="flex flex-col gap-3 font-Inter font-semibold text-[14px] text-darkblue leading-5 capitalize">
                <p>Phone</p>
                <input type="text" placeholder="(123) 456 - 7890" className="border py-5 px-4.5 w-full lg:w-110"/>
            </div>
            <div className="flex flex-col gap-3 font-Inter font-semibold text-[14px] text-darkblue leading-5 capitalize">
                <p>Company</p>
                <input type="email" placeholder="Moon" className="border py-5 px-4.5 w-full lg:w-110"/>
            </div>
        </div>



        <div className="flex flex-col gap-3 font-Inter font-semibold text-[14px] text-darkblue leading-5 capitalize">
                <p>Message</p>
                <input type="text" placeholder="Type your message here..." className="border px-4.5 py-4 h-40 w-full lg:w-225"/>
        </div>


        <button type="submit" className=" bg-darkblue text-white text-[12px] w-full lg:w-225 py-4 font-Inter uppercase font-semibold">Send message</button>
        
       
    </form>
    
    </>
  )
}
