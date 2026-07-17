"use client";

import { PropsWithChildren, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { gsap } from "gsap";

type Props = PropsWithChildren<{
  title: string;
  open: boolean;
  onClose: () => void;
}>;

export default function Modal({ title, open, onClose, children }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open || !cardRef.current) return;

    gsap.fromTo(
      cardRef.current,
      { y: 24, opacity: 0, scale: 0.98 },
      { y: 0, opacity: 1, scale: 1, duration: 0.28, ease: "power2.out" }
    );
  }, [open]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[60]">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="absolute inset-0 flex items-start justify-center p-4 md:items-center md:p-6">
        <div
          ref={cardRef}
          role="dialog"
          aria-modal="true"
          aria-label={title}
          className="card w-full max-w-2xl bg-[rgb(var(--surface))] text-[rgb(var(--fg))] md:max-w-3xl"
        >
          <div className="flex items-center justify-between border-b border-[rgb(var(--line))] px-5 py-4">
            <h3 className="font-mono-ui text-xs font-semibold uppercase tracking-[0.14em]">
              {title}
            </h3>
            <button type="button" aria-label="Close" className="btn" onClick={onClose}>
              ×
            </button>
          </div>
          <div className="max-h-[70vh] overflow-y-auto px-5 py-4">{children}</div>
        </div>
      </div>
    </div>,
    document.body
  );
}
