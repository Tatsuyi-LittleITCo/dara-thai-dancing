export const metadata = {
  metadataBase: new URL('https://darathaidancing.com.au'),
  title: {
    default: 'Dara Thai Dance School',
    template: '%s | Dara Thai Dance School',
  },
  description: 'Thai dance classes, workshops, and performances in Perth, Western Australia.',
  openGraph: {
    title: 'Dara Thai Dance School',
    description: 'Thai dance classes, workshops, and performances in Perth, Western Australia.',
    siteName: 'Dara Thai Dance School',
    locale: 'en_AU',
    type: 'website',
  },
  icons: {
    icon: '/assetts/daria_squared.ico',
    apple: '/assetts/daria_squared.png',
  },
};

import './globals.css';
import LangProvider from '../components/LangProvider';
import Header from '../components/Header';
import Script from 'next/script';   // ← ADD THIS

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        {/* Facebook root container */}
        <div id="fb-root"></div>

        {/* Facebook SDK */}
        <Script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0"
          strategy="lazyOnload"
        />

        <LangProvider>
          <Header />
          {children}

          <footer>
            <div
              className="container"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem 0'
              }}
            >
              <div>© {new Date().getFullYear()} Dara Thai Dance School</div>
              <div>Website provided by Little IT Co Pty Ltd ✌️</div>
            </div>
          </footer>

        </LangProvider>

      </body>
    </html>
  );
}
