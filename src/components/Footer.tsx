import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <div className="font-display text-lg font-semibold">
              Md. Fahim Hassan
            </div>
            <p className="text-xs text-muted-foreground">
              Aspiring Full-Stack Software Engineer
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              aria-label="GitHub"
              href="https://github.com/MdFahimHassan"
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:border-nebula-violet/60 hover:text-foreground"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/md-fahim-hassan-042110386/"
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:border-nebula-violet/60 hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              aria-label="Email"
              href="mailto:mdfahimhassanbd7@gmail.com"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:border-nebula-violet/60 hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="#home"
              aria-label="Back to top"
              className="ml-2 btn-ghost !py-2 !px-4 !text-xs"
            >
              <ArrowUp className="h-3.5 w-3.5" /> Top
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-white/5 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Md. Fahim Hassan. All rights reserved.</p>
          <p className="font-mono">Crafted with care · Dhaka, Bangladesh</p>
        </div>
      </div>
    </footer>
  );
}
