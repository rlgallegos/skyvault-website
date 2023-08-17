import Socials from "../assets/Socials"

function Contact(){
    return (
        <div id="contact" className="block">
            <div className="w-full h-full relative">
                <img className="absolute inset-0 w-full h-full object-cover z-0" src="/laptop-bg.jpg" alt="wall background" />
                {/* <div className="w-1/3 h-full bg-black absolute right-0 bottom-0 bg-opacity-70">
        
                </div> */}
                <div className="w-1/2 h-1/2 bg-black bg-opacity-70 absolute inset-1/4 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 border border-white mx-auto flex flex-col items-center justify-center">
                        <h1 className="lora text-white text-4xl h-1/4 my-4">Stay in Touch</h1>
                        <Socials />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact