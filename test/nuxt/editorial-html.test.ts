import { describe, expect, it } from "vitest";
import { openExternalLinksInNewTab } from "../../app/utils/editorial-html";

describe("editorial external links", () => {
  it("opens external links in a safe new tab", () => {
    const html = openExternalLinksInNewTab('<a href="https://example.com/story">Source</a>');

    expect(html).toContain('target="_blank"');
    expect(html).toContain('rel="noopener noreferrer"');
  });

  it("keeps relative and Prestige One links in the current tab", () => {
    const html = openExternalLinksInNewTab(
      '<a href="/projects">Projects</a><a href="https://prestigeone.ae/contact-us">Contact</a>',
    );

    expect(html).not.toContain('target="_blank"');
  });

  it("preserves existing rel values on external links", () => {
    const html = openExternalLinksInNewTab(
      '<a href="https://example.com" target="_self" rel="nofollow">Source</a>',
    );

    expect(html).toContain('target="_blank"');
    expect(html).toContain('rel="nofollow noopener noreferrer"');
  });
});
