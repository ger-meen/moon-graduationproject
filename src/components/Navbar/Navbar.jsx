import NavbarIcon from "./NavbarIcon";
import NavbarLink from "./NavbarLink";
import  NavbarLogo from "./NavbarLogo";
export default function Navbar() {
  return (
  <>
  
  <div className="flex justify-between items-center px-5 lg:px-41.25 py-5.5">
    {/* استدعتها قبل اللوجو علشان تظهر قبل اللوجو في الريسبونسف */}
    <NavbarIcon>menu</NavbarIcon>

    < NavbarLogo/>
    {/*props طريقة ال  */}
         {/* <div>
            <NavbarLink title={"home"}/>
            <NavbarLink title={"shop"}/>
            <NavbarLink title={"about"}/>
            <NavbarLink title={"contact"}/>
         </div> */}
         
    {/*children طريقة تانية  */}
     <div className=" hidden lg:flex items-center gap-15">
         <NavbarLink>{"home"}</NavbarLink>
         <NavbarLink>{"shop"}</NavbarLink>
         <NavbarLink>{"contact"}</NavbarLink>
         <NavbarLink>{"about"}</NavbarLink>
         <NavbarLink>{"Register"}</NavbarLink>
         <NavbarLink>{"Login"}</NavbarLink>
     </div>

     <div className="flex items-center gap-6">
        <NavbarIcon>search</NavbarIcon>
        <NavbarIcon>Profile</NavbarIcon>
        <NavbarIcon>heart</NavbarIcon>
        <NavbarIcon>cart</NavbarIcon>
     </div>








  </div>
  
  </>
  )
}


