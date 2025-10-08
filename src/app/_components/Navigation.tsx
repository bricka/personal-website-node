'use client';

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

export function Navigation() {
  return (
    <div className="flex gap-2 justify-center">
      <NavButton title="Home" href="/" />
      <NavButton title="Resume" href="/resume" />
    </div>
  )
}
