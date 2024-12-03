

import PageWrapper from "../components/PageWrapper";
import HelpPage from "./components/HelpPage";

const Help: React.FC = () => {
    return (
        <PageWrapper mobileBgClass={"bg-help-mobile"} desktopBgClass={"xl:bg-help-desktop"}>
            <HelpPage />
        </PageWrapper>
    )
}
export default Help