import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav
          className={`flex items-center justify-between rounded-full border transition-all duration-300 ${
            scrolled
              ? "glass border-white/10 px-4 py-2.5 shadow-lg shadow-black/30"
              : "border-transparent px-2 py-2"
          }`}
        >
          <Link
            to="/"
            className="group flex items-center gap-2 pl-2"
            aria-label="Home"
          >
            <span
              className="grid h-8 w-8 place-items-center rounded-lg font-display text-sm font-bold text-white"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.6 0.22 265), oklch(0.55 0.24 310))",
                boxShadow:
                  "0 4px 20px -4px oklch(0.55 0.24 310 / 0.6)",
              }}
            >
              F
            </span>
            <span className="font-display text-sm font-semibold tracking-tight">
              Fahim<span className="text-muted-foreground">.dev</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="hidden btn-primary md:inline-flex">
            Let&apos;s Talk
          </a>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div className="glass mt-2 rounded-2xl border border-white/10 p-3 md:hidden">
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-4 py-3 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 w-full btn-primary"
                >
                  Let&apos;s Talk
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
