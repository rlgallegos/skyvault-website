'use client'
import { useState } from "react"
import { helpObject } from "@/app/data"

import HelpBlock from "./HelpBlock"
import Button from "@/app/components/Button"

const HelpPage: React.FC =  () => {
    const refundBlock = <HelpBlock src={helpObject.refund.src} steps={helpObject.refund.list}/>
    const importBlock = <HelpBlock src={helpObject.import.src} steps={helpObject.import.list} button={true} />
    const saleUpdateBlock = <HelpBlock src={helpObject.sale.src} steps={helpObject.sale.list} />
    const [block, setBlock] = useState('wing')

    const wing = (
        <div className="h-3/4 w-1/4 mx-auto xl:w-1/6 flex items-center justify-center">
            <img src="images/branded/blue-wing-right.png" alt="wing" className=""/>
        </div>
    )


    const handleClick = (blockName: string) => {
        if (block === blockName) {
            setBlock('wing')
        } else {
            setBlock(blockName)
        }
    }

    return (
        <div id="help" className="h-screen p-4">
            <div className="flex flex-col w-full h-full md:h-3/4">

                {/* Top 1/6 */}
                <div className="mx-auto h-1/4 lg:h-1/6 w-full xl:w-3/4 flex flex-col items-center md:flex-row justify-evenly space-y-3 md:space-y-0 md:space-x-3">
                    <Button onClick={() => handleClick('refundBlock')} text={'Processing Refunds'} />
                    <Button onClick={() => handleClick('importBlock')} text={'Importing Your Inventory'} />
                    <Button onClick={() => handleClick('saleUpdateBlock')} text={'Editing Sales'} />
                </div>

                {/* Bottom 5/6 */}
                <div className={`w-full h-3/4 pt-8 flex transition-all duration-300 ${block ? 'h-5/6' : 'h-0'}`}>
                    <div className={`h-full transition-all duration-300 ${block === 'wing' ? 'w-full opacity-1' : 'w-0 overflow-hidden opacity-0'}`}>{wing}</div>
                    <div className={`h-full transition-all duration-300 ${block === 'refundBlock' ? 'w-full opacity-1' : 'w-0 overflow-hidden opacity-0'}`}>{refundBlock}</div>
                    <div className={`h-full transition-all duration-300 ${block === 'importBlock' ? 'w-full opacity-1' : 'w-0 overflow-hidden opacity-0'}`}>{importBlock}</div>
                    <div className={`h-full transition-all duration-300 ${block === 'saleUpdateBlock' ? 'w-full opacity-1' : 'w-0 overflow-hidden opacity-0'}`}>{saleUpdateBlock}</div>
                </div>
            </div>
        </div>
    )
}
export default HelpPage