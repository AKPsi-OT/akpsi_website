import React from 'react';
function Award(props) {
    return (
        <div>
            <h2><strong>{props.awardName}</strong> - {props.recipient} {props.year}</h2>
            <p><i>
                {props.description}
            </i></p>
        </div>
    );
}

export default Award;