import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import GoogleAnalytics from './components/GoogleTagManager';
import CookieBanner from './components/CookieBanner';
import GoogleTagManager from './components/GoogleTagManager';


export const metadata = {
  title: 'Coffee-Boom Сервіс',
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
      <GoogleTagManager GA_MEASUREMENT_ID={'GTM-P7T8BCFN'} />
      <body>
        <Navbar />
        {children}
        <CookieBanner />
        <Footer />
      </body>
    </html>
  )
}
