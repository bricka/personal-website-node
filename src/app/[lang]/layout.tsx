import type { Metadata } from 'next';
import '../globals.css';

import { Navigation } from './_components/Navigation';
import LanguagePicker from './_components/LanguagePicker';
import { SupportedLanguage } from '../supportedLanguage';

export const metadata: Metadata = {
  title: 'Alex Figl-Brick',
};

export default async function RootLayout(props: LayoutProps<'/[lang]'>) {
  const { lang: langStr } = await props.params;
  const lang = langStr as SupportedLanguage;
  return (
    <html lang="en">
      <body>
        <div className="m-4 md:m-auto md:w-5/6">
          <header className="text-center">
            <span className="text-xl"> Alex Figl-Brick</span>
            <nav>
              <Navigation lang={lang} />
            </nav>
            <LanguagePicker currentLanguage={lang} />
          </header>
          <div>{props.children}</div>
        </div>
      </body>
    </html>
  );
}
