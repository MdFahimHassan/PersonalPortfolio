import { Github, Linkedin, Mail, ArrowRight, MapPin, Sparkles, Copy, Check, X } from "lucide-react";
import { useState } from "react";
import { useTypewriter } from "@/hooks/use-typewriter";

const profile = "https://i.postimg.cc/4xT0WGqG/Messenger-creation-F167FE32-5776-44BB-8E65-FE01F968A689-Copy.jpg";

const roles = [
  "Computer Science Student",
  "Full-Stack Developer",
  "Software Engineer",
  "Problem Solver",
  "Open Source Enthusiast",
  "BUCC R&D Executive",
];

export function Hero() {
  const { text: typed, word } = useTypewriter(roles);
  const article = /^[aeiou]/i.test(word) ? "an" : "a";
  const email = "mdfahimhassanbd7@gmail.com";
  const [emailOpen, setEmailOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* noop */
    }
  };


  return (
    <section
      id="home"
      className="relative flex min-h-dvh items-center pt-28 pb-16 sm:pt-32"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        {/* Text */}
        <div className="order-2 lg:order-1">
          <span className="chip mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for internships & collaboration
          </span>

          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Hello, I&apos;m{" "}
            <span className="gradient-text">Md. Fahim Hassan</span>
            <br />
            <span className="text-foreground/90">{article}</span>{" "}
            <span className="relative inline-block text-foreground">
              {typed}
              <span
                aria-hidden="true"
                className="ml-0.5 inline-block h-[0.9em] w-[3px] translate-y-1 bg-nebula-violet animate-blink"
              />
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I am a Computer Science and Engineering student at BRAC University
            with a strong interest in software development, full-stack web and
            app development, problem-solving, and continuous learning. I enjoy
            building impactful software, exploring Linux, collaborating on
            technical projects, and continuously improving myself as an
            engineer.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2 font-mono text-[11px] text-muted-foreground/80">
            <span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1">
              <span className="text-emerald-400">$</span> whoami
              <span className="ml-2 text-foreground/80">fahim@dev:~</span>
            </span>
            <span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1">
              <span className="text-nebula-cyan">status:</span> <span className="text-emerald-400">online</span>
            </span>
            <span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1">
              <span className="text-nebula-cyan">uptime:</span> shipping code
            </span>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-ghost">
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://github.com/MdFahimHassan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-muted-foreground transition-all hover:border-nebula-violet/60 hover:text-foreground"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/md-fahim-hassan-042110386/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-muted-foreground transition-all hover:border-nebula-violet/60 hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <button
              type="button"
              onClick={() => setEmailOpen(true)}
              aria-label="Show email"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-muted-foreground transition-all hover:border-nebula-violet/60 hover:text-foreground"
            >
              <Mail className="h-5 w-5" />
            </button>
            <div className="ml-2 flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" />
              Dhaka, Bangladesh
            </div>
          </div>
        </div>

        {/* Portrait */}
        <div className="relative order-1 mx-auto lg:order-2">
          <div className="relative h-[320px] w-[320px] sm:h-[400px] sm:w-[400px] lg:h-[460px] lg:w-[460px]">
            {/* Rotating gradient ring */}
            <div
              className="absolute inset-0 rounded-full animate-spin-slow"
              style={{
                background:
                  "conic-gradient(from 0deg, oklch(0.7 0.2 250), oklch(0.62 0.24 300), oklch(0.55 0.22 315), oklch(0.7 0.2 250))",
                filter: "blur(2px)",
              }}
            />
            <div className="absolute inset-2 rounded-full bg-background" />

            {/* Floating orbs */}
            <div className="absolute -left-4 top-8 chip glass animate-float z-20">
              <Sparkles className="h-3.5 w-3.5 text-nebula-cyan" />
              CSE @ BRAC University
            </div>
            <div
              className="absolute -right-2 bottom-16 chip glass animate-float z-20"
              style={{ animationDelay: "1.5s" }}
            >
              <span className="font-mono text-nebula-cyan">&lt;/&gt;</span>
              BUCC R&amp;D Executive
            </div>

            {/* Image */}
            <div
              className="absolute inset-4 overflow-hidden rounded-full animate-float"
              style={{
                boxShadow:
                  "0 0 60px -10px oklch(0.55 0.24 300 / 0.55), inset 0 0 40px oklch(0.35 0.18 275 / 0.3)",
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 50% 30%, oklch(0.35 0.18 275 / 0.4), oklch(0.14 0.02 265) 70%)",
                }}
              />
              <img
                src={profile}
                alt="Md. Fahim Hassan portrait"
                width={460}
                height={460}
                className="relative h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>

      {emailOpen && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-background/70 backdrop-blur-sm px-4"
          onClick={() => setEmailOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="glass relative w-full max-w-md rounded-2xl border border-white/10 p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setEmailOpen(false)}
              aria-label="Close"
              className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full border border-white/10 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5">
                <Mail className="h-5 w-5 text-nebula-cyan" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold">Email me</h3>
                <p className="text-xs text-muted-foreground">
                  Tap to copy or open in your mail app.
                </p>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 font-mono text-sm">
              <span className="truncate text-foreground">{email}</span>
              <button
                type="button"
                onClick={copyEmail}
                className="ml-auto grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-white/10 text-muted-foreground hover:text-foreground"
                aria-label="Copy email"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-emerald-400" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </div>

            <div className="mt-4 flex gap-2">
              <a href={`mailto:${email}`} className="btn-primary flex-1 justify-center">
                Open Mail App
              </a>
              <button type="button" onClick={copyEmail} className="btn-ghost">
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
