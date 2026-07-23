import Link from "next/link";

type ProjectConstructionCtaSectionProps = {
  href?: string | null;
  headingId?: string;
};

const CtaIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path
      d="M5 11L11 5M11 5H6M11 5V10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ProjectConstructionCtaSection = ({
  href,
  headingId = "construction-cta-heading",
}: ProjectConstructionCtaSectionProps) => {
  if (!href) return null;

  const isExternal = href.startsWith("http");
  const label = (
    <>
      More updates
      <CtaIcon />
    </>
  );

  return (
    <section className="po-project-page-construction" aria-labelledby={headingId}>
      <div className="container po-project-page-construction-inner">
        <h2 id={headingId} className="po-project-page-construction-title">
          View the latest construction updates for this project
        </h2>
        {isExternal ? (
          <a
            href={href}
            className="po-project-page-construction-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            {label}
          </a>
        ) : (
          <Link href={href} className="po-project-page-construction-cta">
            {label}
          </Link>
        )}
      </div>
    </section>
  );
};

export default ProjectConstructionCtaSection;
