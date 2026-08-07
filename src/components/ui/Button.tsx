import { forwardRef } from "react";
import { buttonStyles, type ButtonVariant } from "@/components/ui/buttonStyles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = "primary", ...props },
  ref
) {
  return <button ref={ref} className={buttonStyles(variant, className)} {...props} />;
});
