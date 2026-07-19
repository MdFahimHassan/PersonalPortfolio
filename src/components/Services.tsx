import {
  Layers,
  MonitorSmartphone,
  Server,
  Globe,
  Smartphone,
  Palette,
  Lightbulb,
} from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Full-Stack Development",
    body: "End-to-end web applications with modern JavaScript stacks.",
  },
  {
    icon: MonitorSmartphone,
    title: "Frontend Development",
    body: "Polished, accessible UI in React & Tailwind CSS.",
  },
  {
    icon: Server,
    title: "Backend Development",
    body: "APIs and services with Node.js and Spring Boot.",
  },
  {
    icon: Globe,
    title: "Web Applications",
    body: "Feature-rich SPAs with performant data layers.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    body: "Cross-platform experiences with a native feel.",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    body: "Interfaces that feel intuitive and considered.",
  },
  {
    icon: Lightbulb,
    title: "Software Consulting",
    body: "Guidance on architecture, tooling, and best practices.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="term-tag">
            <span className="text-emerald-400">$</span> systemctl status services --preview
          </span>
          <h2 className="section-heading mt-5">
            <span className="section-title">
              What I&apos;m preparing to{" "}
              <span className="gradient-text">offer next</span>
            </span>
          </h2>
          <p className="mt-4 font-mono text-xs text-muted-foreground">
            <span className="text-nebula-cyan">//</span> planned for future freelance and professional work.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="glass group rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-nebula-violet/40"
              >
                <div
                  className="mb-5 grid h-12 w-12 place-items-center rounded-xl"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.6 0.22 265 / 0.25), oklch(0.55 0.24 310 / 0.25))",
                    border:
                      "1px solid oklch(0.6 0.22 265 / 0.4)",
                  }}
                >
                  <Icon className="h-5 w-5 text-nebula-cyan" />
                </div>
                <h3 className="font-display text-lg font-semibold">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
