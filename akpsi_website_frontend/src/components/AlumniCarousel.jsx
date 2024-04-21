import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* Image Imports */



function AlumniCarousel() {
    const alumni1 = 'https://lh3.googleusercontent.com/d/1EF6XJziDpZ5ekDlo2Yfv_kQ-wal84wkh';
    const alumni2 = 'https://lh3.googleusercontent.com/d/1GJHpnjwdx23kxlIm9zd3tLf-tWrlGErC';
    const alumni3 = 'https://lh3.googleusercontent.com/d/1PTwtGri2X0NzcGZmiuLCc197XAjw61HF';
    const alumni4 = 'https://lh3.googleusercontent.com/d/1_Rlguf4Kz2I0RA7WHoCcE43Z-ImJmwf6';
    const alumni5 = 'https://lh3.googleusercontent.com/d/1cfPu9U8cgLsK_70iom-I66mA-RQI3hfF';
    const alumni6 = 'https://lh3.googleusercontent.com/d/1Iz99Wz9cL-445pF3abi04_wDBphZTi8y';
    const alumni7 = 'https://lh3.googleusercontent.com/d/1oFMWfBI0h2HoGPb03nKB9THOIfJMuA-N';
    const alumni8 = 'https://lh3.googleusercontent.com/d/1o5xW9M7kVHFO1DiZrjbvnj6oCC48C9pm';
    const alumni9 = 'https://lh3.googleusercontent.com/d/1AyDQiH364Emnot1ouXvU7VhIIFSdHYhv';
    const alumni10 = 'https://lh3.googleusercontent.com/d/1rHQ7ws62tYQYyPeZDa1xPGY4c63LwM09';
    const alumni11 = 'https://lh3.googleusercontent.com/d/1FOpSlQHFAP-uX3bv1JFqP6Xp7xrOAF_i';
    const alumni12 = 'https://lh3.googleusercontent.com/d/1p0iBKrmidrRPdhrY_YJukbxz2c8lz1Wu';
    const alumni13 = 'https://lh3.googleusercontent.com/d/1QatM9zrpnEovh4dG4ZHe-vN2i4wwWVP3';
    const alumni14 = 'https://lh3.googleusercontent.com/d/1YgyAPLQRh8Ff1PXAQcsoOfv8gUuYJ305';
    const alumni15 = 'https://lh3.googleusercontent.com/d/1Ij8SZX8PTSfMmrfxcoc1wBf5ME3AGCqa';
    const alumni16 = 'https://lh3.googleusercontent.com/d/1fDqcgpM3BFqpLZ81UCPh8nWqi88w2s-x';
    const alumni17 = 'https://lh3.googleusercontent.com/d/1dDsiz01jt9SGup1Pb0wxgGqWYAHXXJ-R';

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