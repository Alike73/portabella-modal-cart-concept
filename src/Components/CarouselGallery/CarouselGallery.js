
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from "../../Assets/CarouselImages/baked-salmon.jpg";
import img2 from "../../Assets/CarouselImages/cheese-balls.jpg";
import img3 from "../../Assets/CarouselImages/easy-pasta.jpg";
import img4 from "../../Assets/CarouselImages/feta.jpg";
import img5 from "../../Assets/CarouselImages/mixed-pizza.jpg";
import img6 from "../../Assets/CarouselImages/pasta.jpg";
import img7 from "../../Assets/CarouselImages/salmon.jpg";
import img8 from "../../Assets/CarouselImages/shrimp.jpg";
import img9 from "../../Assets/CarouselImages/spag-tomato.jpg";
import img10 from "../../Assets/CarouselImages/spring-rolls.jpg";
import img11 from "../../Assets/CarouselImages/tomato-salad.jpg";

const CarouselGallery = () => {
    return (
        <div className="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay showIndicators = {false} showThumbs = {false} >
                <div>
                    <img src={img1} alt = "dishImage" />
                </div>
                <div>
                    <img src={img2} alt = "dishImage" />
                </div>
                <div>
                    <img src={img3} alt = "dishImage" />
                </div>
                <div>
                    <img src={img4} alt = "dishImage" />
                </div>
                <div>
                    <img src={img5} alt = "dishImage" />
                </div>
                <div>
                    <img src={img6} alt = "dishImage" />
                </div>
                <div>
                    <img src={img7} alt = "dishImage" />
                </div>
                <div>
                    <img src={img8} alt = "dishImage" />
                </div>
                <div>
                    <img src={img9} alt = "dishImage" />
                </div>
                <div>
                    <img src={img10} alt = "dishImage" />
                </div>
                <div>
                    <img src={img11} alt = "dishImage" />
                </div>
            </Carousel>
        </div>
    )
}
export default CarouselGallery;