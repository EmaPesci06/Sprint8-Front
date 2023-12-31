import Menu from "@/components/header/Menu";

export const metadata = {
  title: "Itbank | Direcciones",
  description: "Direcciones de los bancos del Itbank",
};

export default function Layout({ children }) {
  return (
    <div className="flex">
      <Menu />
      {children}
    </div>
  );
}
