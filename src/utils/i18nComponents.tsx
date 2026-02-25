import { SupportedLanguage } from '@/app/supportedLanguage';
import { Metadata } from 'next';

export const pickTitleByLanguage =
  (titleByLanguage: { [language: string]: string }) =>
  async ({ params }: { params: Promise<{ lang: SupportedLanguage }> }): Promise<Metadata> => {
    const { lang } = await params;
    return {
      title: titleByLanguage[lang] ?? 'Alex Figl-Brick',
    };
  };
