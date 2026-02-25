import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paydaytodaycash - Fast Loan Provider USA",
  description: "Get fast cash loans across the USA. Quick approval, competitive rates, and excellent customer service.",
  keywords: "fast loans, cash loans, USA loans, payday loans, instant approval",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/images/favicon-32x32.png" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* CSS files - exactly like your HTML */}
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/bootstrap-icons.css" />
        <link rel="stylesheet" href="/css/nice-select.css" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        <link rel="stylesheet" href="/css/slick.css" />
        <link rel="stylesheet" href="/css/odometer.css" />
        <link rel="stylesheet" href="/css/animate.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body className={inter.className}>
        {/* Preloader */}
        <div className="preloader">
          <span className="loader"></span>
        </div>

        <Header />
        {children}
        <Footer />

        {/* Scroll to top */}
        <a href="#" className="scrollToTop"><i className="bi bi-chevron-double-up"></i></a>

        {/* JavaScript files - exactly like your HTML, in the same order */}
        <script src="/js/jquery-3.6.3.min.js"></script>
        <script src="/js/bootstrap.bundle.min.js"></script>
        <script src="/js/jquery.nice-select.min.js"></script>
        <script src="/js/jquery.magnific-popup.min.js"></script>
        <script src="/js/circularProgressBar.min.js"></script>
        <script src="/js/slick.min.js"></script>
        <script src="/js/odometer.min.js"></script>
        <script src="/js/viewport.jquery.js"></script>
        <script src="/js/jquery-ui.min.js"></script>
        <script src="/js/wow.min.js"></script>
        <script src="/js/jquery.validate.min.js"></script>
        <script src="/js/plugins.js"></script>
        <script src="/js/main.js"></script>
      </body>
    </html>
  );
}