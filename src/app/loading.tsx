"use client";

export default function Loading() {
  return (
    <div className="po-page-loading" role="status" aria-live="polite" aria-label="Page is loading">
      <span className="po-page-loading__dot" />
    </div>
  );
}
