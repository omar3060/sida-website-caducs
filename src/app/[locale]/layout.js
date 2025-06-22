import { Inter } from "next/font/google";
import "@/app/styles/globals.css";
import Navbar from "../components/common/Layout/Navbar";
import Footer from "../components/common/Layout/Footer";
import { ThemeProvider } from "@/app/context/ThemeContext";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import ScrollToTop from "../components/common/shared/ScrollToTop";
import ContactWhatsapp from "../components/common/shared/ContactWhatsapp";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  icons: {
    icon: "/assets/images/home/svgs/S-icon.svg",
  },
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={direction}>
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
        <NextIntlClientProvider locale={locale}>
          <ThemeProvider>
            <Navbar />
            {children}
            <ScrollToTop />
            <ContactWhatsapp />
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
