

function Help(){
    return (
        <div id="help" className="block bg-black pt-[10vh] ">
            <div className="flex flex-col w-full h-full">
                <div className="h-1/4 w-full flex items-center px-8 justify-center">
                    <h2 className=" text-white text-4xl text-center">Upload Your Inventory In Seconds</h2>
                </div>
                <div className="h-3/4 w-full flex justify-between items-center">
                    <div className="h-full w-1/4 border border-white">
                        <video muted loop className="h-full mx-auto" src="/tutorial-import.mp4"></video>
                    </div>
                    <div className="h-full w-1/4 border border-white flex flex-col items-center justify-center">
                        <p className="text-3xl text-white">Easy as 1-2-3!</p>
                        <ol className="py-4">
                            <li className="text-white text-xl my-4">
                                Open Settings
                            </li>
                            <li className="text-white text-xl my-4">
                                Do Stuff
                            </li>
                            <li className="text-white text-xl my-4">
                                Presto!
                            </li>
                        </ol>
                    </div>
                    {/* <div className="h-full w-1/4 border border-white">
                        <img className="h-full mx-auto" src="/phone-settings-import-black-bg.png" alt="import button" />
                    </div> */}
                </div>
            </div>
        </div>
    )
}
export default Help