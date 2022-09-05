import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import image from "../../../Assets/images/about-us.png"

const AboutUs = () => {
  return (
    <section className="section-layout about-us-section section-padding" id="about">
      <div className="section-col about-us-img-wrap img-wrap">
        <img src={image} alt="" className="main-img" />
      </div>
      <div className="section-col about-us-content-wrap">
        <h2>About Us</h2>
        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div className="contact-wrap">
          <div className="contact">
            <FontAwesomeIcon icon={faPhone} />
            <span>+01 24 5678 91011</span>
          </div>
          <div className="contact">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>work@myemail.com</span>
          </div>
          <div className="contact">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Your Address Here</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs