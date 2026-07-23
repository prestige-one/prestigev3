"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer?: string;
  answerList?: string[];
};

type FaqGroup = {
  title: string;
  items: FaqItem[];
};

type FaqAccordionProps = {
  groups: FaqGroup[];
};

const FaqAccordion = ({ groups }: FaqAccordionProps) => {
  const [activeFaqId, setActiveFaqId] = useState<string>("faq-item-1");
  let faqCounter = 0;

  return (
    <>
      {groups.map((group, groupIndex) => (
        <div className="po-faqs-group" key={group.title}>
          <h2 className="po-faqs-group-title">{group.title}</h2>
          <div className="po-faqs-accordion" id={`faqsGroup${groupIndex}`}>
            {group.items.map((item) => {
              faqCounter += 1;
              const detailsId = `faq-item-${faqCounter}`;
              const isOpen = activeFaqId === detailsId;

              return (
                <details className="po-faqs-item" key={item.question} id={detailsId} open={isOpen}>
                  <summary
                    className="po-faqs-question"
                    onClick={(event) => {
                      event.preventDefault();
                      setActiveFaqId((currentOpenId) => (currentOpenId === detailsId ? "" : detailsId));
                    }}
                    aria-expanded={isOpen}
                  >
                    {item.question}
                  </summary>
                  <div className="po-faqs-answer">
                    {item.answer ? <p>{item.answer}</p> : null}
                    {item.answerList?.length ? (
                      <ol>
                        {item.answerList.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ol>
                    ) : null}
                  </div>
                </details>
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
};

export default FaqAccordion;
