import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CalculatorButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "operator" | "function" | "equals";
  size?: "default" | "large";
}

export const CalculatorButton = ({
  children,
  className,
  variant = "default",
  size = "default",
  ...props
}: CalculatorButtonProps) => {
  return (
    <button
      className={cn(
        "font-medium transition-all duration-150 active:scale-95 active:opacity-80 rounded-lg flex items-center justify-center",
        {
          "bg-slate-200 hover:bg-slate-300 text-slate-800": variant === "default",
          "bg-slate-700 hover:bg-slate-800 text-white": variant === "function",
          "bg-blue-500 hover:bg-blue-600 text-white": variant === "operator",
          "bg-purple-500 hover:bg-purple-600 text-white": variant === "equals",
          "h-14": size === "default",
          "h-14 col-span-2": size === "large",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
