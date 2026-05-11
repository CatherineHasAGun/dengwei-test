"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/analytics";

export function RouteTracker() {
  const pathname = usePathname();
  const previousPathnameRef = useRef<string | null>(null);

  useEffect(() => {
    if (pathname === "/" && previousPathnameRef.current !== pathname) {
      trackEvent("page_view_home", { route: pathname });
    }

    previousPathnameRef.current = pathname;
  }, [pathname]);

  return null;
}
