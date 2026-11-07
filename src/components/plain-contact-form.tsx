"use client";

import { FormEvent, useState } from "react";

export default function PlainContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const fields = new FormData(form);
    setStatus("sending");
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: fields.get("email"), subject: fields.get("subject"), message: fields.get("message") }),
      });
      const result = await response.json();
      if (!response.ok || result.error) throw new Error("Message was not delivered");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="plain-contact" onSubmit={handleSubmit} aria-busy={status === "sending"}>
      <p>All fields are required.</p>
      <label htmlFor="contact-email">Your email</label>
      <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} />
      <label htmlFor="contact-subject">Subject</label>
      <input id="contact-subject" name="subject" required maxLength={200} />
      <label htmlFor="contact-message">Message</label>
      <textarea id="contact-message" name="message" required maxLength={5000} rows={6} />
      <button type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send message"}</button>
      <div role="status" aria-live="polite">
        {status === "success" && <p>Your message was sent. Thanks for getting in touch!</p>}
        {status === "error" && <p>Your message couldn&apos;t be sent. Your text is still here—please try again, or <a href="https://www.linkedin.com/in/yash-inani">contact me on LinkedIn</a>.</p>}
      </div>
    </form>
  );
}
