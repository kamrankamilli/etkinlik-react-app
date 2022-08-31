import style from "./Footer.module.css";
const Footer = () => {
  let d = new Date();
  let currentYear = d.getFullYear();
  return (
    <footer className={style.footer}>
      <small className={style.api}>
        <span>API Provided by</span>
        <a href="http://etkinlik.io" target="_blank" rel="noreferrer">
          Etkinlik.io
        </a>
      </small>
      <small className={style.copyright}>&copy; Copyright {currentYear}, Kamran Kamilli</small>
    </footer>
  );
};
export default Footer;
