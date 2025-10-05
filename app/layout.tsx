import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import GoogleAnalytics from './components/GoogleTagManager';
import CookieBanner from './components/CookieBanner';
import GoogleTagManager from './components/GoogleTagManager';
import Script from 'next/script';
import WhatsappButton from './components/WhatsappButton';


export const metadata = {
  title: 'Ремонт кавоварок та встановлення вендингових автоматів у Києві | Coffee-Boom Сервіс',
  description: 'Ремонт кавоварок, професійних кавомашин та вендингових автоматів у Києві',
  other: {
    'google-site-verification': 'FMTLZq7FYZn8zobHMHdulE4h72OlgyxkEUwTV0lmYcs'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Script
        id='1'
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-P7T8BCFN');`,
        }} />
      <body>
        <Navbar />
        {children}
        <CookieBanner />
        <Footer />
        <WhatsappButton />
        <Script
          id='2'
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P7T8BCFN"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`
          }} />
      </body>
    </html>
  )
}
