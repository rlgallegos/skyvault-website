'use client'

import { useState } from "react"
import Link from "next/link"

import { NavItem } from "@/app/types"
import { navItems } from "@/app/data"

import Logo from "../Logo"

const NavBarMobile: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const expandNavBar = () => {
        setIsOpen(!isOpen)
    }

    const linkList = navItems.map((item: NavItem) => {
        return <Link key={item.id} href={item.path} >
            <li 
                className={`flex lora h-8 border-t border-skyBlue items-center justify-center`}>
                {item.title}
            </li>
        </Link>
    })

    return (
        <nav onClick={() => expandNavBar()} className="flex flex-col w-full ">
            <div className=" bg-slate-200 w-1/4">
                <Logo />
            </div>

            <div className={`w-full transition-all duration-300 text-sm text-skyBlue
                ${isOpen ? 'max-h-72' : 'max-h-0'} overflow-hidden`}>
                    {linkList}
            </div>

        </nav>
    )
}
export default NavBarMobile