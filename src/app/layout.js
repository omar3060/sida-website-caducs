import { Inter } from "next/font/google";
import "@/app/styles/globals.css";
import Navbar from "./components/common/Layout/Navbar";
import Footer from "./components/common/Layout/Footer";
import { ThemeProvider } from "@/app/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  icons: {
    icon: "/assets/images/home/svgs/S-icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const theme = localStorage.getItem('theme') || 'light';
              document.documentElement.classList.add(theme);
            `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-[var(--color-cardColor)]`}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
