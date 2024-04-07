import '../styles/Alumni.css'
import alumni from '../static/imgs/alumni.webp'
import AlumniCarousel from './AlumniCarousel'

/*
    simple text, for the image (ask for an update version for companies),
    Slideshow Link (provided by Aaron): https://coreui.io/react/docs/components/carousel/#:~:text=React%20carousel%20is%20a%20slideshow,of%20text—like%20a%20carousel.
*/
function Alumni() {
    return (
        <div className="alumni-div">
            <div className="alumni-div-content">
                <h1 style={{textAlign:"center"}}><b>ALUMNI</b></h1>
                <h2 style={{textAlign:"left"}}><b>Where are they now?</b></h2>
                <p style={{textAlign:"left"}}>
                    Our wonderful alumni may have moved onto bigger and better things, but they shall never be forgetten for their
                    time and dedication they put into this fraternity.
                </p>
                <div className="alumni-img-container">
                        <img className="alumni_img" src={alumni}  style={{ transform: 'scale(0.7)'}} alt="alumni"/>
                </div>
                <h2 style={{textAlign:"left"}}><b>Graduating Classes</b></h2>

            </div>
            <AlumniCarousel></AlumniCarousel>
        </div>
    )
}

export default Alumni