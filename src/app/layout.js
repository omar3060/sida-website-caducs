import { Inter, Noto_Sans_Arabic } from "next/font/google";
import "@/app/styles/globals.css";
import Navbar from "./components/common/Layout/Navbar";
import Footer from "./components/common/Layout/Footer";
import ClientProviders from "./components/common/Layout/ClientProviders";

const inter = Inter({ subsets: ["latin"] });
const notoSansArabic = Noto_Sans_Arabic({ subsets: ["arabic"] });

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
              const direction = localStorage.getItem('direction') || 'ltr';
              document.documentElement.dir = direction;
              document.documentElement.lang = direction === 'ltr' ? 'en' : 'ar';
            `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-[var(--color-cardColor)]`}>
        <ClientProviders>
          <Navbar />
          {children}
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
