"use client";

import { useState, type FormEvent } from "react";
import { contactCategories } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-ink/15 px-8 py-12 text-center">
        <p className="font-display text-xl text-ink mb-2">
          Enquiry received.
        </p>
        <p className="text-charcoal/70 text-sm">
          Thank you for reaching out. Our team will respond shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8">
        <Field label="Name" name="name" required />
        <Field label="Company" name="company" />
      </div>

      <Field label="Email" name="email" type="email" required />

      <div>
        <label
          htmlFor="area"
          className="block text-xs tracking-wide2 uppercase text-navy/70 mb-3"
        >
          Area of Interest
        </label>
        <select
          id="area"
          name="area"
          required
          defaultValue=""
          className="w-full bg-transparent border-b border-ink/25 py-3 text-base text-ink focus:border-ink outline-none transition-colors"
        >
          <option value="" disabled>
            Select an area
          </option>
          {contactCategories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs tracking-wide2 uppercase text-navy/70 mb-3"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full bg-transparent border-b border-ink/25 py-3 text-base text-ink focus:border-ink outline-none transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="text-sm text-parchment bg-ink px-7 py-3.5 hover:bg-charcoal transition-colors duration-300 ease-editorial disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Enquiry"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-700">
          Something went wrong sending your enquiry. Please try again or
          email us directly.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs tracking-wide2 uppercase text-navy/70 mb-3"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border-b border-ink/25 py-3 text-base text-ink focus:border-ink outline-none transition-colors"
      />
    </div>
  );
}
