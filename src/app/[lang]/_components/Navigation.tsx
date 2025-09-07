'use client';

import { SupportedLanguage } from '@/app/supportedLanguage';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavButton({ title, href }: {
  title: string;
  href: string;
}) {
  const pathname = usePathname();

  if (pathname === href) {
    return <span className="font-bold">{title}</span>;
  } else {
    return <Link href={href}>{title}</Link>;
  }
}

const navTitles = {
  en: {
    home: 'Home',
    resume: 'Resume',
    projects: 'Projects',
  },
  de: {
    home: 'Home',
    resume: 'Lebenslauf',
    projects: 'Projekte',
  },
}

export function Navigation({ lang }: { lang: SupportedLanguage; }) {
  const hrefWithLang = (href: string) => `/${lang}${href}`;

  return (
    <div className="flex gap-2 justify-center">
      <NavButton title={navTitles[lang].home} href={hrefWithLang('')} />
      <NavButton title={navTitles[lang].resume} href={hrefWithLang('/resume')} />
      <NavButton title={navTitles[lang].projects} href={hrefWithLang('/projects')} />
    </div>
  )
}
