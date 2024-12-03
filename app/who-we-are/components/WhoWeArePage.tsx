import { usParagraphs } from "@/app/data"

const WhoWeArePage: React.FC = () => {
    const text = usParagraphs.map((p, i) => {
        return <p key={i} className="mb-4">{p}</p>
    })


    return (
        <div className="h-screen py-4">
            <div className="w-full h-full relative flex items-center justify-center">
                
                {/* Desktop / Tablet */}
                <div className="hidden md:flex md:flex-col w-3/4 h-3/4 space-y-4 xl:space-y-0 xl:border border-skyBlue
                bg-opacity-70 items-center justify-center">

                    {/* Title Block */}
                    <div className="w-full h-1/6 xl:h-1/4 flex items-center justify-center border-b border-skyBlue bg-skyBlue">
                        <h1 className="subtitle h-1/4">
                            Who We Are</h1>
                    </div>

                    <div className="w-full h-5/6 xl:h-3/4 flex flex-col justify-between xl:flex-row space-y-4 xl:space-y-0">
                        {/* Image */}
                        <div className="bg-skyBlue border border-white h-2/3 xl:h-full mx-auto flex-shrink-0">
                            <img src="founder.png" alt="founder" className="w-auto h-full"/>
                        </div>
                        {/* Text */}
                        <div className="flex-col bg-white text-justify p-8 overflow-y-auto ">
                            {text}
                        </div>
                    </div>

                </div>

                {/* Mobile */}
                <div className="flex flex-col justify-evenly items-center absolute md:hidden w-11/12 h-full
                top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 space-y-4">

                    <div className="w-full h-1/6 flex items-center justify-center border-b border-skyBlue bg-skyBlue">
                        <h1 className="subtitle">Who We Are</h1>
                    </div>

                    <div className="bg-skyBlue border border-white h-1/2 flex-shrink-0">
                        <img src="founder.png" alt="founder" className="w-auto h-full"/>
                    </div>

                    <div className="flex-grow flex-col bg-white text-justify p-8 overflow-y-auto border border-skyBlue">
                        {text}
                    </div>

                </div>

            </div>
        </div>
    )
}
export default WhoWeArePage