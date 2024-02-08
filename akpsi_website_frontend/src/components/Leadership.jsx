import '../styles/Leadership.css'
import boardMembers from '../static/executiveboard.json'

/*
- read information from the JSON file, and then dynamically create
components from that. Embed the Brother component inside of this component.
*/

function Leadership() {
    return (
        <>
            <h1>Leadership</h1>
            <h2>Executive Board</h2>
            {boardMembers.map((member) => (
                <BoardMember key={member.id} name={member.name} position={member.position} image={member.image} />
            ))}
        </>
    )
}

export default Leadership