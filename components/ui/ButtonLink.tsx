import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "brand" | "light";
};

const variants = {
  brand:
    "bg-[var(--brand-blue)] text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-900/15",
  light:
    "bg-white text-[var(--brand-blue)] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/15",
};

function isInternalHref(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

export default function ButtonLink({
  href,
  children,
  variant = "brand",
}: ButtonLinkProps) {
  const className = `inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-black transition ${variants[variant]}`;

  if (isInternalHref(href)) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target={href.startsWith("#") ? undefined : "_blank"}
      rel={href.startsWith("#") ? undefined : "noopener noreferrer"}
      className={className}
    >
      {children}
    </a>
  );
}
