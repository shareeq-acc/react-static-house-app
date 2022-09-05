import image from "../../../Assets/images/section-alt-img.png"
import Button from "../../../Components/Button/Button.js"
const SmartSection = () => {
    return (
        <section className="smart-section section-layout section-padding">
            <div className="section-col smart-section-img-wrap">
                <img src={image} alt="house" className="img" />
            </div>
            <div className="section-col smart-section-content-wrap">
                <h1 className="title-xl main-heading">Smart Home</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <Button text={"Read More"} className={"section-btn"} bg={"transparent"} border={"white"} />
            </div>
        </section>
    )
}

export default SmartSection