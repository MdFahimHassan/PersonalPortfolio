// Skills toolkit — devicon-powered pills

const devicon = (slug: string, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-${variant}.svg`;

// Icons that are dark/monochrome — invert to stay readable on the dark theme.
const INVERT = new Set(["Express.js"]);

const ICONS: Record<string, string> = {
  Python: devicon("python"),
  Java: devicon("java"),
  JavaScript: devicon("javascript"),
  "C++": devicon("cplusplus"),
  HTML5: devicon("html5"),
  CSS3: devicon("css3"),
  React: devicon("react"),
  "Node.js": devicon("nodejs"),
  "Spring Boot": devicon("spring"),
  "Tailwind CSS": devicon("tailwindcss"),
  MongoDB: devicon("mongodb"),
  MySQL: devicon("mysql"),
  Firebase: devicon("firebase", "plain"),
  Docker: devicon("docker"),
  Git: devicon("git"),
  GitHub: devicon("github"),
  GitLab: devicon("gitlab"),
  Linux: devicon("linux"),
  Windows: devicon("windows11"),
  MERN: devicon("mongodb"),
};

const groups: { title: string; skills: string[]; textOnly?: boolean }[] = [
  { title: "Languages", skills: ["Python", "Java", "JavaScript", "C++"] },
  { title: "Frontend", skills: ["HTML5", "CSS3", "JavaScript", "React"] },
  { title: "Backend", skills: ["Node.js", "Spring Boot"] },
  {
    title: "Frameworks",
    skills: ["MERN", "React", "Spring Boot", "Node.js", "Tailwind CSS"],
  },
  { title: "Databases", skills: ["MongoDB", "MySQL", "Firebase"] },
  {
    title: "Tools",
    skills: ["Docker", "REST APIs", "DB Management", "Version Control"],
  },
  { title: "Version Control", skills: ["Git", "GitHub", "GitLab"] },
  { title: "Operating Systems", skills: ["Windows", "Linux"] },
  {
    title: "Soft Skills",
    textOnly: true,
    skills: [
      "Communication",
      "Public Speaking",
      "Team Collaboration",
      "Team Management",
    ],
  },
];

function SkillPill({ name }: { name: string }) {
  const src = ICONS[name];
  if (!src) {
    return (
      <span className="chip transition-colors hover:!border-nebula-violet/50 hover:!text-foreground">
        {name}
      </span>
    );
  }
  return (
    <span
      className="group/pill inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1.5 pl-1.5 pr-3 text-xs text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-nebula-violet/50 hover:text-foreground"
      title={name}
    >
      <span className="grid h-6 w-6 place-items-center rounded-full bg-white/95">
        <img
          src={src}
          alt={`${name} logo`}
          loading="lazy"
          className={`h-4 w-4 object-contain ${INVERT.has(name) ? "[filter:invert(1)]" : ""}`}
        />
      </span>
      {name}
    </span>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="term-tag">
            <span className="text-emerald-400">$</span> ls ~/toolkit
          </span>
          <h2 className="section-heading mt-5">
            <span className="section-title">
              The <span className="gradient-text">technical toolkit</span>
            </span>
          </h2>
          <p className="mt-4 font-mono text-xs text-muted-foreground">
            <span className="text-nebula-cyan">//</span> continuously growing. grounded in the fundamentals.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <div
              key={g.title}
              className="group glass relative overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-nebula-violet/40"
            >
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-60"
                style={{
                  background:
                    "radial-gradient(circle, oklch(0.6 0.24 300 / 0.9), transparent 70%)",
                }}
              />
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold">
                  {g.title}
                </h3>
                <span className="font-mono text-xs text-muted-foreground">
                  .{g.title.toLowerCase().replace(/\s+/g, "")}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) =>
                  g.textOnly ? (
                    <span
                      key={s}
                      className="chip transition-colors hover:!border-nebula-violet/50 hover:!text-foreground"
                    >
                      {s}
                    </span>
                  ) : (
                    <SkillPill key={s} name={s} />
                  ),
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
