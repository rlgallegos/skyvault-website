

import PageWrapper from "../components/PageWrapper";
import WhoWeArePage from "./components/WhoWeArePage";

const WhoWeAre: React.FC = () => {
    return (
        <PageWrapper mobileBgClass={" bg-who-we-are-mobile "} desktopBgClass={"xl:bg-who-we-are-desktop"}>
            <WhoWeArePage />
        </PageWrapper>
    )
}
export default WhoWeAre