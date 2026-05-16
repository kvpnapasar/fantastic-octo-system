import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata = {
  title: 'Sahyadri Healthcare | Medical Devices, Consumables & Furniture',
  description: 'Sahyadri Healthcare - Leading supplier of medical devices, consumables, medical furniture and medical gases in Navi Mumbai. Sales, Service and Rental.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <header className="navbar">
          <div className="container nav-content">
            <div className="logo">
              <img src="/images/logo.jpg" alt="Sahyadri Healthcare Logo" style={{ height: '60px' }} />
            </div>
            <nav>
              <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
            <div className="nav-cta">
              <a href="https://wa.me/919867708193" className="btn btn-primary">WhatsApp Us</a>
            </div>
          </div>
        </header>
        {children}
        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-info">
                <h3>Sahyadri Healthcare</h3>
                <p>Leading supplier of medical equipment and consumables.</p>
                <p>Address: 201 Balaram Nivas, Opp. Dr Shukla Shirvane, Sector-1, Nerul Navi Mumbai 400706.</p>
              </div>
              <div className="footer-links">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#products">Products</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
              <div className="footer-contact">
                <h4>Contact Us</h4>
                <p>WhatsApp: +91 9867708193</p>
                <p>Email: info@sahyadrihealthcare.com</p>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} Sahyadri Healthcare. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
