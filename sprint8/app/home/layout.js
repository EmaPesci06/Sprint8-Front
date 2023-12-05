import Menu from "@/components/header/Menu";

export const metadata = {
  title: "Itbank | Inicio",
  description: "Pagina de inicio de Itbank",
  keywords: "Itbank, inicio, pagina de inicio",
};

export default function Layout({ children }) {
  return (
    <div className="flex bg-slate-400">
      <Menu />
      {children}
    </div>
  );
}
