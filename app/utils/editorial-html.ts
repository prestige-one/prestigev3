const PRESTIGE_INTERNAL_HOSTS = new Set([
  "prestigeone.ae",
  "www.prestigeone.ae",
]);

function isExternalHref(href: string): boolean {
  if (!/^(?:https?:)?\/\//i.test(href)) return false;

  try {
    const url = new URL(href.startsWith("//") ? `https:${href}` : href);
    return !PRESTIGE_INTERNAL_HOSTS.has(url.hostname.toLowerCase());
  } catch {
    return false;
  }
}

function setAttribute(attributes: string, name: string, value: string): string {
  const pattern = new RegExp(`\\s${name}\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s>]+)`, "i");
  if (pattern.test(attributes)) {
    return attributes.replace(pattern, ` ${name}="${value}"`);
  }
  return `${attributes} ${name}="${value}"`;
}

export function openExternalLinksInNewTab(html: string): string {
  return html.replace(/<a\b([^>]*)>/gi, (tag, attributes: string) => {
    const hrefMatch = attributes.match(/\shref\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i);
    const href = hrefMatch?.[1] ?? hrefMatch?.[2] ?? hrefMatch?.[3] ?? "";
    if (!isExternalHref(href)) return tag;

    const relMatch = attributes.match(/\srel\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i);
    const relTokens = new Set(
      (relMatch?.[1] ?? relMatch?.[2] ?? relMatch?.[3] ?? "")
        .split(/\s+/)
        .filter(Boolean),
    );
    relTokens.add("noopener");
    relTokens.add("noreferrer");

    let nextAttributes = setAttribute(attributes, "target", "_blank");
    nextAttributes = setAttribute(nextAttributes, "rel", [...relTokens].join(" "));
    return `<a${nextAttributes}>`;
  });
}
