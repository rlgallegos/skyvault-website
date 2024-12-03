'use client'

interface Props {
    src: string
    steps: string[]
    button?: boolean
}

const HelpBlock: React.FC<Props> = ({src, steps, button = false}) => {
    function handleDownload() {
        const templateLocation = '/import-template.xlsx'
        window.open(templateLocation, '_blank')
    }

    const list = steps.map((step, i) => {
        return <li key={i}>{step}</li>
    })

    return (
        <div className="w-full xl:w-3/4 h-full px-5 flex flex-col justify-evenly items-center overflow-y-scroll md:flex-row mx-auto">

            {/* Video */}
            <div className='h-2/3 w-full md:w-1/3 md:h-full my-4 lg:my-auto flex items-center'>
                <video muted loop autoPlay playsInline className="max-h-full mx-auto" src={src}></video>
            </div>

            {/* Text */}
            <div className="w-full h-1/3 md:h-auto md:w-1/2 flex flex-col space-y-6 md:items-left p-4 md:p-6 lg:p-12 lg:justify-center bg-white border-2 border-skyBlue overflow-y-auto">
                <h3 className="lora text-xl text-left ">Steps:</h3>
                <ol className="text-justify space-y-2">{list}</ol>
                {button && <button onClick={handleDownload} className="button border text-white bg-skyBlue border-skyBlue rounded-full py-2 px-4 mt-2
                hover:bg-white hover:text-skyBlue hover:transform hover:scale-105 transition-all duration-200">Download Excel Template</button>}
            </div>
        </div>
        )
}
export default HelpBlock