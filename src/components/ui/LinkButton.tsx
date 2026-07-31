import Link from "next/link";
import { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost" | "kakao";
type Size = "sm" | "md" | "lg";

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  size?: Size;
};

const variants: Record<Variant, string> = {
  primary: "bg-coral text-white hover:bg-coral-dark",
  outline:
    "bg-transparent border border-ink/20 text-ink hover:border-ink hover:bg-ink/[0.02]",
  ghost: "bg-transparent text-ink-muted hover:text-ink",
  kakao: "bg-kakao text-[#191919] hover:bg-[#F5DC00]",
};

const sizes: Record<Size, string> = {
  sm: "px-3.5 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-[15px]",
};

export function LinkButton({
  href,
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: LinkButtonProps) {
  const isExternal = href.startsWith("http") || href.startsWith("sms:");

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors duration-200",
    variants[variant],
    sizes[size],
    className
  );

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
