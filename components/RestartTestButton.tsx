"use client";

import { useRouter } from "next/navigation";
import { Button } from "./Button";
import type { ButtonHTMLAttributes, MouseEvent } from "react";
import { trackEvent } from "@/lib/analytics";
import { clearTestState } from "@/lib/testState";

type RestartTestButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function RestartTestButton({
  children = "重新测试",
  onClick,
  ...props
}: RestartTestButtonProps) {
  const router = useRouter();

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    clearTestState();
    trackEvent("click_restart");
    onClick?.(event);
    router.push("/test");
  }

  return (
    <Button onClick={handleClick} {...props}>
      {children}
    </Button>
  );
}
