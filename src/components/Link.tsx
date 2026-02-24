import NextLink, { LinkProps } from 'next/link';

export function Link(props: LinkProps & { children?: React.ReactNode }) {
  const cn =
    'text-blue-900 visited:text-purple-600 dark:text-blue-400 dark:visited:text-purple-400';

  return <NextLink {...props} className={cn} />;
}
