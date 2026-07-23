"use client";

import Link from "next/link";
import Marquee from "react-fast-marquee";
import { PROJECT_LOGOS } from "@/data/project-logos";

function ProjectLogoCard({ name, file, href, src }: (typeof PROJECT_LOGOS)[number]) {
  const image = <img src={src ?? `/assets/images/v2/web-logos/v2/${file}`} alt={name} />; 

  if (href.startsWith("http")) {
    return (
      <a
        href={href}
        className="po-logo-card"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${name} project`}
      >
        {image}
      </a>
    );
  }

  return (
    <Link href={href} className="po-logo-card" aria-label={`View ${name} project`}>
      {image}
    </Link>
  );
}

const LogoMarqueeArea = () => {
  return (
    <section className="po-logo-slider">
      <div className="container-fluid">
        <div className="po-logo-slider-viewport">
          <Marquee
            className="po-logo-marquee"
            speed={34}
            gradient={false}
            pauseOnHover
            autoFill
          >
            {PROJECT_LOGOS.map((logo) => (
              <div className="po-logo-marquee-item" key={`marquee-${logo.file}`}>
                <ProjectLogoCard {...logo} />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default LogoMarqueeArea;
