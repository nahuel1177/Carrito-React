import NavBar from "./NavBar";
import logo from "../resources/images/logo.png"
const Header = () => {

    const isHeader = true;
    
    return(
        <header className="header">
            <img src={logo}/>
            <NavBar isHeader={isHeader}/>
        </header>
    )
}

export default Header;