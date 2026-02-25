import { CgProfile } from "react-icons/cg";
import { CiHeart, CiMenuBurger } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
export default function NavbarIcon({children}) {
  return (
   <>
   {/* حطيت هنا صورة المنيو علشان الريسبونسف  */}
   {children==="menu" ? <span  className="lg:hidden" ><CiMenuBurger size={20}/></span> : null}
   {children==="search" ? <span  className="hidden lg:block" ><IoIosSearch size={20}/></span> : null}
   {children==="Profile" ? <span  className="hidden lg:block"><CgProfile size={20}/></span> : null}
   {children==="heart" ? <span  className="hidden lg:block"><CiHeart size={20}/></span> : null}
   {children==="cart" ? <span><IoCartOutline size={20}/></span> : null}

   </>
  )
}
