"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Flex } from "@/once-ui/components";

function isPortfolioRoute(pathname: string) {
  const route = pathname.replace(/\/$/, "");
  return route === "/" || route === "/about" || route === "/work" || route.startsWith("/work/");
}

export function PageHeader() {
  return <><Flex fillWidth minHeight="16" hide="s" /><Header /></>;
}

export function PageFooter() {
  const pathname = usePathname() ?? "";
  return isPortfolioRoute(pathname) ? null : <Footer />;
}
