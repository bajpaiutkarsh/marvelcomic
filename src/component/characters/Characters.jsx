import classes from "./Characters.module.css";
import { useQuery } from "react-query";
import Constants, { Utililty } from "../../Constant";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Character from "./character/Character";
import Slider from "react-slick";
import Carousel from "./Carousel";
const Characters = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 12,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const { isLoading, error, data } = useQuery("get-character", async () => {
    const response = await fetch(Utililty.getApiPath("/v1/public/characters"));
    // Check for successful response before returning data
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    return await response.json();
  });

  return (
    <div className={classes.container}>
      {isLoading ? (
        <p>Loading characters...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        // Access characters from data.data (assuming nested structure)
        <Carousel characters={data.data.results}></Carousel>
      )}
    </div>
  );
};

export default Characters;

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="slick-arrow slick-next"
      onClick={onClick}
      style={{ right: "-50px" }}
    >
      Next
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="slick-arrow slick-prev"
      onClick={onClick}
      style={{ left: "-50px" }}
    >
      Previous
    </div>
  );
};
