const tech = [
  "Java",
  "Python",
  "JavaScript",
  "C++",
  "React",
  "Spring Boot",
  "Node.js",
  "MongoDB",
  "Firebase",
  "Docker",
  "Git",
  "GitHub",
  "Linux",
  "MySQL",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
];

export function TechMarquee() {
  const row = [...tech, ...tech];
  return (
    <section aria-label="Tech stack" className="relative py-16">
      <div
        className="relative mx-auto max-w-7xl overflow-hidden px-4 sm:px-6"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee gap-3">
          {row.map((t, i) => (
            <span
              key={i}
              className="glass whitespace-nowrap rounded-full px-5 py-2.5 font-mono text-sm text-foreground/90"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
