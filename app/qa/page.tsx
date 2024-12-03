

import PageWrapper from "../components/PageWrapper";
import QAPage from "./components/QAPage";

const QA: React.FC = () => {
    return (
        <PageWrapper mobileBgClass={'bg-qa-mobile'} desktopBgClass={'xl:bg-qa-desktop'}>
            <QAPage />
        </PageWrapper>
    )
}
export default QA