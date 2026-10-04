import { randomUUID } from "crypto";

// Non-sequential inquiry reference, e.g. "SEA-20261004-7F3A2B".
// Date-prefixed so it sorts/searches naturally in an inbox; the random suffix
// avoids needing a persistent counter/database just to track inquiry count.
export function generateInquiryReference(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  const suffix = randomUUID().replace(/-/g, "").slice(0, 6).toUpperCase();
  return `SEA-${y}${m}${d}-${suffix}`;
}
