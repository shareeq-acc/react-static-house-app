import image from "../../../Assets/images/section-1-img-alt.png"
import bg1 from "../../../Assets/images/section-1-pattern-1.png"
import bg2 from "../../../Assets/images/section-1-pattern-2.png"

const SecuritySystem = () => {
    const patternStyle = {
        backgroundImage: `url(${bg1}), url(${bg2})`,
        backgroundPosition: "left top, right top",
        backgroundRepeat: "no-repeat",
    }
    return (
        <section className='security-system-section section-layout section-padding'>
            <div className="bg-pattern" style={patternStyle}></div>
            <div className='section-layout security-system'>
                <div className='.section-col img-wrap security-img-wrap'>
                    <img src={image} alt={"security"} className="security-img main-img" />
                </div>
                <div className='section-col security-topic-content'>
                    <h2 className="title">Smart Home</h2>
                    <p className="sub-heading-s">Security System</p>
                    <p className="description">
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default SecuritySystem