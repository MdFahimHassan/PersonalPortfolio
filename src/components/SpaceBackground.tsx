import { useEffect, useRef } from "react";

export function SpaceBackground() {
  // Deterministic star positions to avoid SSR hydration mismatch.
  const stars = Array.from({ length: 110 }, (_, i) => {
    const seed = (i * 9301 + 49297) % 233280;
    const rand = (n: number) => ((seed * (n + 1)) % 1000) / 1000;
    return {
      left: rand(1) * 100,
      top: rand(2) * 100,
      size: 0.5 + rand(3) * 1.8,
      delay: rand(4) * 4,
      duration: 3 + rand(5) * 4,
      opacity: 0.3 + rand(6) * 0.6,
    };
  });

  const spotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let raf = 0;
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let cx = tx;
    let cy = ty;
    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const tick = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      if (spotRef.current) {
        spotRef.current.style.transform = `translate3d(${cx - 300}px, ${cy - 300}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Deep gradient base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 800px at 15% -10%, oklch(0.35 0.18 275 / 0.35), transparent 60%), radial-gradient(1000px 700px at 90% 10%, oklch(0.4 0.2 310 / 0.28), transparent 55%), radial-gradient(900px 700px at 50% 110%, oklch(0.35 0.18 250 / 0.3), transparent 60%), linear-gradient(180deg, #09090B, #0F172A 60%, #09090B)",
        }}
      />

      {/* Nebula blobs */}
      <div
        className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full opacity-40 blur-3xl animate-float"
        style={{
          background:
            "radial-gradient(circle, oklch(0.55 0.22 275 / 0.7), transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/3 -right-32 h-[480px] w-[480px] rounded-full opacity-35 blur-3xl animate-float"
        style={{
          animationDelay: "2s",
          background:
            "radial-gradient(circle, oklch(0.6 0.24 310 / 0.7), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-1/4 h-[420px] w-[420px] rounded-full opacity-30 blur-3xl animate-float"
        style={{
          animationDelay: "4s",
          background:
            "radial-gradient(circle, oklch(0.7 0.2 220 / 0.6), transparent 70%)",
        }}
      />

      {/* Stars */}
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.opacity,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
            boxShadow: "0 0 6px rgba(255,255,255,0.6)",
          }}
        />
      ))}

      {/* Grid mesh overlay */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at center, black 20%, transparent 75%)",
        }}
      />

      {/* Scanlines for techy feel */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.6) 0px, rgba(255,255,255,0.6) 1px, transparent 1px, transparent 3px)",
        }}
      />

      {/* Cursor spotlight */}
      <div
        ref={spotRef}
        className="absolute h-[600px] w-[600px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.7 0.2 285 / 0.35), transparent 65%)",
          transition: "opacity 0.6s ease",
          willChange: "transform",
        }}
      />
    </div>
  );
}
