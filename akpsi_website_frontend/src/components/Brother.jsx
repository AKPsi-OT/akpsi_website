import '../styles/Brother.css'
//import testImage from '../static/brother-headshots/test.jpg';
function Brother(props) {
    return (
        <div className="brotherDiv">
            <h2>{props.name}</h2>
            {props.eboard && <p><i>{props.position}</i></p>}
            <img src={props.image.path} />
        </div>


    )
}

export default Brother