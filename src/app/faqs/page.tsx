import SiteFooterBlock from "@/layouts/SiteFooterBlock";
import SiteHeader from "@/layouts/SiteHeader";
import Wrapper from "@/layouts/Wrapper";
import { createPageMetadata } from "@/lib/site-meta";
import FaqAccordion from "@/components/faqs/FaqAccordion";

type FaqItem = {
  question: string;
  answer?: string;
  answerList?: string[];
};

type FaqGroup = {
  title: string;
  items: FaqItem[];
};

const FAQ_GROUPS: FaqGroup[] = [
  {
    title: "Contracts",
    items: [
      {
        question: "What kind of title deed is issued by Prestige One?",
        answer:
          "A freehold title deed is issued, which gives full ownership rights with no expiry, in accordance with Dubai regulations for eligible buyers.",
      },
      {
        question: "What do the maintenance and service fees cover?",
        answer:
          "These fees cover the upkeep and cleaning of common areas. Annual service charges are budgeted and approved by RERA before collection, and details are listed in the SPA.",
      },
      {
        question: "Is changing joint ownership possible in the sale and purchase agreement?",
        answer:
          "Yes. Parties can request additions or removals in line with current regulations. Applicable Dubai Land Department fees may apply.",
      },
      {
        question: "What should I do if I lose my SPA?",
        answer:
          "Contact the Customer Relations team for guidance. You may need to submit an indemnity letter and pay an administrative fee before a replacement original is issued.",
      },
      {
        question: "How long does it take to receive an SPA after purchase?",
        answer:
          "The SPA is generally issued after payment of 20% plus DLD and admin fees, followed by compliance review of booking details.",
      },
    ],
  },
  {
    title: "Property, Registration and Resale",
    items: [
      {
        question: "What is a snagging inspection?",
        answer:
          "A snagging inspection is a pre-handover visit to verify the unit matches SPA specifications and to record defects for rectification.",
      },
      {
        question: "Can I modify my property or unit?",
        answer:
          "External changes are not allowed before completion. Minor internal changes may be possible after handover with required approvals and applicable fees.",
      },
      {
        question: "Can I rent out my property after handover?",
        answer:
          "Yes. Once handover is complete and the title deed is in your name, renting is permitted.",
      },
      {
        question: "Do I need to be a UAE resident to own property?",
        answer:
          "No. Non-residents can own property in Dubai freehold areas, subject to applicable legal documentation.",
      },
      {
        question: "What documents are needed for Oqood registration?",
        answer:
          "Required documents vary by project and buyer type (resident, non-resident, company, etc.), and the CRM team guides buyers through the process.",
      },
      {
        question: "Can I register my property later?",
        answer:
          "Registration should be completed within 60 days from the sale date to avoid potential Dubai Land Department penalties.",
      },
      {
        question: "What are the registration fees and how are they paid?",
        answer:
          "The standard fee is 4% of the purchase price plus administrative charges, payable to the Dubai Land Department directly or through Prestige One channels.",
      },
      {
        question: "What is the resale process?",
        answer:
          "Resale usually requires a No Objection Certificate (NOC) from Prestige One and compliance with current payment and transfer rules set by both Prestige One and DLD.",
      },
    ],
  },
  {
    title: "Payments",
    items: [
      {
        question: "What is the payment policy for the project?",
        answer:
          "Payments must follow the schedule stated in the SPA. Delayed or missed payments may trigger penalties under the SPA and relevant property laws.",
      },
      {
        question: "What is the standard payment plan?",
        answer: "Prestige One's payment plan is as follows:",
        answerList: [
          "20% at the time of booking",
          "5% 90 days after the reservation date",
          "5% 180 days after the reservation date",
          "5% 270 days after the reservation date",
          "10% 360 days after the reservation date",
          "5% 450 days after the reservation date",
          "5% 540 days after the reservation date",
          "5% 630 days after the reservation date",
          "5% 720 days after the reservation date",
          "35% upon handover",
        ],
      },
      {
        question: "What happens if a purchaser defaults on payment?",
        answer:
          "A 30-day notice is typically issued for defaulted payments. If unresolved, further legal action may follow as per applicable law.",
      },
    ],
  },
  {
    title: "Others",
    items: [
      {
        question: "How can I update my communication details?",
        answer:
          "You can contact the CRM department by email or visit the sales office to update your details.",
      },
      {
        question: "Can I secure a home loan and register a mortgage?",
        answer:
          "Yes, subject to approval from a UAE Central Bank licensed financial institution.",
      },
      {
        question: "Is VAT applicable on my property?",
        answer:
          "As published, new properties are VAT exempt within three years of construction, subject to prevailing regulations.",
      },
      {
        question: "Can I purchase in the name of a free zone company?",
        answer:
          "Yes, where permitted, and in line with Dubai Land Department and relevant free zone authority requirements.",
      },
      {
        question: "What is the difference between principal and joint owners in a sale agreement?",
        answer:
          "By default, principal and joint owners hold equal rights unless a different ownership share is declared in the agreement.",
      },
    ],
  },
];

export const metadata = createPageMetadata({
  title: "FAQs",
  description: "Frequently asked questions for contracts, registration, payments and ownership.",
});

const FaqsPage = () => {
  return (
    <Wrapper>
      <SiteHeader />
      <main className="po-faq-page">
        <section className="po-list-page-hero po-faqs-hero" aria-labelledby="faqs-page-title">
          <div className="container po-list-page-hero-inner">
            <p className="po-list-page-kicker">Prestige One Developments</p>
            <h1 id="faqs-page-title" className="po-list-page-title">
              FAQ&apos;s
            </h1>
            <p className="po-list-page-intro">
              Answers to the most common questions about contracts, ownership, registration, payments, and handover.
            </p>
          </div>
        </section>

        <section className="po-faqs-content">
          <div className="container">
            <FaqAccordion groups={FAQ_GROUPS} />
          </div>
        </section>
      </main>
      <SiteFooterBlock />
    </Wrapper>
  );
};

export default FaqsPage;
