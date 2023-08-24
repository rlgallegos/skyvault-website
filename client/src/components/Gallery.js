

function Gallery(){
    return (
        <div id="gallery" className="block bg-blue-100 relative">
            <div className="w-full h-full flex">

                <div className="w-full h-full bg-black justify-left flex">
                    <div className="w-full">
                        <img className="mx-auto w-auto h-3/4" src="/phone-inventory-black-bg.png" alt="inventory page" />
                    </div>
                    <div className="w-full">
                        <img className="mx-auto w-auto h-3/4" src="/phone-add-item-black-bg.png" alt="sold page" />
                    </div>
                </div>

                <div className="text-white absolute bottom-10 lora text-6xl flex flex-col w-full mx-auto">
                    <h1 className="text-left w-1/2 mx-auto mb-4">Small Business</h1>
                    <h1 className="text-left pl-40 w-1/2 mx-auto">Inventory Made <i>Easy</i>.</h1>
                </div>
            
            </div>
        </div>
    )
}
export default Gallery