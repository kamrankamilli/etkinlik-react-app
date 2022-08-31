import style from "./Header.module.css";
import Navbar from "../Navbar/NavBar";
import Logo from "../Logo/Logo";
const Header = () => {
  return (
    <header className={style.header}>
      <Logo/>
      <Navbar links={["Geçmiş Etkinliler"]} />
    </header>
  );
};
export default Header;
