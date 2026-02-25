import { Link } from "react-router-dom";

export default function NavbarLink({title,children}) {
  return (
  <>
  {/* props(title).children علشان لو عايزة استخدم اي حاجة من الطريقتين دول */}

    {/* <a href="" > {title} </a> */}
    <Link to={`/${children === 'home' ? '' : children}`} 
             className="font-Inter font-normal text-[14px] text-WarmBlack leading-5.5 capitalize" >{children} 
    </Link>


    </>





  )
}
