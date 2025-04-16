import { cn } from "@/lib/utils";
import React from "react";
import { forwardRef } from "react";

const Button = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, disabled, type = "button", ...props }, ref) => {
  return (
    <button
      className={cn(
        `
          w-auto 
          rounded-full
          bg-black 
          border-transparent 
          px-7 
          py-3 disabled:cursor-not-allowed
          disabled:opacity-50 
          text-white 
          font-semibold 
          hover:opacity-75 
          transition 
          `,
        className
      )}
      type={type}
      ref={ref}
      {...props}
      disabled={disabled}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
