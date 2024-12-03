'use client'

import { useRef } from "react";

import WingButton from "@/app/components/WingButton";
import { galleryPaths } from "@/app/data";



const GalleryMobile: React.FC = () => {

    const carouselRef = useRef<HTMLDivElement>(null);
    let uniqueID = 500
    const images = galleryPaths.map((path, index)=> {
        uniqueID++
        return (
            <div key={uniqueID} className={`w-screen h-full flex items-center justify-center px-12`}>
                <img src={path} alt={`preview ${index + 1}`} className="mx-auto" />
            </div>
        );
    })

    function handleScrollLeft(){
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    }
    function handleScrollRight(){
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    }




    let currentIndex = 0
    function updateCarousel() {
        const carousel = carouselRef?.current
        if (!carousel){
            return
        }
        const distance = currentIndex === 0 ? 0 : -(window.innerWidth * currentIndex);
        carousel.style.transform = `translateX(${distance}px)`;
    }

    return (
        <div id="gallery" className={`overflow-hidden min-h-screen xl:hidden`} >
            <div className="w-full h-full flex flex-col items-start relative py-12">

                <div ref={carouselRef} className="flex h-full transition-transform duration-500 overflow-x-hidden">
                    {images}
                </div>

                <div className="w-full flex justify-between px-2 md:px-48 absolute bottom-0 md:bottom-8 items-center ">
                    <WingButton onTap={() => handleScrollLeft()} direction={'right'}/>
                    <WingButton onTap={() => handleScrollRight()} direction={'left'}/>
                </div>

            </div>
        </div>
)
}
export default GalleryMobile