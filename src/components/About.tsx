import { Code2, Users, Rocket, Sparkles, GraduationCap, Trophy } from "lucide-react";

const stats = [
  { label: "Programming Languages", value: "4+", icon: Code2, href: "#skills" },
  { label: "Frameworks & Tools", value: "10+", icon: Rocket, href: "#skills" },
  { label: "Projects Built", value: "8+", icon: Sparkles, href: "#projects" },
  { label: "Club Contributions", value: "5+", icon: Users, href: "#experience" },
];

const timeline = [
  {
    school: "BRAC University",
    degree: "B.Sc. in Computer Science & Engineering",
    meta: "Expected Graduation · 2029",
    current: true,
    logo: "https://i.postimg.cc/3Np1JRr6/bracu-logo-12-0-2022-Edited.jpg",
  },
  {
    school: "Notre Dame College",
    degree: "Higher Secondary Certificate (HSC)",
    meta: "Dhaka Board · GPA 5.00",
    logo: "https://i.postimg.cc/g0JKL4kg/notre-dame-college-dhaka-logo-png-seeklogo-465494.png",
  },
  {
    school: "Dhanmondi Govt. Boys' High School",
    degree: "Secondary School Certificate (SSC)",
    meta: "Dhaka Board · GPA 5.00",
    logo: "https://i.postimg.cc/VL8BWzky/dhanmondi-govt-boys-high-school-logo.jpg",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="term-tag">
            <span className="text-emerald-400">$</span> cat ~/about.md
          </span>
          <h2 className="section-heading mt-5">
            <span className="section-title">
              Curious engineer,{" "}
              <span className="gradient-text">disciplined builder.</span>
            </span>
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div className="glass rounded-3xl p-8 sm:p-10">
            <p className="text-base leading-relaxed text-foreground/85 sm:text-lg">
              I am a Computer Science &amp; Engineering student at{" "}
              <span className="text-foreground">BRAC University</span>{" "}
              passionate about building modern software solutions that solve
              real-world problems. My interests span full-stack development,
              application development, backend engineering, and emerging
              technologies.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Beyond academics, I actively contribute to the{" "}
              <span className="text-foreground">
                BRAC University Computer Club&apos;s R&amp;D department
              </span>
              , collaborating on impactful technical projects while continuously
              expanding my skills. My long-term goal is to become a highly
              skilled Full-Stack Software Engineer capable of building
              meaningful technology with real-world impact.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Discipline",
                "Consistency",
                "Teamwork",
                "Leadership",
                "Continuous Learning",
                "Problem Solving",
              ].map((v) => (
                <span key={v} className="chip">
                  {v}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  className="glass group relative block overflow-hidden rounded-2xl p-5 transition-all hover:-translate-y-1 hover:border-nebula-violet/40"
                >
                  <div
                    className="absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-40 blur-2xl transition-opacity group-hover:opacity-70"
                    style={{
                      background:
                        "radial-gradient(circle, oklch(0.6 0.24 300 / 0.8), transparent 70%)",
                    }}
                  />
                  <Icon className="h-6 w-6 text-nebula-cyan" />
                  <div className="mt-4 font-display text-3xl font-bold text-foreground">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {s.label}
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Education Timeline */}
        <div className="mt-20">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <span className="chip">
                <GraduationCap className="h-3.5 w-3.5 text-nebula-cyan" />
                Education
              </span>
              <h3 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
                Academic Journey
              </h3>
            </div>
            <div className="hidden text-xs text-muted-foreground sm:flex items-center gap-1.5">
              <Trophy className="h-3.5 w-3.5" />
              GPA 5.00 · HSC &amp; SSC
            </div>
          </div>

          <ol className="relative space-y-8 border-l border-white/10 pl-8">
            {timeline.map((t, i) => (
              <li key={i} className="relative">
                <span
                  className="absolute -left-[41px] top-1.5 grid h-6 w-6 place-items-center rounded-full border border-white/10"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.6 0.22 265), oklch(0.55 0.24 310))",
                  }}
                >
                  <span className="h-2 w-2 rounded-full bg-white" />
                </span>
                <div className="glass rounded-2xl p-5 transition-all hover:border-nebula-violet/40">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 grid h-14 w-14 place-items-center overflow-hidden rounded-xl border border-white/10 bg-white p-1">
                      <img
                        src={t.logo}
                        alt={`${t.school} logo`}
                        loading="lazy"
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="font-display text-lg font-semibold">
                          {t.school}
                        </h4>
                        {t.current && (
                          <span className="chip !border-nebula-violet/40 !text-nebula-cyan">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm text-foreground/80">{t.degree}</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {t.meta}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
