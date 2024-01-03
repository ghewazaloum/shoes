import './GlassContainer.css'
function GlassContainer (props){
    return(
        <div className="GlassContainer">
            {props.children}
        </div>
    )
}
function SmallGlassContainer (props){
    return(
        <div className="SmallGlassContainer">
            {props.children}
        </div>
    )
}
function TinyGlassContainer (props){
    return(
        <div className="TinyGlassContainer">
            {props.children}
        </div>
    )
}
export default GlassContainer
export {SmallGlassContainer}
export {TinyGlassContainer}