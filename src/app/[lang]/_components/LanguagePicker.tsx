'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

function LanguageButton({ currentLanguage, lang, text }: {
  currentLanguage: string;
  lang: string;
  text: string;
}) {
  if (currentLanguage === lang) {
    return <span className="font-bold">{text}</span>;
  } else {
    const pathname = usePathname();
    const newPath = pathname.replace(new RegExp(`^/${currentLanguage}`), `/${lang}`);
    return <Link href={newPath}>{text}</Link>;
  }
}

export default function LanguagePicker({ currentLanguage }: { currentLanguage: string; }) {
  return (
    <div className="flex gap-2 justify-center">
      <LanguageButton currentLanguage={currentLanguage} lang="en" text="English"/>
      <LanguageButton currentLanguage={currentLanguage} lang="de" text="Deutsch"/>
    </div>
  );
}

