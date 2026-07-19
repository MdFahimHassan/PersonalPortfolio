import { Users2, Code, Rocket } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="term-tag">
            <span className="text-emerald-400">$</span> ps -ef | grep experience
          </span>
          <h2 className="section-heading mt-5">
            <span className="section-title">
              Leadership &{" "}
              <span className="gradient-text">technical contribution</span>
            </span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          <div className="gradient-border rounded-3xl p-8">
            <div className="mb-5 flex items-center gap-4">
              <div className="grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-2xl border border-white/10 bg-white p-1.5">
                <img
                  src="https://i.postimg.cc/T2rnwBJ1/492357472-1513238856541624-2310939308702377892-n.jpg"
                  alt="BRAC University Computer Club logo"
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="chip !border-nebula-violet/40 !text-nebula-cyan">
                <Rocket className="h-3.5 w-3.5" />
                Promoted after 1 semester
              </div>
            </div>
            <h3 className="font-display text-2xl font-bold sm:text-3xl">
              BRAC University Computer Club
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Research &amp; Development Department
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/5">
                  <Users2 className="h-4 w-4 text-nebula-cyan" />
                </span>
                <span className="text-foreground">Executive</span>
                <span className="text-muted-foreground">· Current</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/5">
                  <Code className="h-4 w-4 text-nebula-cyan" />
                </span>
                <span className="text-foreground">General Member</span>
                <span className="text-muted-foreground">· Aug 2025</span>
              </div>
            </div>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "BUCC Website",
                body: "Ongoing development and maintenance of the official BUCC website.",
                href: "#project-bucc-website",
                building: true,
              },
              {
                title: "BUCC Study Corner",
                body: "Frontend development for the BUCC educational platform.",
                href: "#project-bucc-study-corner",
              },
              {
                title: "BUCC Hackathon Website",
                body: "Development contributor for the club's hackathon platform.",
                href: "#project-bucc-hackathon",
                building: true,
              },
              {
                title: "Club Initiatives",
                body: "Active participation across events, collaboration with multidisciplinary student teams.",
                href: "#experience",
              },
            ].map((r) => (
              <li key={r.title}>
                <a
                  href={r.href}
                  className="glass block h-full rounded-2xl p-5 transition-all hover:-translate-y-1 hover:border-nebula-violet/40"
                >
                  <div className="flex items-center gap-2">
                    <h4 className="font-display text-base font-semibold">
                      {r.title}
                    </h4>
                    {r.building && (
                      <span className="chip !py-0.5 !text-[10px] !border-nebula-violet/40 !text-nebula-cyan">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Building
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {r.body}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
