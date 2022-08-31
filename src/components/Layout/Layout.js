import style from "./Layout.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const Layout = (props) => {
  return (
    <>
      <Header />
      <main className={style.main}>{props.children}</main>
      <Footer />
    </>
  );
};
export default Layout;
