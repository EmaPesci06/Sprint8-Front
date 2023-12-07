import Menu from "@/components/header/Menu";

export default function Layout({ children }) {
  return (
    <div className="flex">
      <Menu />
      {children}
    </div>
  );
}
