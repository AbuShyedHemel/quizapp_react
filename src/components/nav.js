import classes from "../style/nav.module.css"
import image from "../asset/images/logo-bg.png"
import Account from "./account"

export default function Nav(){
    return (
        <nav className={classes.nav}>
        <ul>
          <li>
            <a href="index.html" className={classes.brand}>
              <img src={image} alt="Learn with Sumit Logo" />
              <h3>Learn with Hemel</h3>
            </a>
          </li>
        </ul>
        <Account />
      </nav>
    );
}