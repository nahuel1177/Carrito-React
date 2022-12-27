import CartWidget from "./CartWidget";

const NavBar = (props) => {

    //const isHeader = props.isHeader || false;
    //const textLinkFooter = props.textLinkFooter || "";
    //const hrefLinkFooter = props.hrefLinkFooter || "";

    if (props.isHeader) {
        return (
            <nav className="header__navbar">
                <a href="#">Categorias</a>
                <a href="#">Quienes Somos</a>
                <a href="#">Contacto</a>
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