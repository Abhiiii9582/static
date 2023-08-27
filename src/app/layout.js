'use client';
import './globals.css';
import "./style.css";
import MainHeader from '@/CommonComponents/Header';
import Footer from '@/CommonComponents/Footer';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

// const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
   useEffect(() => {
     AOS.init();
   }, []);
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
        <Footer />
        </body>
    </html>
  )
}
