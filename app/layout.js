import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "/components/Footer";
import Header from "/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Luis Meraz - Actor",
  description: "Discover Actor Luis Meraz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="app">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
