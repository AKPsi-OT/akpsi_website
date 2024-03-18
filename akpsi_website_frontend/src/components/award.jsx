function Award(props) {
    return (
        <div>
            <p><strong>{props.awardName}</strong> - {props.recipient} {props.year}</p>
            <p><i>
                {props.description}
            </i></p>
        </div>
    );
}

export default Award;