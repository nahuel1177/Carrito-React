import Categories from "./Categories";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = (props) => {

    if(props.isHeader) {
        return (
            <nav className="header__navbar">
                <Link className="header__link" to="/">Inicio</Link>
                <Categories />
                <CartWidget />
            </nav>
        );
    } else {
        return (
            <nav className="header__navbar">
                <a href={props.hrefLinkFooter}>{props.textLinkFooter}</a>
            </nav>
        );
    }
}

export default NavBar;