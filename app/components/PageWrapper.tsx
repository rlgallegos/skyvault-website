import NavBarPage from "./navbars/NavBarPage";

interface Props {
    mobileBgClass: string
    desktopBgClass: string
    children?: React.ReactNode;
}

const PageWrapper: React.FC<Props> = ({mobileBgClass, desktopBgClass, children}) => {

    const isDesktopBgClassFormattedCorrect = (str: string) => {
        return str.startsWith('xl:');
      }
    if (!isDesktopBgClassFormattedCorrect(desktopBgClass)){
        console.log("Desktop class must pass in 'xl:' with bg class")
    }
    

    return (
        <div className={`w-screen bg-center bg-cover flex flex-col`}>
            <div className="w-full z-50">
                <NavBarPage />
            </div>
            <div className={`w-full flex flex-col bg-cover bg-center bg-fixed ${mobileBgClass} ${desktopBgClass}`}>
                {children}
            </div>
        </div>
    )
}
export default PageWrapper