import { Inter } from "next/font/google";
import "@/app/styles/globals.css"
import Navbar from "./components/common/Layout/Navbar";
import Footer from "./components/common/Layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  icons: {
    icon: "/assets/images/home/svgs/S-icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#F8FAFC]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
