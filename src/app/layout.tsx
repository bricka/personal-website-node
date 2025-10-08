import type { Metadata } from 'next';
import './globals.css';

import { Navigation } from './_components/Navigation';

export const metadata: Metadata = {
  title: 'Alex Figl-Brick',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="m-4 md:m-auto md:w-5/6">
          <header className="text-center">
            <span className="text-xl"> Alex Figl-Brick</span>
            <nav><Navigation/></nav>
          </header>
          <div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
