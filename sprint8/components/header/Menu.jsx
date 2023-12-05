"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <div>
      <nav className={`menu ${styles.menu}`}>
        <ul>
          <li>
            <Link href="/home">Inicio</Link>
          </li>
          <li>
            <Link href="/clientes">Clientes</Link>
          </li>
          <li>
            <Link href="/cuentas">Cuentas</Link>
          </li>
          <li>
            <Link href="/direcciones">Direcciones</Link>
          </li>
          <li>
            <Link href="/prestamos">Sucursales</Link>
          </li>
          <li>
            <Link href="/tarjetas">Tarjetas</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
