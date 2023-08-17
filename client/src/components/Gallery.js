

function Gallery(){
    return (
        <div id="gallery" className="block bg-blue-100">
            <div className="w-full h-full flex">
                <div className="w-full h-full bg-black justify-left flex">
                    <div className="w-full">
                        <img className="mx-auto w-auto h-3/4" src="/phone-inventory-black-bg.png" alt="inventory page" />
                    </div>
                    <div className="w-full">
                        <img className="mx-auto w-auto h-3/4" src="/phone-add-item-black-bg.png" alt="sold page" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Gallery