import image from "../../../Assets/images/main-img.png"
import Button from "../../../Components/Button/Button"
const Main = () => {
    return (
        <main className="main-section section-layout section-padding" id="main">
            <div className="main-content-wrap section-col">
                <h1 className="main-heading">Future is Now</h1>
                <h2 className="main-sub-heading">Smart Home</h2>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                <Button text={"See More"} className={"main-btn"} bg={"transparent"} border={"white"}/>
            </div>
            <div className="img-wrap section-col">
                <img src={image} alt="house-img" className="main-img" />
            </div>

        </main>
    )
}

export default Main