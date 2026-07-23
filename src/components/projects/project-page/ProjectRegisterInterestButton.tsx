"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import FinalContactForm from "@/components/common/final-contact/FinalContactForm";
import styles from "@/app/tools/calculator-ui.module.css";

type ProjectRegisterInterestButtonProps = {
  projectName: string;
  className?: string;
  label?: string;
};

const ProjectRegisterInterestButton = ({
  projectName,
  className = "po-project-page-btn po-project-page-btn--light",
  label = "Register Interest",
}: ProjectRegisterInterestButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const dialog = dialogRef.current;
    const focusable = dialog
      ? Array.from(
          dialog.querySelectorAll<HTMLElement>(
            'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        )
      : [];
    const firstFocusable =
      dialog?.querySelector<HTMLElement>('input[name="fullName"]') ?? focusable[0];
    const lastFocusable = focusable[focusable.length - 1];

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab" || focusable.length === 0) return;

      if (event.shiftKey && document.activeElement === firstFocusable) {
        event.preventDefault();
        lastFocusable?.focus();
        return;
      }

      if (!event.shiftKey && document.activeElement === lastFocusable) {
        event.preventDefault();
        firstFocusable?.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    window.requestAnimationFrame(() => {
      firstFocusable?.focus();
    });

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button type="button" className={className} onClick={() => setIsOpen(true)}>
        {label}
      </button>

      {isOpen
        ? createPortal(
            <div
              className={`${styles.modalOverlay} ${styles.contactModalOverlay}`}
              onClick={() => setIsOpen(false)}
              role="presentation"
            >
              <div
                ref={dialogRef}
                className={`${styles.contactModal} po-project-page-register`}
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                tabIndex={-1}
              >
                <div className={styles.contactModalHead}>
                  <div>
                    <h2 id={titleId} className="po-project-page-register-title">
                      Have any questions? Let&apos;s connect.
                    </h2>
                    <p className="po-project-page-register-lead">
                      Register your interest and our team will get back to you.
                    </p>
                  </div>
                  <button
                    type="button"
                    className={styles.closeBtn}
                    onClick={() => setIsOpen(false)}
                    aria-label="Close"
                  >
                    ×
                  </button>
                </div>

                <FinalContactForm
                  defaultProject={projectName}
                  hideProjectField
                  formSource="project_page"
                  formName="Project Register Interest Form"
                  onSuccess={() => {
                    window.setTimeout(() => setIsOpen(false), 2500);
                  }}
                />
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
};

export default ProjectRegisterInterestButton;
