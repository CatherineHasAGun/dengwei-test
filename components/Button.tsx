import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variantClassNames: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-peach to-sunshine text-white shadow-[0_14px_30px_rgba(255,107,157,0.28)]",
  secondary: "border border-ink/10 bg-white/85 text-ink shadow-soft",
  ghost: "bg-white/45 text-ink",
};

export function buttonClassName(
  variant: ButtonVariant = "primary",
  className = "",
) {
  return [
    "inline-flex min-h-12 items-center justify-center rounded-2xl px-5 py-3 text-center text-sm font-black transition duration-200 hover:-translate-y-0.5 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:translate-y-0 disabled:active:scale-100",
    variantClassNames[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button({
  className,
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonClassName(variant, className)}
      type={type}
      {...props}
    />
  );
}
