'use client'
import { useEffect, useState } from "react";
import { disclaimer } from "@/app/data";

// Root of public directory
// Privacy Policy created by Termly (3rd party)
const privacyPolicyPath = '/privacy-policy.txt'

const TermsPage: React.FC = () => {
    // TermsPage  Policy created by Termly (3rd party)
    const [privacyPolicyHtml, setPrivacyPolicyHtml] = useState<string>('')
    const [blockName, setBlockName] = useState('wing')

    useEffect(() => {
      fetch(privacyPolicyPath)
        .then(response => response.text())
        .then(htmlContent => setPrivacyPolicyHtml(htmlContent))
    }, [])

    function handleClick(currBlockName: any){
        if (currBlockName === blockName){
            setBlockName('wing')
        } else {
            setBlockName(currBlockName)
        }
    }
    


    const wing = <div className={`w-auto overflow-hidden transition-all duration-300 ${blockName === 'wing' ? "h-1/2 opacity-1" : "h-0 opacity-0"}`}>
        <img src="images/branded/blue-wing-right.png" className="h-full w-auto mx-auto" alt="wing"/>
    </div>


    const privacyBlock = (
        <div className={`w-11/12 md:w-4/5 lg:w-3/4 px-2 md:px-8 py-6 flex flex-col bg-white border border-skyBlue
        overflow-hidden transition-all duration-300 ${blockName === 'privacy' ? "h-5/6 opacity-1" : "h-0 opacity-0"}`}>
        
        <div className="w-full overflow-y-scroll items-center justify-center overflow-x-hidden">
            <div className="lora" dangerouslySetInnerHTML={{ __html: privacyPolicyHtml }} />
        </div>
    </div>
    )

    const disclaimerBlock = (
        <div className={`w-11/12 md:w-4/5 lg:w-3/4 px-2 md:px-8 py-6 flex flex-col bg-white border border-skyBlue
        overflow-hidden transition-all duration-300 ${blockName === 'disclaimer' ? "h-5/6 opacity-1" : "h-0 opacity-0"}`}>

        <h1 className="subtitle2 mb-4">Disclaimer</h1>
        
        <div className="w-full md:h-1/2 flex items-center justify-center">
            <p className="lora text-justify indent-5">{disclaimer}</p>
        </div>
    </div>
    )


    return (
        <div id="privacy" className="h-screen flex flex-col bg-cover bg-center relative mt-[-1px] pt-8">

            {/* Upper Block */}
            <div className="w-full h-1/4 flex flex-col items-center justify-evenly md:pt-6">
                <h1 className="subtitle">The Fine Print.</h1>
                <div className="md:w-full xl:w-2/3 flex flex-col md:flex-row justify-evenly h-full md:h-auto">
                    <button className="button h-1/3 md:h-auto flex items-center justify-center" onClick={() => {handleClick('disclaimer')}}>Disclaimer</button>

                    <button className="button h-1/3 md:h-auto flex items-center justify-center" onClick={() => {handleClick('privacy')}}>Privacy Policy / Terms of Use</button>
                </div>
            </div>


            {/* Switchable Block */}
            <div className="w-full h-3/4 flex flex-col items-center justify-center">
                {wing}
                {disclaimerBlock}
                {privacyBlock}
            </div>

        </div>
    )
}
export default TermsPage