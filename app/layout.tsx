import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import Script from 'next/script';
import GoogleTagManager from './components/GoogleTagManager/intex';


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
        <GoogleTagManager GA_MEASUREMENT_ID='G-4Q2305BTV8'/>
      </body>
    </html>
  )
}
