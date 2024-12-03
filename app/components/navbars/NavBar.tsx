
import Link from "next/link";

import { NavItem } from "../../types";
import { navItems } from "../../data";

import Logo from "../Logo";

const NavBar: React.FC = () => {
    const linkList = navItems.map((item: NavItem) => {
        return <Link key={item.id} href={item.path} >
            <li 
                className={`point lora text-lg lg:text-2xl py-3 lg:px-6 bg-transparent rounded border border-transparent 
                hover:transform hover:scale-105 transition-all duration-200 hover:underline hover:underline-offset-4`}>
                {item.title}
            </li>
        </Link>
    })

    return (
        <nav className="w-full h-1/5 text-skyBlue z-50 flex flex-col items-center transition-all text-2xl">

            <div className=" w-1/2 lg:w-96">
                <Logo /> 
            </div>

            <div className="flex justify-evenly lg:justify-evenly w-full lg:w-1/2 font-bold">
                {linkList}
            </div>
            
        </nav>
    )
}
export default NavBar