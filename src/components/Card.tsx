export function Card({
  title,
  centerTitle = false,
  children,
}: {
  title: string | React.ReactNode;
  centerTitle?: boolean;
  children: React.ReactNode;
}) {
  let headerClassName = 'text-lg';
  if (centerTitle) {
    headerClassName += ' text-center';
  }

  return (
    <div className="border rounded-md p-4">
      <header className={headerClassName}>{title}</header>
      {children}
    </div>
  );
}
