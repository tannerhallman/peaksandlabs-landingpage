import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Peaks and Labs Campervan Co.",
  description:
    "Experience the freedom of the open road with our fully-equipped campervan.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='flex flex-col min-h-screen bg-background text-dark'>
        <header className='bg-primary text-white'>
          <nav className='container mx-auto px-4 py-6 flex justify-between items-center'>
            <div className='flex items-center'>
              <Image
                src='/logo.jpg'
                alt='Peaks and Labs Campervan Co. Logo'
                width={50}
                height={50}
                className='mr-3'
              />
              <Link href='/' className='text-2xl font-bold'>
                Peaks and Labs Campervan Co.
              </Link>
            </div>
            <ul className='flex space-x-4'>
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/campervan'>Our Campervan</Link>
              </li>
              <li>
                <Link href='/amenities'>Amenities</Link>
              </li>
              <li>
                <Link href='/booking'>Booking</Link>
              </li>
              <li>
                <Link href='/support'>Support</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className='flex-grow'>{children}</main>

        <footer className='bg-secondary text-white'>
          <div className='container mx-auto px-4 py-6 text-center'>
            &copy; 2024 Peaks and Labs Campervan Co. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
