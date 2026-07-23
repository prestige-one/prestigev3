"use client";

import { useEffect } from "react";

/** Applied to `document.body` on hub list routes with light heroes: /construction-updates, /blogs, /blog, /blogs/[slug], /blog-details, /news, /news/[slug]. */
export const HUB_LIST_BODY_CLASS = "po-body-hub-list-page";

export default function HubListBodyClass() {
  useEffect(() => {
    document.body.classList.add(HUB_LIST_BODY_CLASS);
    return () => {
      document.body.classList.remove(HUB_LIST_BODY_CLASS);
    };
  }, []);

  return null;
}
