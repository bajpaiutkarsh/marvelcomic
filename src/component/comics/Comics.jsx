import Pagination from "@mui/material/Pagination";
import "../../App.css";
import classes from "./Comics.module.css";
import { useSelector } from "react-redux";
const Comics = () => {
  const selection = useSelector(
    (state) => state.charactersslice.selectedCharacters
  );
  return (
    <>
      <div className={classes.contanier}>
        {Object.keys(selection).length > 0 && (
          <div>
            <h2>Explore - {Object.keys(selection).join(",")}</h2>
          </div>
        )}
        <Pagination count={10} variant="outlined" shape="rounded" />
      </div>
    </>
  );
};
export default Comics;
