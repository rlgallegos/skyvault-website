import PageWrapper from "../components/PageWrapper"

import GalleryDesktop from "./components/GalleryDesktop"
import GalleryMobile from "./components/GalleryMobile"

const Gallery: React.FC = () => {


    return (
        <PageWrapper mobileBgClass="bg-gallery-mobile" desktopBgClass="xl:bg-gallery-desktop">

            {/* Tablet & Mobile */}
            <GalleryMobile />

            {/* Desktop */}
            <GalleryDesktop />

            <div></div>
        </PageWrapper>
    )
}
export default Gallery