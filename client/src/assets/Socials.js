import { SlSocialInstagram, SlSocialFacebook, SlEnvolope } from "react-icons/sl";

function Socials(){
    return (
        <div className="w-full h-1/2 flex items-center justify-evenly">
            <div className="h-1/3 w-full">
                <a href="https://www.instagram.com/skyvault_inventory/" className="point h-full w-full">
                    <SlSocialInstagram className="text-white h-full w-full
                    hover:transform hover:scale-110 transition-all duration-200" />          
                </a>
            </div>
            <div className="h-1/3 w-full">
                <a href="https://skyvaultinventory.com/" className="point h-full w-full">
                    <SlSocialFacebook className="text-white h-full w-full
                    hover:transform hover:scale-110 transition-all duration-200" />          
                </a>
            </div>
            <div className="h-1/3 w-full">
                <a href="mailto:info@skyvaultinventory.com" className="point h-full w-full">
                    <SlEnvolope className="text-white h-full w-full
                    hover:transform hover:scale-110 transition-all duration-200" />          
                </a>
            </div>
        </div>
    )
}
export default Socials