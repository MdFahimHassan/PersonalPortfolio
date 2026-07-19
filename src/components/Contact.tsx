import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Github, Linkedin, MessageCircle, Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const sent = status === "sent";

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="term-tag">
            <span className="text-emerald-400">$</span> ssh fahim@dev --connect
          </span>
          <h2 className="section-heading mt-5">
            <span className="section-title">
              Let&apos;s build{" "}
              <span className="gradient-text">something great</span>
            </span>
          </h2>
          <p className="mt-4 font-mono text-xs text-muted-foreground">
            <span className="text-nebula-cyan">//</span> open to collaboration, internships, and interesting problems.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Info */}
          <div className="glass rounded-3xl p-8">
            <ul className="space-y-5">
              {[
                {
                  Icon: Mail,
                  label: "Email",
                  value: "mdfahimhassanbd7@gmail.com",
                  href: "mailto:mdfahimhassanbd7@gmail.com",
                },
                {
                  Icon: MapPin,
                  label: "Location",
                  value: "Dhaka, Bangladesh",
                },
                {
                  Icon: Github,
                  label: "GitHub",
                  value: "MdFahimHassan",
                  href: "https://github.com/MdFahimHassan",
                },
                {
                  Icon: Linkedin,
                  label: "LinkedIn",
                  value: "md-fahim-hassan",
                  href: "https://www.linkedin.com/in/md-fahim-hassan-042110386/",
                },
                {
                  Icon: MessageCircle,
                  label: "Discord",
                  value: "_fahim07",
                },
              ].map(({ Icon, label, value, href }) => {
                const content = (
                  <>
                    <span
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-xl"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.6 0.22 265 / 0.25), oklch(0.55 0.24 310 / 0.25))",
                        border: "1px solid oklch(0.6 0.22 265 / 0.4)",
                      }}
                    >
                      <Icon className="h-4 w-4 text-nebula-cyan" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">
                        {label}
                      </div>
                      <div className="truncate text-sm text-foreground">
                        {value}
                      </div>
                    </div>
                  </>
                );
                return (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-4 rounded-xl p-2 -mx-2 transition-colors hover:bg-white/5"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-2 -mx-2">
                        {content}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Form */}
          <form
            ref={formRef}
            className="glass rounded-3xl p-8"
            onSubmit={async (e) => {
              e.preventDefault();
              if (!formRef.current || status === "sending") return;
              setStatus("sending");
              setErrorMsg("");
              try {
                await emailjs.sendForm(
                  EMAILJS_SERVICE_ID,
                  EMAILJS_TEMPLATE_ID,
                  formRef.current,
                  { publicKey: EMAILJS_PUBLIC_KEY }
                );
                setStatus("sent");
                formRef.current.reset();
                setTimeout(() => setStatus("idle"), 4000);
              } catch (err) {
                console.error("EmailJS error:", err);
                setErrorMsg(
                  err instanceof Error ? err.message : "Failed to send. Please try again."
                );
                setStatus("error");
              }
            }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  Name
                </span>
                <input
                  required
                  type="text"
                  name="name"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-nebula-violet/60 focus:bg-white/10"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  Email
                </span>
                <input
                  required
                  type="email"
                  name="email"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-nebula-violet/60 focus:bg-white/10"
                  placeholder="you@domain.com"
                />
              </label>
            </div>
            <label className="mt-5 block">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">
                Subject
              </span>
              <input
                type="text"
                name="subject"
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-nebula-violet/60 focus:bg-white/10"
                placeholder="What's this about?"
              />
            </label>
            <label className="mt-5 block">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">
                Message
              </span>
              <textarea
                required
                name="message"
                rows={5}
                className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-nebula-violet/60 focus:bg-white/10"
                placeholder="Tell me a bit about your project or idea..."
              />
            </label>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-muted-foreground">
                {status === "error" && errorMsg ? (
                  <span className="inline-flex items-center gap-1.5 text-red-400">
                    <AlertCircle className="h-3.5 w-3.5" /> {errorMsg}
                  </span>
                ) : (
                  "I usually respond within 24 hours."
                )}
              </p>
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending
                  </>
                ) : sent ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" /> Sent
                  </>
                ) : (
                  <>
                    Send Message <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
