import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
const Navbar = (props) => {
  const translate = {
    ä: "a",
    ö: "o",
    ü: "u",
    ç: "c",
    ş: "s",
    ğ: "g",
    Ä: "A",
    Ö: "O",
    Ü: "U",
    Ç: "C",
    Ş: "S",
    Ğ: "G",
  };
  const activeStyle = {
    backgroundImage:
      "linear-gradient( to bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.175) )",
  };
  const links = props.links.map((link) => (
    <li key={link}>
      <NavLink
        to={`/${link
          .replace(/\s/g, "-")
          .replace(/[öäüçşğÖÄÜÇŞĞ]/g, (match) => translate[match])
          .toLowerCase()}`}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        {link}
      </NavLink>
    </li>
  ));
  return (
    <nav className={style.nav}>
      <ul>{links}</ul>
    </nav>
  );
};
export default Navbar;
