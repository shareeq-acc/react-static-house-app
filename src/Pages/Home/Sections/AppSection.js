import image from "../../../Assets/images/smartphone.png"
const AppSection = () => {
    return (
        <section className="section-layout app-section section-padding" id="app">
            <div className="section-col app-section-content">
                <h2>Monitor Home Remotely</h2>
                <ul className="app-section-list">
                    <li className="app-section-item">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </li>
                    <li className="app-section-item">
                        incididunt ut labore et dolore magna aliqua
                    </li>
                    <li className="app-section-item">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                    </li>
                    <li className="app-section-item">
                        reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </li>
                </ul>
            </div>
            <div className="section-col app-section-img-wrap">
                <img src={image} alt="smartphone" className="smartphone-img"/>
            </div>

        </section>
    )
}

export default AppSection