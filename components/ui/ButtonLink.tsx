import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
};

const buttonClassName = `
  group relative inline-flex items-center justify-center
  px-8 py-3 overflow-hidden rounded-full
  border border-cyan-500/40 bg-transparent
  text-sm font-bold tracking-widest text-white
  transition-all duration-300
  hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]
  active:scale-95
`;

const contentClassName =
  "relative flex items-center gap-2 transition-colors duration-300 group-hover:text-black";

const hoverLayer = (
  <span className="absolute inset-0 h-full w-full scale-0 rounded-full bg-cyan-500 transition-transform duration-300 group-hover:scale-100" />
);

function isInternalHref(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

export default function ButtonLink({ href, children }: ButtonLinkProps) {
  if (isInternalHref(href)) {
    return (
      <Link href={href} className={buttonClassName}>
        {hoverLayer}
        <span className={contentClassName}>{children}</span>
      </Link>
    );
  }

  return (
    <a
      href={href}
      target={href.startsWith("#") ? undefined : "_blank"}
      rel={href.startsWith("#") ? undefined : "noopener noreferrer"}
      className={buttonClassName}
    >
      {hoverLayer}
      <span className={contentClassName}>{children}</span>
    </a>
  );
}
