

interface Props {
    onTap: () => void
    direction: string
}

const WingButton: React.FC<Props> = ({onTap, direction}) => {
    return (
        <div className="w-20 h-20 rounded-full bg-white relative border-2 border-skyBlue active:bg-lightGray" onClick={onTap}>
            <img className="absolute w-2/3 h-2/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src={`images/branded/blue-wing-${direction}.png`} alt="wing"/>
        </div>
    )
}
export default WingButton