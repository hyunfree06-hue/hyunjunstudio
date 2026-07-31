import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  hover?: boolean;
};

export function Card({ className, hover, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-paper-line bg-paper p-8",
        hover &&
          "transition-colors duration-200 hover:border-coral group",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
