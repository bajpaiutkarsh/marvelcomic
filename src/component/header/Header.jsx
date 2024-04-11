import classes from "./Header.module.css";
import Search from "./Search/Search"
const Header = () => {
  return <>
    <header>
      <div className={classes.brand}>
        </div>
        <Search></Search>
        
</header>
  </>;
};
export default Header;
