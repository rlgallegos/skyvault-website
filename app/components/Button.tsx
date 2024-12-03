

interface Props {
    onClick: () =>  void
    text: string
}

const Button: React.FC<Props> = ({onClick, text}) => {
    return (
        <button id="tutorial-refund" onClick={onClick} 
        className="button">
            {text}
        </button>
    )
}
export default Button