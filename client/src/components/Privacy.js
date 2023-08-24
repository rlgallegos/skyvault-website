import { useEffect, useState } from "react";
import { disclaimer } from "../data"
import privacy_policy from "../privacy-policy.txt"

function Privacy(){
    // Privacy Policy created by Termly (3rd party)
    const [privacyPolicyHtml, setPrivacyPolicyHtml] = useState(null)
    const [block, setBlock] = useState(null)

    useEffect(() => {
      fetch(privacy_policy)
        .then(response => response.text())
        .then(htmlContent => setPrivacyPolicyHtml(htmlContent))
    }, [])

    function handleClick(e){
        console.log(e.target.id)
        
        if (e.target.id === 'pp-button'){
            setBlock(privacy_policy_block)
        }
        if (e.target.id === 'disclaimer') {
            setBlock(disclaimer_block)
        }
    }



    const privacy_policy_block = (
        <div className="w-4/5 h-5/6 px-8 flex flex-col">
        <h1 className="lora text-white text-2xl my-4">Privacy Policy / Terms of Use</h1>
        <div className="w-full h-5/6 flex text-white overflow-y-scroll items-center justify-center">
            <div className="" dangerouslySetInnerHTML={{ __html: privacyPolicyHtml }} />
        </div>
    </div>
    )
    const disclaimer_block = (
        <div className="w-1/2 h-5/6 px-8 flex flex-col ">
        <h1 className="lora text-white text-2xl">Disclaimer</h1>
        <div className="w-full h-1/2 flex items-center justify-center">
            <p className="text-white text-justify indent-5">{disclaimer}</p>
        </div>
    </div>
    )
  
    return (
        <div id="privacy" className="block bg-black pt-[10vh] flex-col-reverse">
                {block}
                <div className="w-1/2 h-1/6">
                    <button id="disclaimer" onClick={handleClick} 
                    className="lora text-white w-1/3 h-1/2 rounded-l-full border border-white hover:bg-white hover:text-black
                    hover:transform hover:scale-105 transition-all duration-200">
                        Disclaimer</button>
                    <button id="pp-button" onClick={handleClick} 
                    className="lora text-white w-1/3 h-1/2 rounded-r-full border border-white hover:bg-white hover:text-black
                    hover:transform hover:scale-105 transition-all duration-200">
                        Privacy Policy / Terms of Use</button>
                </div>
                {!block && <h1 className="lora text-white text-xl mb-12">The Fine Print.</h1>}
        </div>
    )
}
export default Privacy