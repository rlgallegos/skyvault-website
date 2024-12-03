

import PageWrapper from "../components/PageWrapper";
import TermsPage from "./components/TermsPage";

const Terms: React.FC = () => {
    return (
        <PageWrapper mobileBgClass={"bg-terms-mobile"} desktopBgClass={"xl:bg-terms-desktop"}>
            <TermsPage />
        </PageWrapper>
    )
}
export default Terms