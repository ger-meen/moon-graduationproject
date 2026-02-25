export default function ContactInformationSection() {
  return (
  <>
  <div className="flex flex-col items-center py-12.5 px-5">
    <h2 className="font-Garamond font-bold text-[36px] text-darkblue leading-12 uppercase mb-3 text-center">Get in touch with us</h2>
    <p className="font-Inter font-normal text-[16px] text-bebeblue text-center mb-12.5 leading-6">Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit <br/>phasellus mollis sit aliquam sit nullam.</p>
    <div className="flex flex-col gap-7.5">
      <div className="text-center">
        <h3 className="font-Inter font-semibold text-[14px] text-bebeblue leading-5 mb-3">Office Hours :</h3>
        <p className="font-Inter font-semibold text-[14px] text-LightBrown leading-5">Monday - Friday  8:00 am to 5:00 pm</p>
      </div>
      <div className="text-center">
        <h3 className="font-Inter font-semibold text-[14px] text-bebeblue leading-5 mb-3">Email: </h3>
        <p className="font-Inter font-semibold text-[14px] text-LightBrown leading-5">contact@company.com</p>
      </div>
      <div className="text-center">
        <h3 className="font-Inter font-semibold text-[14px] text-bebeblue leading-5 mb-3">Phone :</h3>
        <p className="font-Inter font-semibold text-[14px] text-LightBrown leading-5">(414) 687 - 5892</p>
      </div>
      <div className="text-center">
        <h3 className="font-Inter font-semibold text-[14px] text-bebeblue leading-5 mb-3">Location :</h3>
        <p className="font-Inter font-semibold text-[14px] text-LightBrown leading-5">59 Middle Point Rd <br/>San Francisco, 80412</p>
      </div>
    </div>

  </div>
  </>
  )
}
