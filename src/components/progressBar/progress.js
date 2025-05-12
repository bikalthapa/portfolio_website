import "./progress.css";
function Progress(props){
    return(
        <div className="progressContainer">
            <p className="m-0">{props.title}</p>
            <div className="progressBar">
                <div className="progressIndicator" style={{width: props.width+"%"}}></div>
            </div>
        </div>
    );
}
export default Progress;