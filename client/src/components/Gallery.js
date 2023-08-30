import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { galleryPaths } from "../data";

import { useRef } from "react";

function Gallery(){
    const carouselRef = useRef(null)
    let uniqueID = 500
    const images = galleryPaths.map(path => {
        uniqueID++
        return <img key={uniqueID} src={path} alt="preview" className="" />
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
        const carousel = carouselRef.current
        const offsetX = -currentIndex * 100;
        carousel.style.transform = `translateX(${offsetX}%)`;
    }
      


    return (
        <div id="gallery" className="page-block relative">

            {/* Desktop */}
            <div className="hidden md:flex w-full h-full">
                <div className="w-full h-full bg-black justify-left flex">
                    <div className="w-full">
                        <img className="mx-auto w-auto h-3/4" src="/phone-inventory-black-bg.png" alt="inventory page" />
                    </div>
                    <div className="w-full">
                        <img className="mx-auto w-auto h-3/4" src="/phone-add-item-black-bg.png" alt="sold page" />
                    </div>
                </div>

                <div className="text-white absolute bottom-10 lora text-6xl flex flex-col w-full mx-auto">
                    <h1 className="text-left w-1/2 mx-auto mb-4">Small Business</h1>
                    <h1 className="text-left pl-40 w-1/2 mx-auto">Inventory Made <i>Easy</i>.</h1>
                </div>
            </div>

            {/* Mobile Carousel */}
            <div className="md:hidden w-full h-full flex items-center bg-black">
                <div className="w-full h-full flex flex-col relative">
                    <div id="carousel" ref={carouselRef} className="w-full h-11/12 flex transition-transform duration-500">
                        {images}
                    </div>
                    <div className="w-full h-20 flex justify-between px-10 absolute bottom-8">
                            <IoIosArrowDropleft className="text-white w-12 h-12 active:bg-white active:text-black rounded-xl " 
                            onClick={handleScrollLeft} />
                            <IoIosArrowDropright className="text-white w-12 h-12 active:bg-white active:text-black rounded-xl " 
                            onClick={handleScrollRight} />
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Gallery