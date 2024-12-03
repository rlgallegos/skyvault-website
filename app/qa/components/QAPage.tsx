'use client'
import { useState } from "react"

import { questions, largeQuestions } from "@/app/data"

import QACard from "./QACard"
import QACardMobile from "./QACardMobile"

const QAPage:React.FC = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    console.log(selectedIndex)

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

    const handleSelectIndex = (i: number) => {
        if (i === selectedIndex){
            setSelectedIndex(0)
        } else {
            setSelectedIndex(i)
        }
    }

    let difference = -60
    const mobileCards = completeQuestionList.map((question, i) => {
        difference += 60
        return <QACardMobile key={i + 1} question={question.question} answer={question.answer} difference={difference} 
        index={i + 1} selectedIndex={selectedIndex} onSelectIndex={() => {handleSelectIndex(i + 1)}} />
    })
    return (
        <div id="qa" className="flex-col h-screen pt-6" >
            
            <div className="hidden lg:flex flex-col h-full w-full ">
                <div className="h-1/3 w-full flex items-center justify-between px-8">
                    {cards}
                </div>
                <h1 className="title h-1/6 my-4 flex items-center justify-center">
                    Questions?  Answers.
                </h1>
                <div className="h-1/2 w-full flex items-start justify-evenly px-8">
                    {largeCards}
                </div>
            </div>

            <div className="absolute lg:hidden h-full w-full">
                {mobileCards}
            </div>

        </div>
    )
}
export default QAPage