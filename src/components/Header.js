import NavBar from "./NavBar";
import logo from "../resources/images/logo.png"
import { Link } from "react-router-dom";
const Header = () => {

    const isHeader = true;
    
    return(
        <header className="header">
            <Link className="header__link" to="/"><img src={logo}/></Link>
            <NavBar isHeader={isHeader}/>
        </header>
    )
}

export default Header;