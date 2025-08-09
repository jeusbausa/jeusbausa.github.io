"use client";
import { X } from "lucide-react";
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
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open && cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { y: 24, opacity: 0, scale: 0.98 },
        { y: 0, opacity: 1, scale: 1, duration: 0.28, ease: "power2.out" }
      );
    }
  }, [open]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="absolute inset-0 flex items-start md:items-center justify-center p-4 md:p-6">
        <div
          ref={cardRef}
          role="dialog"
          aria-modal="true"
          className="card w-full max-w-2xl md:max-w-3xl bg-slate-900 text-slate-100"
        >
          <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-white/10">
            <h3 className="text-lg font-semibold">{title}</h3>
            <button aria-label="Close" className="btn" onClick={onClose}>
              ×
            </button>
          </div>
          <div className="px-5 py-4 max-h-[70vh] overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
