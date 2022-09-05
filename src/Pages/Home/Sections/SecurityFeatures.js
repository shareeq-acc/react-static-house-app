import image1 from "../../../Assets/images/feature-1.png"
import image2 from "../../../Assets/images/feature-2.png"
import image3 from "../../../Assets/images/feature-3.png"
const SecurityFeatures = () => {
    return (
        <div>
            <div className='section-layout security-system-features section-padding'>
                <div className='section-col security-section-features'>
                    <div className="features-img-wrap">
                        <img src={image1} alt="feature-img" className="security-feature-img" />
                    </div>
                    <h3 className="features-title">Security System</h3>
                    <p className="features-description">Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt
                    </p>
                </div>
                <div className='section-col security-section-features'>
                    <div className="features-img-wrap">
                        <img src={image2} alt="feature-img" className="security-feature-img" />
                    </div>
                    <h3 className="features-title">Smart Lamb</h3>
                    <p className="features-description">Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt
                    </p>
                </div>
                <div className='section-col security-section-features'>
                    <div className="features-img-wrap">
                        <img src={image3} alt="feature-img" className="security-feature-img" />
                    </div>
                    <h3 className="features-title">CCTV Control</h3>
                    <p className="features-description">Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SecurityFeatures