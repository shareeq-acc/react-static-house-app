import img1 from "../../../Assets/images/card-img-1.png"
import img2 from "../../../Assets/images/section-alt-img.png"
import img3 from "../../../Assets/images/card-img-3.png"
import Card from "../../../Components/Card/Card"

const SecurityModeType = () => {

    const cardsData = [
        {
            title: "Type A",
            src: img1
        },
        {
            title: "Type B",
            src: img2
        },
        {
            title: "Type C",
            src: img3
        }
    ]
    return (
        <div className="security-mode-type-container section-padding" id="modes">
            <h1 className="security-mode-type-title">Security Mode Type</h1>
            <div className="card-container">
                {
                    cardsData.map((element, index) => {
                        return <Card key={index} imgSrc={element.src} title={element.title} />
                    })
                }
            </div>
        </div>
    )
}

export default SecurityModeType