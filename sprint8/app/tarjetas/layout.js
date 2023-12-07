import Menu from "@/components/header/Menu";

export const metadata = {
  id: "tarjetas-layout",
  name: "Tarjetas Layout",
  description: "Layout de Tarjetas",
  title: "Itbank | Tarjetas",
};

export default function Layout({ children }) {
  return (
    <div className="flex">
      <Menu />
      {children}
    </div>
  );
}
