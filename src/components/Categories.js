import Dropdown from 'react-bootstrap/Dropdown';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="link" id="dropdown">
        Categorias
      </Dropdown.Toggle>

      <Dropdown.Menu variant="dark">
        <DropdownItem as="li"><Link id="dropdownItem" className="header__link" to="/Desktop">Desktops</Link></DropdownItem>
        <DropdownItem as="li"><Link id="dropdownItem" className="header__link" to="/Laptop">Laptops</Link></DropdownItem>
        <DropdownItem as="li"><Link id="dropdownItem" className="header__link" to="/Teclado">Teclados</Link></DropdownItem>
        <DropdownItem as="li"><Link id="dropdownItem" className="header__link" to="/Mouse">Mouses</Link></DropdownItem>
        <DropdownItem as="li"><Link id="dropdownItem" className="header__link" to="/Memoria">Memorias</Link></DropdownItem>
        <DropdownItem as="li"><Link id="dropdownItem" className="header__link" to="/Almacenamiento">Almacenamiento</Link></DropdownItem>
        <DropdownItem as="li"><Link id="dropdownItem" className="header__link" to="/Placa de video">Placas de Videos</Link></DropdownItem>
        <DropdownItem as="li"><Link id="dropdownItem" className="header__link" to="/Motherboard">Motherboards</Link></DropdownItem>
        <DropdownItem as="li"><Link id="dropdownItem" className="header__link" to="/Procesador">Procesadores</Link></DropdownItem>
        <DropdownItem as="li"><Link id="dropdownItem" className="header__link" to="/Monitor">Monitores</Link></DropdownItem>
        <DropdownItem as="li"><Link id="dropdownItem" className="header__link" to="/Cooler">Coolers</Link></DropdownItem>
        <DropdownItem as="li"><Link id="dropdownItem" className="header__link" to="/Fuente">Fuentes</Link></DropdownItem>
        <DropdownItem as="li"><Link id="dropdownItem" className="header__link" to="/Gabinete">Gabinetes</Link></DropdownItem>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Categories;