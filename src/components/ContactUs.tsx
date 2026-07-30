"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ContactUs() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "Teacher",
    message: "",
  });

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  }

  return (
    <section id="contact" className="section bg-secondary-50">
      <div className="container-page">
        {/* Centered heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Contact</p>
          <h2 className="display mt-5 text-4xl md:text-6xl lg:text-[4.2rem]">
            Let&rsquo;s talk
            <br />
            <span className="text-primary">about your school.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ink/60">
            For demos, school onboarding, partnerships, or support&mdash;send a
            note and the team will follow up.
          </p>
        </div>

        {/* Contact channels row */}
        <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
          {[
            {
              icon: Mail,
              label: "Email us",
              value: "hello@skoolbox.xyz",
              href: "mailto:hello@skoolbox.xyz",
            },
            {
              icon: Phone,
              label: "Call us",
              value: "08036803974",
              href: "tel:+2348036803974",
            },
            {
              icon: MapPin,
              label: "Visit us",
              value: "Rayfield, Jos",
              href: "#",
            },
          ].map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="sticker-card group flex flex-col items-center gap-3 p-6 text-center transition hover:-translate-y-1"
            >
              <div className="grid h-12 w-12 place-items-center rounded-full border-2 border-ink bg-primary text-white">
                <c.icon size={20} strokeWidth={2.3} />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-ink/50">
                {c.label}
              </div>
              <div className="text-sm font-bold text-ink">{c.value}</div>
            </motion.a>
          ))}
        </div>

        {/* Form card */}
        <div className="mx-auto mt-10 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="sticker-card p-8 md:p-10"
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center py-14 text-center">
                <div className="grid h-16 w-16 place-items-center rounded-full border-2 border-ink bg-primary text-white">
                  <CheckCircle2 size={28} strokeWidth={2.3} />
                </div>
                <h3 className="mt-5 text-2xl font-black tracking-tight">
                  Thanks, {form.name.split(" ")[0]}!
                </h3>
                <p className="mt-2 max-w-sm text-ink/65">
                  We received your message and will reply to{" "}
                  <span className="font-bold text-ink">{form.email}</span>{" "}
                  shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Your name">
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="Adunni Olalere"
                      className="input"
                    />
                  </Field>
                  <Field label="Email address">
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="you@school.edu.ng"
                      className="input"
                    />
                  </Field>
                </div>

                <Field label="I am a">
                  <div className="flex flex-wrap gap-2">
                    {["Teacher", "Principal", "Student", "Parent", "Other"].map(
                      (r) => (
                        <button
                          type="button"
                          key={r}
                          onClick={() => setForm({ ...form, role: r })}
                          className={[
                            "rounded-full border-2 border-ink px-4 py-2 text-sm font-bold transition",
                            form.role === r
                              ? "bg-primary text-white"
                              : "bg-white text-ink hover:bg-sun",
                          ].join(" ")}
                        >
                          {r}
                        </button>
                      )
                    )}
                  </div>
                </Field>

                <Field label="How can we help?">
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Tell us about your school, class size, and what you want SkoolBox to help with."
                    className="input resize-none"
                  />
                </Field>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="btn-primary group justify-center"
                  >
                    Send message
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-ink/55">
        {label}
      </div>
      {children}
    </label>
  );
}
