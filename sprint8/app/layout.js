import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { montserrat, roboto } from "./fonts";
import "./globals.css";

export const metadata = {
  title: "Itbank",
  description: "Homebanking del Itbank",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
