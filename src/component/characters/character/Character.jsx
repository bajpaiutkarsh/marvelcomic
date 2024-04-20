import classes from "./Character.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { CharactersAction } from "../../CharactersSlice";

const Character = ({ character }) => {
  const dispatcher = useDispatch();
  const selection = useSelector(
    (state) => state.charactersslice.selectedCharacters
  );
  const isSelected = selection[character.id] ? true : false;
  const divStyle = {
    backgroundImage: `url(${character["thumbnail"]["path"]}.${character["thumbnail"]["extension"]})`,
  };
  const onCharacterClickHandler = (e) => {
    dispatcher(CharactersAction.modifyCharactersSelection(character.id));
  };
  return (
    <div
      onClick={onCharacterClickHandler}
      className={classes["checkmark-container"]}
      style={divStyle}
    >
      {isSelected && (
        <div className={classes.selected}>
          <FontAwesomeIcon
            icon={faCheck}
            size="2xl"
            style={{ color: "#266ca1" }}
          />
        </div>
      )}
    </div>
  );
};
export default Character;
