import { Github, Trophy, Sparkles } from "lucide-react";
import { useState } from "react";

type Project = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  featured?: boolean;
  building?: boolean;
  achievement?: string;
  gradient: string;
  image: string;
  repo?: string;
  troll?: boolean;
};

const projects: Project[] = [
  {
    id: "project-corelytics",
    title: "Corelytics",
    description:
      "A fitness analytics platform calculating personalized calorie, protein, water, fiber, and full nutrition recommendations. My first independently built application.",
    stack: ["HTML", "CSS", "JavaScript"],
    featured: true,
    gradient:
      "linear-gradient(135deg, oklch(0.55 0.22 275), oklch(0.62 0.24 300))",
    image: "https://i.postimg.cc/QCPXc1ws/Corelytics.png",
    repo: "https://github.com/MdFahimHassan/Corelytics",
  },
  {
    id: "project-dhaka-bus",
    title: "Dhaka Bus Route Finder",
    description:
      "Web application helping users navigate Dhaka's local bus transportation — route information, bus types, and destination search. Built collaboratively with a BUET CSE student.",
    stack: ["HTML", "CSS", "JavaScript"],
    gradient:
      "linear-gradient(135deg, oklch(0.6 0.2 220), oklch(0.55 0.22 275))",
    image: "https://i.postimg.cc/kMh8TZPh/Dhaka-Local-Bus-Finder.png",
    repo: "https://github.com/MdManiruzzamanMridul/Vehicle-Route",
  },
  {
    id: "project-fifa-survivor",
    title: "FIFA Survivor",
    description:
      "Solo game built for the BUCC Club Fair. Ranked Top 3 among seven BUCC departments.",
    stack: ["HTML5 Canvas", "JavaScript", "Game Design"],
    achievement: "Top 3 · BUCC Club Fair",
    gradient:
      "linear-gradient(135deg, oklch(0.65 0.2 40), oklch(0.6 0.24 20))",
    image: "https://i.postimg.cc/V5QXDr0p/Screenshot-2026-07-13-142503.png",
    repo: "https://github.com/MdFahimHassan/FIFA-Survivor",
  },
  {
    id: "project-pixelchomp",
    title: "PixelChomp",
    description:
      "A modern recreation of the classic Pac-Man game with original implementation and personal design choices.",
    stack: ["HTML5 Canvas", "JavaScript"],
    gradient:
      "linear-gradient(135deg, oklch(0.7 0.2 90), oklch(0.65 0.22 60))",
    image: "https://i.postimg.cc/T1RKwVmx/Pixel-Chomp.png",
    repo: "https://github.com/MdFahimHassan/PixelChomp",
  },
  {
    id: "project-vector",
    title: "V.E.C.T.O.R.",
    description:
      "A modular hands-free Python desktop assistant inspired by J.A.R.V.I.S. Modular skills, voice input, and system control.",
    stack: ["Python", "Speech Recognition", "Modular Architecture"],
    building: true,
    gradient:
      "linear-gradient(135deg, oklch(0.55 0.24 310), oklch(0.5 0.24 340))",
    image: "https://i.postimg.cc/j2Dgn7yL/V-E-C-T-O-R.png",
    repo: "https://github.com/MdFahimHassan/V.E.C.T.O.R",
  },
  {
    id: "project-bucc-website",
    title: "BUCC Website",
    description:
      "Development and maintenance of the official BRAC University Computer Club website.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    building: true,
    gradient:
      "linear-gradient(135deg, oklch(0.6 0.22 265), oklch(0.55 0.22 245))",
    image: "https://i.postimg.cc/pXMHDW1r/BUCC-Website.png",
  },
  {
    id: "project-bucc-study-corner",
    title: "BUCC Study Corner",
    description:
      "Frontend implementation for the club's educational platform for students.",
    stack: ["React", "Tailwind CSS", "TypeScript"],
    gradient:
      "linear-gradient(135deg, oklch(0.62 0.2 200), oklch(0.6 0.22 235))",
    image: "https://i.postimg.cc/2S9mLPbW/BUCC-Study-Corner.png",
    repo: "https://github.com/SadatanamAs/BUCC-Study-Corner",
  },
  {
    id: "project-bucc-hackathon",
    title: "BUCC Hackathon",
    description:
      "Ongoing development contribution to the BUCC Hackathon platform.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    building: true,
    gradient:
      "linear-gradient(135deg, oklch(0.55 0.24 310), oklch(0.6 0.22 265))",
    image: "https://i.postimg.cc/5tLG9LbY/BUCC-Hackathon.png",
    troll: true,
  },
];

const trollLines = [
  "$ git clone https://github.com/MdFahimHassan/bucc-hackathon.git",
  "Cloning into 'bucc-hackathon'...",
  "remote: Enumerating objects: 42, done.",
  "remote: Counting objects: 100% (42/42), done.",
  "fatal: unable to access repository:",
  "  ERR_ACCESS_DENIED — repository is classified 🔒",
  "  ERR_CLEARANCE_LEVEL_INSUFFICIENT",
  "  ERR_NICE_TRY_THOUGH 😏",
  "",
  "> This repository is under NDA with the BUCC R&D vault.",
  "> Access requires clearance level BUCC-CORE-7.",
  "> Your attempt has been logged. (jk… or is it?)",
];

export function Projects() {
  const [trollOpen, setTrollOpen] = useState(false);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="term-tag">
            <span className="text-emerald-400">$</span> git log --oneline projects/
          </span>
          <h2 className="section-heading mt-5">
            <span className="section-title">
              Projects that{" "}
              <span className="gradient-text">taught me the craft</span>
            </span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              id={p.id}
              className={`group relative flex scroll-mt-28 flex-col overflow-hidden rounded-2xl border border-white/10 bg-card/40 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-nebula-violet/40 ${
                p.featured ? "lg:col-span-2" : ""
              }`}
            >
              {/* Cover */}
              <div
                className="relative h-48 overflow-hidden"
                style={{ background: p.gradient }}
              >
                <img
                  src={p.image}
                  alt={`${p.title} preview`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent"
                />


                <div className="absolute left-4 top-4 flex gap-2">
                  {p.featured && (
                    <span className="chip !border-white/20 !bg-black/30 !text-white">
                      <Sparkles className="h-3 w-3" /> Featured
                    </span>
                  )}
                  {p.building && (
                    <span className="chip !border-white/20 !bg-black/30 !text-white">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      Currently Building
                    </span>
                  )}
                </div>
                {p.achievement && (
                  <span className="absolute bottom-3 right-3 chip !border-white/20 !bg-black/30 !text-white">
                    <Trophy className="h-3 w-3" /> {p.achievement}
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="chip !text-xs">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-2 pt-6">
                  {p.troll ? (
                    <button
                      type="button"
                      onClick={() => setTrollOpen(true)}
                      className="btn-ghost !py-2 !px-4 !text-xs"
                      aria-label={`${p.title} on GitHub`}
                    >
                      <Github className="h-3.5 w-3.5" /> Code
                    </button>
                  ) : p.repo ? (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost !py-2 !px-4 !text-xs"
                      aria-label={`${p.title} on GitHub`}
                    >
                      <Github className="h-3.5 w-3.5" /> Code
                    </a>
                  ) : (
                    <span
                      className="btn-ghost !py-2 !px-4 !text-xs opacity-60"
                      aria-label={`${p.title} code private`}
                    >
                      <Github className="h-3.5 w-3.5" /> Private
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>



      {trollOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 grid place-items-center bg-background/80 backdrop-blur-sm px-4"
          onClick={() => setTrollOpen(false)}
        >
          <div
            className="w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-black/90 font-mono text-[13px] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs text-muted-foreground">
                fahim@bucc:~/classified —  zsh
              </span>
              <button
                type="button"
                onClick={() => setTrollOpen(false)}
                className="ml-auto text-xs text-muted-foreground hover:text-foreground"
              >
                close
              </button>
            </div>
            <div className="space-y-1 p-5 leading-relaxed">
              {trollLines.map((line, i) => (
                <div
                  key={i}
                  className={
                    line.startsWith("fatal") || line.includes("ERR_")
                      ? "text-red-400"
                      : line.startsWith(">")
                        ? "text-nebula-cyan"
                        : line.startsWith("$")
                          ? "text-emerald-400"
                          : "text-foreground/80"
                  }
                >
                  {line || "\u00A0"}
                </div>
              ))}
              <div className="pt-2 text-emerald-400">
                $ <span className="animate-pulse">▍</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
