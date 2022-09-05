import AboutUs from "./Sections/AboutUs.js"
import AppSection from "./Sections/AppSection.js"
import Main from "./Sections/Main.js"
import SecurityFeatures from "./Sections/SecurityFeatures.js"
import SecurityModeType from "./Sections/SecurityModeType.js"
import SecuritySystem from "./Sections/SecuritySystem.js"
import SmartSection from "./Sections/SmartSection.js"

const Home = () => {
    return (
        <div className="home">
            <Main />
            <SecuritySystem />
            <SecurityFeatures />
            <SecurityModeType />
            <SmartSection />
            <AppSection />
            <AboutUs />
        </div>
    )
}

export default Home