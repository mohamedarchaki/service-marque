import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";


export const metadata = {
  title: "ServiceMarque | وكالة متخصصة في بناء وتطوير العلامات التجارية",
  description: "servicemarque.ma - حلول رقمية، تصميم الهوية البصرية، وتطوير المواقع.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">

      <body className="relative">
        
      <WhatsAppButton/>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}