import { galleryPaths } from "@/app/data"

import GalleryImage from "@/app/components/GalleryImage"
import Tagline from "./Tagline"

const GalleryDesktop: React.FC = () => {
    const images = galleryPaths.map((path, index) => {
        return <GalleryImage key={index} source={path} alt={`screenshot ${index + 1}`} />
    })

    return (
        <div className="hidden xl:flex flex-col w-full h-full">

            <div className="flex w-full py-8 justify-evenly items-center ">
                {images[0]}
                {images[1]}
            </div>

            <div className="">
                <Tagline />
            </div>

            <div className="flex w-full py-8 justify-evenly items-center ">
                {images[2]}
                {images[3]}
                {images[4]}
            </div>

        </div>
    )
}
export default GalleryDesktop