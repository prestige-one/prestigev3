import SiteFooterBlock from "@/layouts/SiteFooterBlock";
import SiteHeader from "@/layouts/SiteHeader";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";

export const metadata = createPageMetadata({
  title: "Thank You",
  description: "Thank you confirmation page for submitted enquiries.",
});

const ThankYouPage = () => {
  return (
    <Wrapper>
      <SiteHeader />
      <main>
        <section className="po-thank-you-hero" aria-labelledby="thank-you-title">
          <div className="po-thank-you-overlay" />
          <div className="container">
            <div className="po-thank-you-content">
              <h1 id="thank-you-title">Thank you for registering your interest</h1>
              <p>One of our sales specialist will get in touch with you shortly</p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooterBlock />
    </Wrapper>
  );
};

export default ThankYouPage;
