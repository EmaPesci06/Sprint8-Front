import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <header>{/* Aquí puedes agregar el contenido del encabezado */}</header>
      <main>{children}</main>
      <footer>
        {/* Aquí puedes agregar el contenido del pie de página */}
      </footer>
    </div>
  );
};

export default Layout;
