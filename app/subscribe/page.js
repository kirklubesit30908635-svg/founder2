"use client";
import { getApiBase } from "../lib/api";

export default function Subscribe() {
  const base = getApiBase();
  return (
    <div style={{ maxWidth: 720 }}>
      <h2>Subscribe</h2>
      <p>Redirects to Stripe Checkout (Payment Link) through the backend.</p>
      <a href={`${base}/v1/billing/subscribe`} target="_blank" rel="noreferrer">
        Open Subscription Checkout
      </a>
    </div>
  );
}
