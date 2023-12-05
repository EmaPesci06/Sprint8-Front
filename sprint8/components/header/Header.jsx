import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="header">
      <div className={`header__container ${styles.header__container}`}>
        <div className="header__logo">
          <img src="#" alt="logo" />
        </div>
        <div className="header__search">
          <input type="text" placeholder="Search" />
          <button type="button">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-white mx-1"
            />
          </button>
        </div>
        <div className="header__menu"></div>
      </div>
    </header>
  );
}
