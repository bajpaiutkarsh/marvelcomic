import classes from "./Character.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Character = ({character, isSelected})=>{
    const divStyle = {
        backgroundImage: `url(${character['thumbnail']['path']}.${character['thumbnail']['extension']})`
    }
    return <div className={classes["checkmark-container"]} style={divStyle}>
         {isSelected && <div className={classes.selected }><FontAwesomeIcon icon={faCheck} size= "2xl" style={{color: "#266ca1",}} /></div>}
        </div>
    
}
export default Character;