import "../CSS/barAnim.css"
const Undertitle = (props) =>{
    const className = props.className
    return (
        <div className="bardisplay">
        <div className="barcontent rounded-full">
            <div className={className} id="bille1"></div>
        </div>
    </div>
    )
}
export default Undertitle;