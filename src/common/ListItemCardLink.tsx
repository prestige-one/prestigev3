import type { ReactNode } from "react";
import Link from "next/link";

/** Makes an entire list-page card clickable: external `<a>` or internal `next/link`. */
export default function ListItemCardLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  const external = href.startsWith("http");
  if (external) {
    return (
      <a className={className} href={href} rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}
