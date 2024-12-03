'use client'

interface Props {
    question: string
    answer: string
    small: boolean
}

const QACard: React.FC<Props> = ({question, answer, small}) => {
    
    return (
        <div className={`border border-skyBlue bg-white rounded-3xl drop-shadow-2xl p-4 flex flex-col justify-start space-y-6

        ${small ? 'w-[28vw] h-2/3 xl:h-3/4' 

        : 'w-[40vw] xl:w-1/3 h-1/2 xl:h-3/4'}`}>

            <div className={`w-full text-left`}>
                <h3 className="text-xl font-bold">{question}</h3>
            </div>

            <div className={`w-full text-justify pl-5 overflow-y-auto no-scrollbar`}>
                <p className="">{answer}</p>
            </div>

        </div>
    )
}
export default QACard