export default function SignUpButton() {
  return (
  <>
  
  <div className="flex flex-col gap-6 items-center justify-center text-center px-5">
    <h2 className="font-Inter font-semibold text-bebeblue text-[16px] leading-5 capitalize">Sign up for emails</h2>
    <p className="font-Garamond font-bold text-[28px] text-darkblue leading-8 uppercase">For news, collections & more</p>
    <input type="text" placeholder="Enter your email address" className="font-Inter font-normal text-[16px] text-bebeblue leading-6 capitalize border-b-2 text-center"/>
    <button type="submit" className="mb-20 font-Inter font-semibold text-[12px] text-bebeblue uppercase leading-4.5 border py-3.75 px-6 border-bebeblue">sign up</button>


  </div>
  
  </>
  )
}
