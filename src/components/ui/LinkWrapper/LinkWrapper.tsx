import Link from "next/link";

/**
 * Wraps the children in a Link component if a href is provided
 */
const LinkWrapper: React.FC<{ href?: string } & React.PropsWithChildren> = ({
  href,
  children,
}) => (href ? <Link href={href}>{children}</Link> : children);

export default LinkWrapper;
