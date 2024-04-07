import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* Image Imports */
import alumni1 from '../static/imgs/alumni1.jpg'
import alumni2 from '../static/imgs/alumni2.jpg';
import alumni3 from '../static/imgs/alumni3.jpg';
import alumni4 from '../static/imgs/alumni4.jpg';
import alumni5 from '../static/imgs/alumni5.jpg';
import alumni6 from '../static/imgs/alumni6.jpg';
import alumni7 from '../static/imgs/alumni7.jpg';
import alumni8 from '../static/imgs/alumni8.jpg';
import alumni9 from '../static/imgs/alumni9.jpg';
import alumni10 from '../static/imgs/alumni10.png';
import alumni11 from '../static/imgs/alumni11.png';
import alumni12 from '../static/imgs/alumni12.jpg';
import alumni13 from '../static/imgs/alumni13.png';
import alumni14 from '../static/imgs/alumni14.png';
import alumni15 from '../static/imgs/alumni15.jpg';
import alumni16 from '../static/imgs/alumni16.jpg';
import alumni17 from '../static/imgs/alumni17.jpg';



function AlumniCarousel() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
    }
    return (
        
        <Slider {...settings}>
            <div><img src={alumni1} alt="Image 1" style={{ display: 'block', margin: 'auto', width: '50vw', height: '30.125vw'}} /></div>
            <div><img src={alumni2} alt="Image 2" style={{ display: 'block', margin: 'auto', width: '50vw', height: '30.125vw'}} /></div>
            <div><img src={alumni3} alt="Image 3" style={{ display: 'block', margin: 'auto', width: '50vw', height: '30.125vw' }} /></div>
            <div><img src={alumni4} alt="Image 4" style={{ display: 'block', margin: 'auto', width: '50vw', height: '30.125vw' }} /></div>
            <div><img src={alumni5} alt="Image 5" style={{ display: 'block', margin: 'auto', width: '50vw', height: '30.125vw' }} /></div>
            <div><img src={alumni6} alt="Image 6" style={{ display: 'block', margin: 'auto', width: '50vw', height: '30.125vw' }} /></div>
            <div><img src={alumni7} alt="Image 7" style={{ display: 'block', margin: 'auto', width: '50vw', height: '30.125vw' }} /></div>
            <div><img src={alumni8} alt="Image 8" style={{ display: 'block', margin: 'auto', width: '50vw', height: '30.125vw' }} /></div>
            <div><img src={alumni9} alt="Image 9" style={{ display: 'block', margin: 'auto', width: '50vw', height: '30.125vw' }} /></div>
            <div><img src={alumni10} alt="Image 10" style={{ display: 'block', margin: 'auto', width: '50vw', height: '30.125vw' }} /></div>
            <div><img src={alumni11} alt="Image 11" style={{ display: 'block', margin: 'auto', width: '50vw', height: '30.125vw' }} /></div>
            <div><img src={alumni12} alt="Image 12" style={{ display: 'block', margin: 'auto', width: '50vw', height: '30.125vw' }} /></div>
            <div><img src={alumni13} alt="Image 13" style={{ display: 'block', margin: 'auto', width: '50vw', height: '30.125vw' }} /></div>
            <div><img src={alumni14} alt="Image 14" style={{ display: 'block', margin: 'auto', width: '50vw', height: '30.125vw' }} /></div>
            <div><img src={alumni15} alt="Image 15" style={{ display: 'block', margin: 'auto', width: '50vw', height: '30.125vw' }} /></div>
            <div><img src={alumni16} alt="Image 16" style={{ display: 'block', margin: 'auto', width: '50vw', height: '30.125vw' }} /></div>
            <div><img src={alumni17} alt="Image 17" style={{ display: 'block', margin: 'auto', width: '50vw', height: '30.125vw' }} /></div>
        </Slider>
      );
}

export default AlumniCarousel;