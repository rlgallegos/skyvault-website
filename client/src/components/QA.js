import { useState } from "react"
import QACard from "../assets/QACard"
import QACardMobile from "../assets/QACardMobile"
import { questions, largeQuestions } from "../data"

function QA(){
    const [selectedIndex, setSelectedIndex] = useState(0)

    let uniqueID = 100
    const cards = questions.map(question => {
        uniqueID++
        return <QACard key={uniqueID} question={question.question} answer={question.answer} small={true} />
    })
    let uniqueID2 = 200
    const largeCards = largeQuestions.map(largeQuestion => {
        uniqueID2++
        return <QACard key={uniqueID2} question={largeQuestion.question} answer={largeQuestion.answer} small={false}  />
    })
    
    const completeQuestionList = questions.concat(largeQuestions)

    let uniqueID3 = 300
    let difference = -60
    const mobileCards = completeQuestionList.map(question => {
        uniqueID3++
        difference += 60
        return <QACardMobile key={uniqueID3} question={question.question} answer={question.answer} difference={difference} 
        index={uniqueID3} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
    })

    return (
        <div id="qa" className="page-block bg-black flex-col pt-[10vh]">
            
            <div className="hidden md:flex flex-col h-full w-full">
                <div className="h-1/3 w-full flex items-center justify-between px-8">
                    {cards}
                </div>
                <h1 className="lora h-1/6 text-white text-5xl my-4 flex items-center justify-center">Questions?  Answers.</h1>
                <div className="h-1/2 w-full flex items-center justify-evenly px-8">
                    {largeCards}
                </div>
            </div>

            <div className="relative md:hidden h-full w-full">
                {mobileCards}
            </div>

        </div>
    )
}
export default QA