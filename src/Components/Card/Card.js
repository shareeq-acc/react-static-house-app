import Button from "../Button/Button"

const Card = ({ imgSrc, title, className }) => {
    return (
        <div className={`card ${className ? className : ""}`}>
            <div className="card-img-wrap">
                <img className="card-img" src={imgSrc} alt={""} />
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt
                </p>
                <Button text={"See More"} className={"card-btn"} bg={"transparent"} border={"white"} />
            </div>
        </div>
    )
}

export default Card