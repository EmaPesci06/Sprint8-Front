import Menu from "@/components/header/Menu";

export const metadata = {
  id: "sucursales-layout",
  name: "Sucursales Layout",
  description: "Layout de Sucursales",
  title: "Itbank | Sucursales",
};

export default function Layout({ children }) {
  return (
    <div className="flex">
      <Menu />
      {children}
    </div>
  );
}
