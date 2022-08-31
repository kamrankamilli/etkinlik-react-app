import { Link } from "react-router-dom";
import style from "./logo.module.css";
const Logo = () => {
  return (
    <div className={style.logo}>
      <Link to="/">Etkinlik App</Link>
    </div>
  );
};
export default Logo;
