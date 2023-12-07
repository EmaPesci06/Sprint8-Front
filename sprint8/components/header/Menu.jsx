import Link from "next/link";
import styles from "./Menu.module.css";
import { montserrat } from "@/app/fonts";

export default function Menu() {
  return (
    <div className="menu_container">
      <nav className={`menu ${styles.menu} w-52`}>
        <h2
          className={`my-2 mx-4 text-slate-50 text-2xl ${montserrat.className} antialiased `}
        >
          Menu
        </h2>
        <ul className="flex flex-col justify-center w-full my-4">
          <li>
            <Link
              href="/home"
              className={`menu__item p-4 hover:text-yellow-400 block text-center ${styles.menu__item} transition duration-200 ease-in-out`}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="/clientes"
              className={`menu__item p-4 hover:text-yellow-400 block text-center ${styles.menu__item} transition duration-200 ease-in-out`}
            >
              Clientes
            </Link>
          </li>
          <li>
            <Link
              href="/cuentas"
              className={`menu__item p-4 hover:text-yellow-400 block text-center ${styles.menu__item} transition duration-200 ease-in-out`}
            >
              Cuentas
            </Link>
          </li>
          <li>
            <Link
              href="/direcciones"
              className={`menu__item p-4 hover:text-yellow-400 block text-center ${styles.menu__item} transition duration-200 ease-in-out`}
            >
              Direcciones
            </Link>
          </li>
          <li>
            <Link
              href="/prestamos"
              className={`menu__item p-4 hover:text-yellow-400 block text-center ${styles.menu__item} transition duration-200 ease-in-out`}
            >
              Prestamos
            </Link>
          </li>
          <li>
            <Link
              href="/sucursales"
              className={`menu__item p-4 hover:text-yellow-400 block text-center ${styles.menu__item} transition duration-200 ease-in-out`}
            >
              Sucursales
            </Link>
          </li>
          <li>
            <Link
              href="/tarjetas"
              className={`menu__item p-4 hover:text-yellow-400 block text-center ${styles.menu__item} transition duration-200 ease-in-out`}
            >
              Tarjetas
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
