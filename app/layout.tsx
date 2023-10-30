import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import Script from 'next/script';


export const metadata = {
  title: 'Coffee-Boom Сервіс',
  description: 'Ремонт кавоварок, професійних кавомашин та вендингових автоматів у Києві',
  other: {
    'google-site-verification':'FMTLZq7FYZn8zobHMHdulE4h72OlgyxkEUwTV0lmYcs'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-XHB1GL4D1V" />
        <Script id='gtag' dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XHB1GL4D1V');`}}/>
      </body>
    </html>
  )
}
