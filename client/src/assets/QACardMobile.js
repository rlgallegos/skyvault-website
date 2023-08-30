import { useEffect, useState } from "react"
import { IoMdClose } from "react-icons/io";


function QACardMobile({question, answer, difference, setLocation, index, selectedIndex, setSelectedIndex }){
    const [bringForward, setBringForward] = useState(false)
    const [distance, setDistance] = useState(difference)

    function handleClick(){
        setBringForward(() => !bringForward)

        if (!bringForward){
            setSelectedIndex(() => index)
        } else {
            setSelectedIndex(() => 0)
        }
    }
    useEffect(() => {
            setDistance((distance) => {
                if (index === selectedIndex){
                    return 360
                } else {
                    setBringForward(false)
                    return difference
                }
            })
    }, [selectedIndex, difference, index])

    return (
        <div style={{ top: `${distance}px`}} onClick={handleClick}
        className={`point absolute border border-gray-700 bg-[#030B14] px-1 w-full min-h-[150px] ${bringForward && 'border-tertiary z-40'} `}>

            <div className={`w-full h-1/6 flex items-center text-left pt-4 px-4 relative`}>
                <IoMdClose className={`text-white absolute top-5 right-5 ${!bringForward && 'hidden'}`} />
                <h3 className="text-white font-bold">{question}</h3>
            </div>

            <div className={`w-full h-5/6 text-justify p-8 mt-4 ${!bringForward && 'flex items-end'}`}>
                {bringForward ? 
                <p className="text-white">{answer}</p> : 
                <p className={`text-white text-center mx-auto mb-8 ${selectedIndex !== 0 && 'hidden'}`}>(Tap to ask)</p>  }
            </div>

        </div>
    )
}
export default QACardMobile