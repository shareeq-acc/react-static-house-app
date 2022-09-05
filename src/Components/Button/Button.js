
const Button = ({ text, className, textColor, bg, border, onClick }) => {
    const style = {
        color: textColor || "white",
        backgroundColor: bg || "transparent",
        border: `1px solid ${border ? border : "white"}`
    }
    return (
        <button className={`btn ${className? className:""}`} style={style} onClick={onClick}>{text}</button>
    )
}

export default Button