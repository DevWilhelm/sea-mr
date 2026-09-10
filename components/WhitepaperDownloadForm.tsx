"use client";

import { useState } from "react";

export default function WhitepaperDownloadForm({ title }: { title: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  return (
    <div className="card mt-8 max-w-md">
      {status === "idle" ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // TODO: wire to /api/whitepaper-lead once CMS/email provider is connected.
            setStatus("submitted");
          }}
          className="flex flex-col gap-3"
        >
          <label className="text-sm font-semibold text-primary" htmlFor="whitepaper-email">
            Enter your email to download &ldquo;{title}&rdquo;
          </label>
          <input
            id="whitepaper-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="rounded-lg border border-black/10 px-4 py-2 text-sm outline-none focus:border-accent"
          />
          <button type="submit" className="btn-primary">
            Download PDF
          </button>
        </form>
      ) : (
        <p className="text-sm text-black/70">
          Thanks — check your inbox for the download link.
        </p>
      )}
    </div>
  );
}
