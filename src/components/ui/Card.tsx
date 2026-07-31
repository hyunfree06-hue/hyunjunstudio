import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  hover?: boolean;
};

export function Card({ className, hover, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl bg-white/90 border border-ink/5 shadow-soft p-6",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:shadow-lift",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
