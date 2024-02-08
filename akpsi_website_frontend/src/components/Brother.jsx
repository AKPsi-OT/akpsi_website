import '../styles/Brother.css'
function Brother(props) {
    return (
        <>
            <h1>{props.name}</h1>
            {props.eboard && <p>{props.position}</p>}
            <img src={props.image} />

        </>

    )
}

export default Brother