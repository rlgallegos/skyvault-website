'use client'
import { useEffect, useState } from "react"
import { IoMdClose } from "react-icons/io";


interface Props {
    question: string
    answer: string
    difference: number
    index: number
    selectedIndex: number
    onSelectIndex: () => void
}


const QACardMobile: React.FC<Props> = ({question, answer, difference, index, selectedIndex, onSelectIndex }) => {
    const [bringForward, setBringForward] = useState(false)
    const [distance, setDistance] = useState(difference)

    useEffect(() => {
            setDistance(() => {
                if (index === selectedIndex){
                    setBringForward(true)
                    return 360
                } else {
                    setBringForward(false)
                    return difference
                }
            })
    }, [selectedIndex, difference, index])


    return (
        <div style={{ top: `${distance}px`}} onClick={() => {onSelectIndex()}}
        className={`point absolute border px-1 w-full min-h-[150px] translate-all duration-500
        ${bringForward ? 'z-40 qa-mobile-card text-white border-white' : 'bg-white border-skyBlue'} `}
        >

            <div className={`w-full h-1/6 flex items-center text-left pt-4 px-4 relative`}>
                <IoMdClose className={`absolute top-5 right-5 ${!bringForward && 'hidden'}`} />
                <h3 className={`font-bold`}>{question}</h3>
            </div>

            <div className={`w-full h-5/6 text-justify p-8 mt-4 ${!bringForward && 'flex items-end'}`}>
                {bringForward ? 
                <p className="">{answer}</p> : 
                <p className={`text-center mx-auto mb-8 ${selectedIndex !== 0 && 'hidden'}`}>(Tap to ask)</p>  }
            </div>

        </div>
    )
}
export default QACardMobile