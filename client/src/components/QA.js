import QACard from "../assets/QACard"
import { questions, largeQuestions } from "../data"

function QA(){
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


    return (
        <div id="qa" className="block bg-black flex-col pt-[10vh]">
            <div className="h-1/3 w-full flex items-center justify-between px-8">
                {cards}
            </div>
            <h1 className="source-sans h-1/6 text-white text-5xl my-4 flex items-center justify-center">Questions?  Answers.</h1>
            <div className="h-1/2 w-full flex items-center justify-evenly px-8">
                {largeCards}
            </div>
        </div>
    )
}
export default QA