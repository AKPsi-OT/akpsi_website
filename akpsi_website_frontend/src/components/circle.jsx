import '../styles/Circle.css';
function Circle(props) {
    return (
        <div className="circle-div" style={{backgroundColor: props.color, color:props.text}}>
            <p>{props.insideText}</p>
        </div>
    );
}

export default Circle;