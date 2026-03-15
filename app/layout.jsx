export const metadata = {
  title: 'Dara Thai Dance School',
  description: 'Thai dance classes, workshops, and performances in Perth, Western Australia.'
};

import './globals.css';
import LangProvider from '../components/LangProvider';
import Header from '../components/Header';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LangProvider>
          <Header />
          {children}
          <footer>
            <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'1rem 0'}}>
              <div>© {new Date().getFullYear()} Dara Thai Dance School</div>
              <div>Made with ❤️ in Perth</div>
            </div>
          </footer>
        </LangProvider>
      </body>
    </html>
  );
}
