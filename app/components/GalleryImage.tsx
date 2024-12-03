


interface Props {
    source: string
    alt: string
}


const GalleryImage: React.FC<Props> = ({source, alt}) => {
    return (
        <div className="flex items-center justify-center h-[70vh] w-auto">
            <img className="mx-auto w-auto h-full" src={source} alt={alt} />
        </div>
    )
}
export default GalleryImage