import classes from "./Carousel.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
const Carousel = ({children})=>{
    const [currentIndex, setCurrentIndex] = useState(0);
    const scroll = ()=>{
        if(currentIndex == children.length -1){
            return setCurrentIndex(0);
        }
        else{
            return setCurrentIndex(currentIndex+1)
        }
    }
    return <>
    <div className={classes.container}>
    <span> <FontAwesomeIcon icon={faCircleChevronLeft} size="2xl" style={{color: "#ffffff"}}  /></span>
    <div className={classes.carouselConatiner}>
        {children.map((child, index) => <div key={`carousel${index}`}className={classes.carouselItem} style={{transform: `translate(-${currentIndex * 100}%)`}}>{child} </div>)}
    </div >
    <span onClick={()=>{scroll()}}> <FontAwesomeIcon icon={faCircleChevronRight} size="2xl" style={{color: "#ffffff"}} /></span>
    </div>
    </>

}
export default Carousel;