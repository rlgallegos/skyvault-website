import { useState } from "react"


function Help(){
    const [block, setBlock] = useState(null)
    
    function handleClick(e){
        if (e.target.id === 'tutorial-refund'){
            setBlock(refundBlock)
        } else if (e.target.id === 'tutorial-import') {
            setBlock(importBlock)
        } else {
            setBlock(saleUpdateBlock)
        }
    }

    function handleDownload() {
        const templateLocation = '/import-template.xlsx'
        window.open(templateLocation, '_blank')
    }

    // Tutorial Blocks set by state

    const refundBlock = (
    <div className="w-full h-full px-4 flex flex-col overflow-y-scroll md:flex-row">
        <div className='h-full w-full md:w-1/2 md:h-full my-4 md:my-auto'>
            <video muted loop autoPlay playsInline className="max-h-full mx-auto" src="/tutorial-refund.mp4"></video>
        </div>
        <div className="w-full md:w-1/2 h-full flex flex-col md:items-left justify-center text-white ">
            <h3 className="text-3xl text-left mb-6">Steps:</h3>
            <ol className="text-xl text-justify">
                <li>1. In the "Settings" page, tap on the sale you'd like to process a refund for.</li>
                <li>2. In the upper-right corner, tap the return button.</li>
                <li>3. Select the quantity of items from the sale to return.</li>
                <li>4. Submit refund.</li>
            </ol>
        </div>
    </div>
    )
    const saleUpdateBlock = (
    <div className="w-full h-full px-4 flex flex-col overflow-y-scroll md:flex-row">
        <div className='h-full w-full md:w-1/2 md:h-full my-4 md:my-auto'>
            <video muted loop autoPlay playsInline className="max-h-full mx-auto" src="/tutorial-sale-update.mp4"></video>
        </div>
        <div className="w-full md:w-1/2 h-full flex flex-col md:items-left justify-center text-white ">
            <h3 className="text-3xl text-left mb-6">Steps:</h3>
            <ol className="text-xl text-justify">
                <li>1. In the "Settings" page, tap on the sale you'd like to edit.</li>
                <li>2. Edit the sale however you would like.</li>
                <li>3. Tap the update button.</li>
            </ol>
        </div>
    </div>
    )
    const importBlock = (
    <div className="w-full h-full px-4 flex flex-col overflow-y-scroll md:flex-row">
        <div className='h-full w-full md:w-1/2 md:h-full my-4 md:my-auto'>
            <video muted loop autoPlay playsInline className="max-h-full mx-auto" src="/tutorial-import.mp4"></video>
        </div>
        <div className="w-full md:w-1/2 h-full flex flex-col md:items-left justify-center text-white ">
            <h3 className="text-3xl text-left mb-6">Steps:</h3>
            <ol className="text-xl text-justify">
                <li>1. Download your excel file template (below) and type / copy-paste your inventory there.</li>
                <li className="pl-5">(If building your own excel file, be sure it follows the exact format pictured in the app.)</li>
                <li>2. In the "Settings" page, tap "Import."</li>
                <li>3. "Tap Import Excel File."</li>
                <li>4. Select the correct excel file (if on an iPhone, this should be in your Files app).</li>
                <button onClick={handleDownload} className="lora border border-white rounded-xl py-2 px-4 mt-2
                hover:bg-white hover:text-black hover:transform hover:scale-105 transition-all duration-200">Download Excel Template</button>
            </ol>
        </div>
    </div>
    )



    return (
        <div id="help" className="page-block bg-black">
            <div className="flex flex-col w-full h-3/4">
                {/* Top 1/4 */}
                <div className="mx-auto h-1/6 w-full md:w-1/2 flex items-center justify-center">
                    <button id="tutorial-refund" onClick={handleClick} 
                        className="lora text-white w-1/3 h-2/3 rounded-l-full border border-white hover:bg-white hover:text-black
                        hover:transform hover:scale-105 transition-all duration-200">
                            Processing Refunds</button>
                    <button id="tutorial-import" onClick={handleClick} 
                        className="lora text-white w-1/3 h-2/3 border border-white hover:bg-white hover:text-black
                        hover:transform hover:scale-105 transition-all duration-200">
                            Importing Your Inventory</button>
                    <button id="tutorial-edit-sales" onClick={handleClick} 
                        className="lora text-white w-1/3 h-2/3 rounded-r-full border border-white hover:bg-white hover:text-black
                        hover:transform hover:scale-105 transition-all duration-200">
                            Editing Sales</button>
                </div>
                {/* Bottom 3/4 */}
                <div className="h-5/6 w-full flex">
                    {block}
                </div>
            </div>
        </div>
    )
}
export default Help