import Link from "next/link";

import { NavItem } from "../../types";
import { navItems } from "../../data";

import Logo from "../Logo";

const NavBarPage: React.FC = () => {
    const linkList = navItems.map((item: NavItem) => {
        return <Link key={item.id} href={item.path} >
            <li 
                className={`point lora text-sm lg:text-lg py-1 lg:px-6 bg-transparent rounded border border-transparent 
                hover:transform hover:scale-105 transition-all duration-200 hover:underline hover:underline-offset-4`}>
                {item.title}
            </li>
        </Link>
    })

    return (
        <nav className="w-full bg-lighterGray text-skyBlue py-2 z-50 flex flex-col items-center transition-all text-2xl border-b border-skyBlue">

            <Link href={'/'} className="w-1/3 lg:w-48">            
                    <Logo /> 
            </Link>

            <div className="flex justify-evenly lg:justify-evenly w-full lg:w-1/2 lora font-bold">
                {linkList}
            </div>
            
        </nav>
    )
}
export default NavBarPage