import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ContactMarquee from "@/components/components/ContactMarquee";

const sfPro = localFont({
  src: [
    {
      path: "../public/fonts/SFPro/SF-Pro-Display-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/SFPro/SF-Pro-Display-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/SFPro/SF-Pro-Display-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sf-pro",
  display: "swap", // Optional: improves perceived performance
});

export const metadata = {
  title: "Peaceful At Home LLC",
  description:
    "We Care, We Bring Peace, We Listen. Your trusted partner in compassionate in-home care.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={sfPro.variable}>
      <body className="antialiased font-sf">
        <ContactMarquee />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
