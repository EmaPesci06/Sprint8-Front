import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { montserrat, roboto } from "./fonts";
import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Itbank",
  description: "Homebanking del Itbank",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${roboto.className} antialiased`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
