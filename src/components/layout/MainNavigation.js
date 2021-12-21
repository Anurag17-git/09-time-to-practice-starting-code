import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css"; 

const MainNavigation = () => {
    return <header className={classes.header}>
                <h1 className={classes.logo}>My Quotes</h1>
                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink to="/Allquotes" activeClassName={classes.active}>All Quotes</NavLink>
                        </li>
                        <li>
                            <NavLink to="/quotes" activeClassName={classes.active}>Add Quotes</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        
}

export default MainNavigation;