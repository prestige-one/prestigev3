"use client";

import type { ReactNode } from "react";

type ShimmerImageProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  loading?: "lazy" | "eager";
  children?: ReactNode;
};

export default function ShimmerImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  loading = "lazy",
  children,
}: ShimmerImageProps) {
  return (
    <div className={className}>
      {children}
      <img src={src} alt={alt} loading={loading} className={imgClassName} />
    </div>
  );
}
