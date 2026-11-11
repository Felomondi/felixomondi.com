"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="col page" data-enter style={{ "--i": 1 } as React.CSSProperties}>
      <h1 className="page-title">Say hello</h1>
      <p className="lede">Have a question or just want to chat? Drop me a message.</p>

      <div className="mt-14 max-w-md">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm text-[var(--text)] mb-1.5">Name</label>
            <Input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="Your name" autoComplete="name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-[var(--text)] mb-1.5">Email</label>
            <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="you@example.com" autoComplete="email" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm text-[var(--text)] mb-1.5">Message</label>
            <Textarea id="message" name="message" required value={formData.message} onChange={handleChange} placeholder="What's on your mind?" rows={5} />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="text-sm font-medium text-[var(--text)] underline underline-offset-3 decoration-[var(--border)] hover:decoration-[var(--text)] transition-all disabled:opacity-50"
          >
            {status === "loading" ? "Sending..." : status === "success" ? "Sent!" : status === "error" ? "Try again" : "Send message →"}
          </button>

          {status === "success" && (
            <p className="text-sm text-[var(--text-secondary)]">
              Thanks! I&apos;ll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-600">
              Something went wrong. Try again or reach out on{" "}
              <a href="https://www.linkedin.com/in/felomondi/" target="_blank" rel="noopener noreferrer" className="inline-link">LinkedIn</a>.
            </p>
          )}
        </form>
      </div>

      <div className="mt-16 text-sm text-[var(--text-secondary)]">
        <p>
          Or find me on{" "}
          <a href="https://github.com/Felomondi" target="_blank" rel="noopener noreferrer" className="inline-link">GitHub</a>,{" "}
          <a href="https://www.linkedin.com/in/felomondi/" target="_blank" rel="noopener noreferrer" className="inline-link">LinkedIn</a>.
        </p>
      </div>
    </div>
  );
}
