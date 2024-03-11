import '../styles/Leadership.css'
import boardMembers from '../static/executiveboard.json'
import Brother from './Brother'

/*
- read information from the JSON file, and then dynamically create
components from that. Embed the Brother component inside of this component.
*/

function Leadership() {
    return (
    
        <div className="boardMemberDiv">
            <h2><u>Omega Theta Chapter Executive Board</u></h2>
            <div className="boardMemberContainer">
                {boardMembers.map((member) => (
                    <Brother key={member.id} name={member.name} position={member.position} image={member.image} eboard={member.eboard}/>
                ))}
            </div>
           
        </div>
    )
}

export default Leadership