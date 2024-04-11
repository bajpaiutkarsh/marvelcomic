import classes from "./Search.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
const Search = ()=>{
    return <div className={classes['search-bar']}>
    <div className={classes['search-container']}>
    <FontAwesomeIcon icon={faSearch} className={classes['search-icon']} />
<input type="text" placeholder="Search for comics..." />
</div>
</div>
}
export default Search;