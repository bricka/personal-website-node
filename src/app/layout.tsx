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
        <header>
          <h1 className="text-xl"> Alex Figl-Brick</h1>
          <nav><Navigation/></nav>
        </header>
        {children}
      </body>
    </html>
  );
}
