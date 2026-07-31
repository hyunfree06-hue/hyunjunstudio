import Link from "next/link";
import { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "kakao" | "ghost";
type Size = "sm" | "md" | "lg";

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  size?: Size;
};

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-dark shadow-soft",
  secondary:
    "bg-accent text-ink hover:bg-accent-light shadow-soft",
  outline:
    "bg-white/80 border border-ink/10 text-ink hover:bg-white hover:border-primary/40",
  kakao:
    "bg-[#FEE500] text-[#191919] hover:bg-[#F5DC00] shadow-soft",
  ghost: "bg-transparent text-ink hover:bg-ink/5",
};

const sizes: Record<Size, string> = {
  sm: "px-3.5 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-base",
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
    "inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition-all duration-200 active:scale-[0.98]",
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
