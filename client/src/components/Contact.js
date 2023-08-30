import Socials from "../assets/Socials"

function Contact(){
    return (
        <div id="contact" className="page-block">
            <div className="w-full h-full relative">
                <img className="absolute inset-0 w-full h-full object-cover z-0" src="/laptop-bg.jpg" alt="wall background" />
                
                {/* Desktop */}
                <div className="hidden md:flex w-1/2 h-1/2 bg-black bg-opacity-70 absolute inset-1/4 items-center justify-center">
                    <div className="w-3/4 h-3/4 border border-white mx-auto flex flex-col items-center justify-center">
                        <h1 className="lora text-white text-4xl h-1/4 my-4">Stay in Touch</h1>
                        <Socials />
                    </div>
                </div>

                {/* Mobile */}
                <div className="flex absolute md:hidden w-11/12 h-1/2 bg-black bg-opacity-70 
                top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 items-center justify-center">
                    <div className="w-3/4 h-3/4 border border-white mx-auto flex flex-col items-center justify-center">
                        <h1 className="lora text-white text-xl my-4 w-full h-1/6">Stay in Touch</h1>
                        <Socials />
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Contact