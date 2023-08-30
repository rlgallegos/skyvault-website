

function QACard({question, answer, small}){
    
    return (
        <div className={`border border-gray-700 bg-secondary bg-opacity-10 ${small ? 'w-1/4 h-4/5' : 'w-1/3 h-3/4'}`}>
            <div className={`w-full h-1/4 flex items-center text-left pt-4 px-4`}>
                <h3 className="text-white font-bold">{question}</h3>
            </div>
            <div className={`w-full h-1/4 flex items-center justify-end text-justify p-4 mt-8 px-6 pl-8`}>
                <p className="text-white">{answer}</p>
            </div>
        </div>
    )
}
export default QACard