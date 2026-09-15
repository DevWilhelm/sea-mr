"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export type NavDropdownItem = { key: string; href: string; label: string };

const navLinkClass = "text-sm font-medium text-white/90 hover:text-white transition";

// Shared desktop nav dropdown used for Sectors, Our Services, and Markets.
// Opens on hover (existing behavior) and also on keyboard focus, closes on
// Escape and on click/focus outside, so it's usable without a mouse.
export default function NavDropdown({
  label,
  href,
  items,
  panelClassName = "w-64",
}: {
  label: string;
  href: string;
  items: NavDropdownItem[];
  panelClassName?: string;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(e) => {
        if (!rootRef.current?.contains(e.relatedTarget as Node)) {
          setOpen(false);
        }
      }}
    >
      <Link
        href={href}
        className={`${navLinkClass} flex items-center gap-1`}
        aria-haspopup="true"
        aria-expanded={open}
      >
        {label}
        <ChevronDown
          size={14}
          aria-hidden="true"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </Link>
      {open && (
        <div
          role="menu"
          aria-label={label}
          className={`absolute left-0 top-full ${panelClassName} z-50 rounded-xl bg-white p-2 shadow-lg`}
        >
          {items.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              role="menuitem"
              className="block rounded-lg px-4 py-2 text-sm text-primary transition hover:bg-primary/5 focus:bg-primary/5 focus:outline-none focus:ring-1 focus:ring-accent"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
