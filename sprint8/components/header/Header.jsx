import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className={`header__container ${styles.header__container}`}>
        <div className="header__logo my-4">
          <Image src="/logo.png" height={125} width={125} alt="logo" />
        </div>
        <div className="header__search flex my-2">
          <input type="text" placeholder="Search" className="p-2 " />
          <button type="button" className="block bg-white text-slate-950 p-3">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className={`icon ${styles.icon}`}
            />
          </button>
        </div>
        <Link href="/">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className={`${styles.back_icon}`}
          />
        </Link>
      </div>
    </header>
  );
}
