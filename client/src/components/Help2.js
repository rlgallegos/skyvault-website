

function Help2(){
    return (
        <div className="block bg-black">
            <div className="flex flex-col w-full h-full">
                {/* Top 1/4 */}
                <div className="h-1/4 w-full flex items-center justify-center">
                    <div className="h-full w-1/2 flex items-center justify-center">
                        <h2 className="text-white text-3xl text-center font-bold">Process Refunds</h2>
                    </div>
                    <div className="h-full w-1/2 flex items-center justify-center">
                        <h2 className="text-white text-3xl text-center font-bold">Edit Sales</h2>
                    </div>
                </div>
                {/* Bottom 3/4 */}
                <div className="h-3/4 w-full flex">

                    <div className="w-1/2 h-full flex">
                        <div className='h-5/6 w-2/3'>
                            <img className="max-h-full mx-auto" src="/phone-inventory-black-bg.png" alt="placeholder" />
                        </div>
                        <div className="w-1/3 h-full flex flex-col items-center justify-center text-white">
                        <h3 className="text-3xl mb-6">Steps:</h3>
                            <ol className="text-xl">
                                <li>Step 1</li>
                                <li>Step 2</li>
                                <li>Step 3</li>
                            </ol>
                        </div>
                    </div>

                    <div className="w-1/2 h-full flex">
                        <div className='h-5/6 w-2/3'>
                            <img className="max-h-full mx-auto" src="/phone-inventory-black-bg.png" alt="placeholder" />
                        </div>
                        <div className="w-1/3 h-full flex flex-col items-center justify-center text-white">
                        <h3 className="text-3xl mb-6">Steps:</h3>
                            <ol className="text-xl">
                                <li>Step 1</li>
                                <li>Step 2</li>
                                <li>Step 3</li>
                            </ol>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Help2