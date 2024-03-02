import './Container.css'
function Container (props) {
    return (
        <div className="Container">
            {props.children}
        </div>
    );
}
function ColumnContainer (props) {
    return (
        <div className="ColumnContainer">
            {props.children}
        </div>
    );
}
export default Container;
export {ColumnContainer};