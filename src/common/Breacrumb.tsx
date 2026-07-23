import React from "react";

type BreacrumbProps = {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
};

const Breacrumb = ({ title, description, className }: BreacrumbProps) => {
  return (
    <>
   <div className={["breadcrumb-wrapper bg-img jarallax bg-overlay", className].filter(Boolean).join(" ")} data-jarallax="" data-speed="0.6"
      style={{backgroundImage: "url(/assets/images/v2/pages/buliding-map-1-1.webp)"}}>
      <div className="container h-100">
         <div className="breadcrumb-content h-100">
            <h2 className="wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="700ms">{title}</h2>
            {description ? (
               <p className="breadcrumb-content-desc wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="850ms">
                  {description}
               </p>
            ) : null}
         </div>
      </div>
   </div>
    </>
  );
};

export default Breacrumb;
