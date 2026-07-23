"use client";

import { usePathname } from "next/navigation";
import FinalContactSection from "@/components/common/final-contact/FinalContactSection";
import FooterOne from "@/layouts/footers/FooterOne";

function normalizePath(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

function shouldShowFinalContact(path: string) {
  return path === "/contact";
}

export default function SiteFooterBlock() {
  const pathname = usePathname();
  const path = pathname ? normalizePath(pathname) : "";
  const showFinalContactForm = shouldShowFinalContact(path);

  return (
    <>
      {showFinalContactForm && <FinalContactSection />}
      <FooterOne />
    </>
  );
}
