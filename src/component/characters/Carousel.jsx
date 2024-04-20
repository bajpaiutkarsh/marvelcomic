import classes from "./Carousel.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Character from "./character/Character";
const Carousel = ({ characters }) => {
  // const selection = useSelector((state) => state.charactersslice);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 10,
  };

  return (
    <>
      <div className={`slider-container ${classes.slider}`}>
        <Slider {...settings}>
          {characters.map((character, index) => {
            return <Character key={index} character={character}></Character>;
          })}
        </Slider>
      </div>
    </>
  );
};
export default Carousel;
